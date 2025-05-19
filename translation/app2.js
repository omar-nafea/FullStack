// ----------------------------------------------------------------------------------
// IMPORTANT: REPLACE "YOUR_MW_API_KEY_HERE" WITH YOUR ACTUAL MERRIAM-WEBSTER API KEY
// ----------------------------------------------------------------------------------
const API_KEY = "ce783f93-1ba5-4c60-8433-512ac0a0b5ea";
// If you don't have one, get it from: https://dictionaryapi.com/

let globalPronunciationPlayer = null;
const currentAudio = { basename: null };

// DOM Elements (ensure all are correctly fetched)
const wordInputElement = document.getElementById('wordInput');
const searchButtonElement = document.getElementById('searchButton');
const playPronunciationBtnElement = document.getElementById('playPronunciationBtn');
// const targetLanguageElement = document.getElementById('targetLanguage'); // Not directly used if hardcoding to Arabic

const loadingMsgElement = document.getElementById('loadingMessage');
const errorMsgDivElement = document.getElementById('errorMessage');
const wordDetailsDivElement = document.getElementById('wordDetails');
const wordDisplayElement = document.getElementById('wordDisplay');
const pronunciationTextElement = document.getElementById('pronunciationText');
const functionalLabelElement = document.getElementById('functionalLabel');
const definitionsListElement = document.getElementById('definitionsList');
const synonymsListElement = document.getElementById('synonymsList');
const synonymsAreaElement = document.getElementById('synonymsArea');

// --- Audio Helper Functions --- (Keep these as they are)
function buildAudioUrl(audioBasename) {
  if (!audioBasename || typeof audioBasename !== 'string') { return null; }
  let subdirectory;
  if (audioBasename.startsWith("bix")) { subdirectory = "bix"; }
  else if (audioBasename.startsWith("gg")) { subdirectory = "gg"; }
  else if (audioBasename.match(/^[a-zA-Z]/)) { subdirectory = audioBasename.charAt(0).toLowerCase(); }
  else { subdirectory = audioBasename.charAt(0).toLowerCase(); }
  return `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${audioBasename}.mp3`;
}
function playAudioFromUrl(audioUrl) {
  if (!audioUrl) { console.error("No audio URL provided."); return; }
  if (!globalPronunciationPlayer) { globalPronunciationPlayer = new Audio(); }
  globalPronunciationPlayer.src = audioUrl;
  globalPronunciationPlayer.play().catch(error => {
    console.error("Error playing audio:", error);
    errorMsgDivElement.textContent = "Could not play audio. Check console (autoplay restrictions?).";
    errorMsgDivElement.style.display = 'block';
  });
}
function playPronunciation(audioBasename) {
  const audioUrl = buildAudioUrl(audioBasename);
  if (audioUrl) { playAudioFromUrl(audioUrl); }
}

// --- Data Extraction Function (processWordDataForDisplay) --- (Keep this as it is)
function processWordDataForDisplay(wordData) {
  const displayData = {
    word: wordData.meta?.id.split(':')[0] || wordData.hwi?.hw || '',
    functionalLabel: wordData.fl || '',
    pronunciationText: '',
    pronunciationAudioBasename: null,
    definitions: [],
    synonyms: []
  };
  if (wordData.hwi?.prs && wordData.hwi.prs[0]) {
    const firstPron = wordData.hwi.prs[0];
    displayData.pronunciationText = firstPron.mw || '';
    if (firstPron.sound?.audio) {
      displayData.pronunciationAudioBasename = firstPron.sound.audio;
    }
  }
  if (wordData.def) {
    wordData.def.forEach(defSection => {
      if (defSection.sseq) {
        defSection.sseq.forEach(sseqGroup => {
          sseqGroup.forEach(sseqEntry => {
            if (sseqEntry[0] === 'sense') {
              const sense = sseqEntry[1];
              let currentDefText = '';
              const currentExamples = [];
              let senseNumber = sense.sn ? (sense.sn.replace(/^\s*\d+\s*/, '') ? sense.sn : (sense.sn.match(/^\d+/) ? sense.sn.match(/^\d+/)[0] : sense.sn)) : '';
              if (sense.dt) {
                sense.dt.forEach(dtItem => {
                  if (dtItem[0] === 'text') {
                    currentDefText += dtItem[1].replace(/{[^}]+}/g, '').trim() + ' ';
                  } else if (dtItem[0] === 'vis') {
                    dtItem[1].forEach(visItem => {
                      if (visItem.t) {
                        currentExamples.push(visItem.t.replace(/{[^}]+}/g, ''));
                      }
                    });
                  } else if (dtItem[0] === 'sx') {
                    displayData.synonyms.push(dtItem[1].replace(/{[^}]+}/g, ''));
                  }
                });
              }
              if (currentDefText.trim()) {
                displayData.definitions.push({
                  text: currentDefText.trim(),
                  examples: currentExamples,
                  senseNumber: senseNumber
                });
              }
              if (sense.syns) {
                sense.syns.forEach(synEntry => {
                  synEntry.pt.forEach(ptItem => {
                    let synText = '';
                    if (Array.isArray(ptItem) && ptItem[0] === 'text') {
                      synText = ptItem[1];
                    } else if (typeof ptItem === 'string') {
                      synText = ptItem;
                    } else if (ptItem.wd) {
                      synText = ptItem.wd;
                    }
                    if (synText) displayData.synonyms.push(synText.replace(/{[^}]+}/g, ''));
                  });
                });
              }
            }
          });
        });
      }
    });
  }
  displayData.synonyms = [...new Set(displayData.synonyms)];
  return displayData;
}

// --- MODIFIED: Helper function to create an in-page translate button ---
function createTranslateButton(textToTranslate, textElementToUpdate) {
  const button = document.createElement('button');
  button.className = 'translate-btn';
  button.textContent = 'Translate to Arabic';
  button.title = 'Translate this text to Arabic';

  // Store original text in a data attribute if you want to add a "show original" later
  textElementToUpdate.dataset.originalText = textToTranslate;
  textElementToUpdate.dataset.isTranslated = "false";


  button.addEventListener('click', async () => {
    // If already translated, clicking again could revert (optional future feature)
    // For now, it will re-translate if clicked again after a failure or timeout.

    const originalButtonText = button.textContent;
    button.textContent = 'Translating...';
    button.disabled = true;

    const textForTranslation = textElementToUpdate.dataset.originalText; // Always translate original
    const sourceLang = 'en';
    const targetLang = 'ar'; // Target Arabic

    // MyMemory API endpoint. Providing an email in 'de' parameter can increase daily limits.
    // const userEmailForMyMemory = 'YOUR_EMAIL_HERE'; // Optional: for higher limits
    // const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textForTranslation)}&langpair=${sourceLang}|${targetLang}&de=${userEmailForMyMemory}`;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textForTranslation)}&langpair=${sourceLang}|${targetLang}`;


    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Translation API error! Status: ${response.status} - ${await response.text()}`);
      }
      const data = await response.json();

      if (data.responseData && data.responseData.translatedText && data.responseData.translatedText.toLowerCase() !== "no translation found for this language pair") {
        // Basic sanitization for MyMemory's occasional quirks
        let translated = data.responseData.translatedText
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>');

        textElementToUpdate.innerHTML = `<span dir="rtl" lang="ar">${translated}</span> <span class="translation-status">(عربي)</span>`;
        textElementToUpdate.dataset.isTranslated = "true";
        button.textContent = 'Translated'; // Indicate success
        // Consider hiding or changing button to "Show Original"
        // button.style.display = 'none'; // Option: hide after successful translation
      } else if (data.responseStatus && data.responseStatus !== 200) { // MyMemory specific error codes
        throw new Error(`Translation failed: ${data.responseDetails || 'MyMemory API issue'}`);
      }
      else {
        // Handle cases where API returns 200 but no useful translation
        textElementToUpdate.innerHTML = textElementToUpdate.dataset.originalText + ` <span class="translation-status" style="color: #cc8400;">(No specific Arabic translation found)</span>`;
        button.textContent = 'No Translation';
      }
    } catch (error) {
      console.error('Translation error:', error);
      textElementToUpdate.innerHTML = textElementToUpdate.dataset.originalText + ` <span class="translation-status" style="color: red;">(Translation failed)</span>`;
      button.textContent = 'Translation Failed';
    } finally {
      // Re-enable button after a short delay, allowing for another attempt or different action
      setTimeout(() => {
        if (button.textContent !== 'Translated') { // Only reset if not successfully translated
          button.disabled = false;
          button.textContent = 'Translate to Arabic';
        }
      }, 2500);
    }
  });
  return button;
}


// --- Render Data to HTML Function (MODIFIED to use new translate button logic) ---
function renderDataToHtml(data) {
  errorMsgDivElement.textContent = '';
  errorMsgDivElement.style.display = 'none';
  wordDetailsDivElement.style.display = 'none';

  wordDisplayElement.textContent = '';
  pronunciationTextElement.textContent = '';
  functionalLabelElement.textContent = '';
  definitionsListElement.innerHTML = '';
  synonymsListElement.innerHTML = '';
  synonymsAreaElement.style.display = 'none';
  playPronunciationBtnElement.style.display = 'none';
  currentAudio.basename = null;

  if (!data) { return; }

  wordDetailsDivElement.style.display = 'block';
  wordDisplayElement.textContent = data.word || 'Word not found';
  pronunciationTextElement.textContent = data.pronunciationText || 'N/A';
  functionalLabelElement.textContent = data.functionalLabel || 'N/A';

  if (data.pronunciationAudioBasename) {
    currentAudio.basename = data.pronunciationAudioBasename;
    playPronunciationBtnElement.style.display = 'inline-block';
  }

  if (data.definitions && data.definitions.length > 0) {
    data.definitions.forEach(defItem => {
      const dt = document.createElement('dt');
      const senseNumSpanHTML = defItem.senseNumber ? `<span class="sense-number">${defItem.senseNumber}</span>` : '';

      const defTextSpan = document.createElement('span'); // Span to hold the original definition text
      defTextSpan.innerHTML = senseNumSpanHTML + defItem.text; // Set its content
      dt.appendChild(defTextSpan); // Add text span to <dt>

      // Pass the defTextSpan to createTranslateButton so it can update its content
      const translateDefButton = createTranslateButton(defItem.text, defTextSpan);
      dt.appendChild(translateDefButton); // Add button next to text span
      definitionsListElement.appendChild(dt);

      if (defItem.examples && defItem.examples.length > 0) {
        const ddExamples = document.createElement('dd');
        const ulExamples = document.createElement('ul');
        defItem.examples.forEach(ex => {
          const liExample = document.createElement('li');
          const exTextSpan = document.createElement('span'); // Span for example text
          exTextSpan.textContent = ex;
          liExample.appendChild(exTextSpan);

          // Pass exTextSpan to createTranslateButton
          const translateExButton = createTranslateButton(ex, exTextSpan);
          liExample.appendChild(translateExButton);
          ulExamples.appendChild(liExample);
        });
        ddExamples.appendChild(ulExamples);
        definitionsListElement.appendChild(ddExamples);
      }
    });
  } else {
    const p = document.createElement('p');
    p.textContent = 'No definitions found.';
    definitionsListElement.appendChild(p);
  }

  if (data.synonyms && data.synonyms.length > 0) {
    synonymsAreaElement.style.display = 'block';
    data.synonyms.forEach(syn => {
      const li = document.createElement('li');
      li.textContent = syn;
      synonymsListElement.appendChild(li);
    });
  }
}

// --- Main Lookup Function (lookupWord) --- (Error handling further refined)
async function lookupWord(word) {
  if (!word) {
    errorMsgDivElement.textContent = "Please provide a word to lookup.";
    errorMsgDivElement.style.display = 'block';
    wordDetailsDivElement.style.display = 'none';
    return;
  }

  if (API_KEY === "YOUR_MW_API_KEY_HERE" || !API_KEY) {
    errorMsgDivElement.textContent = "API Key not configured. Please replace 'YOUR_MW_API_KEY_HERE' in script.js with your actual Merriam-Webster API key.";
    errorMsgDivElement.style.display = 'block';
    wordDetailsDivElement.style.display = 'none';
    loadingMsgElement.style.display = 'none';
    console.error("API Key is not configured in script.js");
    return;
  }

  loadingMsgElement.style.display = 'block';
  errorMsgDivElement.textContent = '';
  errorMsgDivElement.style.display = 'none';
  wordDetailsDivElement.style.display = 'none';

  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${encodeURIComponent(word)}?key=${API_KEY}`;
  let responseTextForDebug = "";

  try {
    const response = await fetch(url);
    const clonedResponseForText = response.clone(); // Clone for text debugging if JSON fails

    if (!response.ok) {
      let apiErrorDetails = "Could not retrieve error details.";
      try { apiErrorDetails = await response.text(); } catch (e) { /* ignore */ }
      const errorStatusText = `HTTP error! Status: ${response.status} (${response.statusText})`;
      console.error(errorStatusText, "\nAPI Error Details:", apiErrorDetails);
      renderDataToHtml(null);
      errorMsgDivElement.textContent = `${errorStatusText}. The API might be down or the request was bad. Details: ${apiErrorDetails.substring(0, 150)}...`;
      errorMsgDivElement.style.display = 'block';
      return;
    }

    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      console.error("Failed to parse API response as JSON:", jsonError);
      try {
        responseTextForDebug = await clonedResponseForText.text();
        console.error("Raw API Response Text (that caused JSON error):", responseTextForDebug);
      } catch (textError) {
        responseTextForDebug = "Could not retrieve raw text for debugging."
        console.error("Could not get raw text from cloned response:", textError);
      }
      renderDataToHtml(null);
      errorMsgDivElement.textContent = `Error: API response was not valid JSON. This often means an issue with your API key, API limits, or the API service itself. Preview: ${responseTextForDebug.substring(0, 150)}... (Check console for full text and error). Please verify your API_KEY in script.js.`;
      errorMsgDivElement.style.display = 'block';
      return;
    }

    if (!Array.isArray(data) || data.length === 0) {
      renderDataToHtml(null);
      errorMsgDivElement.textContent = `No information found for "${word}". The API returned an empty array.`;
      errorMsgDivElement.style.display = 'block';
      return;
    }

    const firstResult = data[0];
    if (typeof firstResult === 'string') {
      let suggestionsMsg = `"${word}" not found. The API suggests: ${data.join(', ')}`;
      renderDataToHtml(null);
      errorMsgDivElement.textContent = suggestionsMsg;
      errorMsgDivElement.style.display = 'block';
      return;
    }

    if (typeof firstResult !== 'object' || firstResult === null || !firstResult.meta) {
      renderDataToHtml(null);
      errorMsgDivElement.textContent = `Unexpected data structure received from API for "${word}".`;
      errorMsgDivElement.style.display = 'block';
      console.log("Unexpected data structure:", firstResult);
      return;
    }

    const processedData = processWordDataForDisplay(firstResult);
    renderDataToHtml(processedData);

  } catch (error) {
    console.error("General error during lookupWord:", error);
    renderDataToHtml(null);
    let userErrorMessage = `An unexpected error occurred: ${error.message}. Check your internet connection and the browser console.`;
    if (error.message.toLowerCase().includes('failed to fetch')) {
      userErrorMessage += " This might be a network issue or a CORS problem if the API doesn't support client-side requests directly (though Merriam-Webster usually does).";
    }
    errorMsgDivElement.textContent = userErrorMessage;
    errorMsgDivElement.style.display = 'block';
  } finally {
    loadingMsgElement.style.display = 'none';
  }
}

// --- Event Listeners ---
function handleSearch() {
  const word = wordInputElement.value.trim();
  lookupWord(word);
}

searchButtonElement.addEventListener('click', handleSearch);
wordInputElement.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearch();
  }
});
playPronunciationBtnElement.addEventListener('click', () => {
  if (currentAudio.basename) {
    playPronunciation(currentAudio.basename);
  }
});

// Initial UI setup
errorMsgDivElement.style.display = 'none';
wordDetailsDivElement.style.display = 'none';
loadingMsgElement.style.display = 'none';