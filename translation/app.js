// ----------------------------------------------------------------------------------
// IMPORTANT: REPLACE "YOUR_MW_API_KEY_HERE" WITH YOUR ACTUAL MERRIAM-WEBSTER API KEY
// ----------------------------------------------------------------------------------
const MW_API_KEY = "ce783f93-1ba5-4c60-8433-512ac0a0b5ea";
// If you don't have one, get it from: https://dictionaryapi.com/

let flashcardWords = [];
let currentCardIndex = 0;
const mwDataCache = new Map(); // Using Map for caching

// DOM Elements
const flashcardElement = document.getElementById('flashcard');
const flashcardWordFrontElement = document.getElementById('flashcard-word-front');
const flashcardPronunciationTextElement = document.getElementById('flashcard-pronunciation-text');
const flashcardPlayAudioBtnElement = document.getElementById('flashcard-play-audio-btn');

const flashcardBackContentElement = document.querySelector('.flashcard-back .flashcard-back-content');
const flashcardWordBackElement = document.getElementById('flashcard-word-back');
const flashcardHeadwordArabicElement = document.getElementById('flashcard-headword-arabic');
const flashcardMwDetailsElement = document.getElementById('flashcard-mw-details');
const flashcardFunctionalLabelElement = document.getElementById('flashcard-functional-label');
const flashcardDefinitionsListElement = document.getElementById('flashcard-definitions-list');
const flashcardSynonymsAreaElement = document.getElementById('flashcard-synonyms-area');
const flashcardSynonymsListElement = document.getElementById('flashcard-synonyms-list');
const flashcardWordNotFoundAreaElement = document.getElementById('flashcard-word-not-found-area');


const prevCardBtnElement = document.getElementById('prev-card-btn');
const nextCardBtnElement = document.getElementById('next-card-btn');

const loadingMsgElement = document.getElementById('loading-message');
const errorMsgElement = document.getElementById('error-message');

let globalPronunciationPlayer = null;
let currentPronunciationAudioBasename = null;


// --- Initialization ---
async function initializeApp() {
  showLoadingMessage("Loading word list...");
  try {
    const response = await fetch('words.json');
    if (!response.ok) {
      throw new Error(`Failed to load words.json: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.words || !Array.isArray(data.words)) {
      throw new Error("words.json is not in the correct format. Expected an object with a 'words' array.");
    }
    flashcardWords = [...new Set(data.words.filter(word => typeof word === 'string' && word.trim() !== ''))];

    if (flashcardWords.length === 0) {
      showErrorMessage("No words found in words.json. Please add words to study.");
      prevCardBtnElement.disabled = true;
      nextCardBtnElement.disabled = true;
      return;
    }

    currentCardIndex = 0;
    await displayCard(currentCardIndex);
    setupEventListeners();
    hideLoadingMessage();

  } catch (error) {
    console.error("Initialization failed:", error);
    showErrorMessage(`Error initializing app: ${error.message}. Make sure words.json exists and is correctly formatted, and that your web server can serve JSON files.`);
  }
}

// --- UI Message Helpers ---
function showLoadingMessage(message = "Loading...") {
  loadingMsgElement.textContent = message;
  loadingMsgElement.style.display = 'block';
  errorMsgElement.style.display = 'none';
}
function hideLoadingMessage() {
  loadingMsgElement.style.display = 'none';
}
function showErrorMessage(message) {
  errorMsgElement.textContent = message;
  errorMsgElement.style.display = 'block';
  hideLoadingMessage();
  flashcardElement.classList.remove('is-flipped');
  const frontContent = flashcardElement.querySelector('.flashcard-front .flashcard-front-content');
  const backContent = flashcardElement.querySelector('.flashcard-back .flashcard-back-content');
  if (frontContent) frontContent.style.display = 'none';
  if (backContent) backContent.style.display = 'none';
}


// --- Card Display Logic ---
async function displayCard(index) {
  if (index < 0 || index >= flashcardWords.length) {
    console.warn("Invalid card index:", index);
    return;
  }
  currentCardIndex = index;
  const word = flashcardWords[index];

  showLoadingMessage(`Loading data for "${word}"...`);
  resetCardView(word);

  try {
    let processedMwData = mwDataCache.get(word);
    if (!processedMwData) {
      processedMwData = await fetchAndProcessMwData(word);
      if (processedMwData && !processedMwData.error) {
        mwDataCache.set(word, processedMwData);
      }
    }

    flashcardHeadwordArabicElement.innerHTML = '<i>Translating word...</i>';
    translateTextToArabic(word)
      .then(translatedWord => {
        if (translatedWord) {
          flashcardHeadwordArabicElement.innerHTML = `<span dir="rtl" lang="ar">${translatedWord}</span>`;
        } else {
          flashcardHeadwordArabicElement.innerHTML = `<span style="font-style:italic; color: #6c757d;">(No translation found for word)</span>`;
        }
      })
      .catch(error => {
        console.error(`Failed to translate headword "${word}" for back of card:`, error);
        flashcardHeadwordArabicElement.innerHTML = `<span style="font-style:italic; color:red;">(Word translation failed)</span>`;
      });


    if (processedMwData && !processedMwData.error) {
      populateCardFront(word, processedMwData);
      populateCardBack(word, processedMwData);
      flashcardWordNotFoundAreaElement.style.display = 'none';
      flashcardMwDetailsElement.style.display = 'block';
    } else {
      const errorMessage = processedMwData ? processedMwData.errorMessage : `Details for "${word}" not found.`;
      handleWordNotFoundOnCard(word, errorMessage);
    }
  } catch (error) {
    console.error(`Error displaying card for "${word}":`, error);
    showErrorMessage(`Failed to load data for "${word}". ${error.message}`);
    handleWordNotFoundOnCard(word, `Error loading data: ${error.message}`);
  } finally {
    hideLoadingMessage();
    updateNavigationButtons();
  }
}

function resetCardView(wordForTitle) {
  flashcardElement.classList.remove('is-flipped');

  const frontContent = flashcardElement.querySelector('.flashcard-front .flashcard-front-content');
  const backContent = flashcardElement.querySelector('.flashcard-back .flashcard-back-content');
  if (frontContent) frontContent.style.display = 'block'; // Ensure visible
  if (backContent) backContent.style.display = 'block';  // Ensure visible (CSS handles actual show/hide via .is-flipped)


  flashcardWordFrontElement.textContent = wordForTitle || '...';
  flashcardPronunciationTextElement.textContent = 'Loading...';
  flashcardPlayAudioBtnElement.style.display = 'none';
  currentPronunciationAudioBasename = null;

  flashcardWordBackElement.textContent = wordForTitle || '...';
  flashcardHeadwordArabicElement.innerHTML = '<i>Translating...</i>';
  flashcardFunctionalLabelElement.textContent = 'Loading...';
  flashcardDefinitionsListElement.innerHTML = '';
  flashcardSynonymsListElement.innerHTML = '';
  flashcardSynonymsAreaElement.style.display = 'none';

  flashcardWordNotFoundAreaElement.style.display = 'none';
  flashcardMwDetailsElement.style.display = 'block';
}

function populateCardFront(word, processedData) {
  flashcardWordFrontElement.textContent = word;
  if (processedData && processedData.pronunciationText) {
    flashcardPronunciationTextElement.textContent = processedData.pronunciationText;
  } else {
    flashcardPronunciationTextElement.textContent = "N/A";
  }

  if (processedData && processedData.pronunciationAudioBasename) {
    currentPronunciationAudioBasename = processedData.pronunciationAudioBasename;
    flashcardPlayAudioBtnElement.style.display = 'block';
    console.log("[DEBUG] populateCardFront: Audio Basename SET to:", currentPronunciationAudioBasename, "for word:", word);
  } else {
    currentPronunciationAudioBasename = null;
    flashcardPlayAudioBtnElement.style.display = 'none';
    console.log("[DEBUG] populateCardFront: NO Audio Basename found for word:", word, "Processed Data:", processedData);
  }
}

function populateCardBack(word, processedData) {
  flashcardWordBackElement.textContent = word;
  flashcardMwDetailsElement.style.display = 'block';
  flashcardWordNotFoundAreaElement.style.display = 'none';

  flashcardFunctionalLabelElement.textContent = processedData.functionalLabel || 'N/A';

  flashcardDefinitionsListElement.innerHTML = '';
  if (processedData.definitions && processedData.definitions.length > 0) {
    processedData.definitions.forEach(defItem => {
      const dt = document.createElement('dt');
      const senseNumSpanHTML = defItem.senseNumber ? `<span class="sense-number">${defItem.senseNumber}</span>` : '';

      const defTextSpan = document.createElement('span');
      defTextSpan.innerHTML = senseNumSpanHTML + defItem.text;
      dt.appendChild(defTextSpan);

      const translateDefButton = createTranslateButton(defItem.text, defTextSpan);
      dt.appendChild(translateDefButton);
      flashcardDefinitionsListElement.appendChild(dt);

      // **** RE-ADDING EXAMPLES ****
      if (defItem.examples && defItem.examples.length > 0) {
        const ddExamples = document.createElement('dd');
        const ulExamples = document.createElement('ul');
        defItem.examples.forEach(ex => {
          const liExample = document.createElement('li');
          const exTextSpan = document.createElement('span');
          exTextSpan.textContent = ex;
          liExample.appendChild(exTextSpan);

          const translateExButton = createTranslateButton(ex, exTextSpan);
          liExample.appendChild(translateExButton);
          ulExamples.appendChild(liExample);
        });
        ddExamples.appendChild(ulExamples);
        flashcardDefinitionsListElement.appendChild(ddExamples);
      }
    });
  } else {
    const p = document.createElement('p');
    p.textContent = 'No definitions found by Merriam-Webster.';
    flashcardDefinitionsListElement.appendChild(p);
  }

  flashcardSynonymsListElement.innerHTML = '';
  if (processedData.synonyms && processedData.synonyms.length > 0) {
    flashcardSynonymsAreaElement.style.display = 'block';
    processedData.synonyms.forEach(syn => {
      const li = document.createElement('li');
      li.textContent = syn;
      flashcardSynonymsListElement.appendChild(li);
    });
  } else {
    flashcardSynonymsAreaElement.style.display = 'none';
  }
}

function handleWordNotFoundOnCard(word, errorMessage) {
  console.warn(`Handling "Word Not Found" or error for "${word}": ${errorMessage}`);

  flashcardWordFrontElement.textContent = word;
  flashcardPronunciationTextElement.textContent = "Pronunciation not available";
  flashcardPlayAudioBtnElement.style.display = 'none';
  currentPronunciationAudioBasename = null;

  flashcardWordBackElement.textContent = word;
  flashcardMwDetailsElement.style.display = 'none';
  flashcardWordNotFoundAreaElement.style.display = 'block';

  flashcardWordNotFoundAreaElement.innerHTML = `<p><i>${errorMessage || `Details for "${word}" were not found in the dictionary.`}</i></p>`;
  // Headword translation is initiated in displayCard, its placeholder will show status.
}


// --- Merriam-Webster API Fetching & Processing ---
async function fetchAndProcessMwData(word) {
  if (MW_API_KEY === "YOUR_MW_API_KEY_HERE" || !MW_API_KEY) {
    console.error("MW API Key not configured.");
    return { error: true, errorMessage: "Merriam-Webster API Key not configured. Please update script.js." };
  }

  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${encodeURIComponent(word)}?key=${MW_API_KEY}`;

  try {
    const response = await fetch(url);
    const clonedResponseForText = response.clone();

    if (!response.ok) {
      let apiErrorDetails = `HTTP ${response.status}: ${response.statusText}`;
      try { apiErrorDetails = await response.text(); } catch (e) { /* ignore */ }
      console.error(`MW API error for "${word}": ${apiErrorDetails}`);
      return { error: true, errorMessage: `Dictionary API Error (${response.status}) for "${word}".` };
    }

    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      let rawText = "Could not read raw response.";
      try { rawText = await clonedResponseForText.text(); } catch (e) {/*ignore*/ }
      console.error(`Failed to parse MW JSON for "${word}":`, jsonError, "\nRaw Response:", rawText.substring(0, 500));
      return { error: true, errorMessage: `Invalid data from Dictionary API for "${word}" (not JSON).` };
    }

    if (!Array.isArray(data) || data.length === 0 || typeof data[0] === 'string') {
      let suggestions = "";
      if (Array.isArray(data) && typeof data[0] === 'string') {
        suggestions = ` Suggestions: ${data.slice(0, 3).join(', ')}...`;
      }
      console.warn(`No direct match or only suggestions from MW for "${word}".${suggestions}`);
      return { error: true, errorMessage: `Word "${word}" not found in dictionary.${suggestions}` };
    }

    const firstResult = data[0];
    if (typeof firstResult !== 'object' || firstResult === null || !firstResult.meta) {
      console.warn(`Unexpected MW data structure for "${word}":`, firstResult);
      return { error: true, errorMessage: `Unexpected data structure from Dictionary API for "${word}".` };
    }

    return processMwDataForDisplay(firstResult);

  } catch (networkError) {
    console.error(`Network error fetching MW data for "${word}":`, networkError);
    return { error: true, errorMessage: `Network error trying to reach dictionary for "${word}": ${networkError.message}` };
  }
}

function processMwDataForDisplay(mwWordData) {
  const displayData = {
    functionalLabel: mwWordData.fl || '',
    pronunciationText: '',
    pronunciationAudioBasename: null,
    definitions: [],
    synonyms: []
  };
  if (mwWordData.hwi?.prs && mwWordData.hwi.prs[0]) {
    const firstPron = mwWordData.hwi.prs[0];
    displayData.pronunciationText = firstPron.mw || '';
    if (firstPron.sound?.audio) {
      displayData.pronunciationAudioBasename = firstPron.sound.audio;
    }
  }
  if (mwWordData.def) {
    mwWordData.def.forEach(defSection => {
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
                  } else if (dtItem[0] === 'vis') { // **** CAPTURE EXAMPLES ****
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
                  examples: currentExamples, // **** STORE EXAMPLES ****
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


// --- MyMemory Translation API Logic ---
async function translateTextToArabic(textToTranslate) {
  if (!textToTranslate || typeof textToTranslate !== 'string' || textToTranslate.trim() === '') {
    return null;
  }
  const sourceLang = 'en';
  const targetLang = 'ar';
  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=${sourceLang}|${targetLang}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      // Try to get more details from MyMemory error if possible
      let errorDetails = await response.text();
      errorDetails = errorDetails.substring(0, 200); // Keep it brief
      throw new Error(`MyMemory API error! Status: ${response.status} - ${errorDetails}`);
    }
    const data = await response.json();

    if (data.responseData && data.responseData.translatedText &&
      data.responseData.translatedText.toLowerCase() !== "no translation found" &&
      data.responseData.translatedText.toLowerCase() !== "no translation found for this language pair" &&
      data.responseData.translatedText.trim() !== "") { // Check for empty string too
      return data.responseData.translatedText
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
    } else if (data.responseStatus && data.responseStatus !== 200 && data.responseStatus !== 404) {
      throw new Error(`MyMemory translation failed: ${data.responseDetails || 'MyMemory API issue'}`);
    } else {
      console.warn("No specific Arabic translation found by MyMemory for:", textToTranslate.substring(0, 50));
      return null;
    }
  } catch (error) {
    console.error('MyMemory Translation error:', error);
    throw error;
  }
}

function createTranslateButton(englishText, englishTextSpanElement) {
  const button = document.createElement('button');
  button.className = 'translate-btn';
  button.textContent = 'Translate';
  button.title = 'Translate this text to Arabic';

  englishTextSpanElement.dataset.originalText = englishText; // Store original for re-translation if needed

  button.addEventListener('click', async (event) => {
    event.stopPropagation();

    // Remove any existing translation span or status message for this item
    let nextSibling = englishTextSpanElement.nextElementSibling;
    while (nextSibling && (nextSibling.classList.contains('arabic-translation') || nextSibling.classList.contains('translation-status-inline'))) {
      const toRemove = nextSibling;
      nextSibling = nextSibling.nextElementSibling;
      toRemove.remove();
    }

    button.textContent = 'Translating...';
    button.disabled = true;

    const textToTranslate = englishTextSpanElement.dataset.originalText; // Use stored original

    try {
      const translatedText = await translateTextToArabic(textToTranslate);

      const translationSpan = document.createElement('span');
      translationSpan.className = 'arabic-translation';
      translationSpan.setAttribute('dir', 'rtl');
      translationSpan.setAttribute('lang', 'ar');

      if (translatedText) {
        translationSpan.textContent = translatedText;
        button.textContent = 'Translated';
        button.disabled = true; // Keep disabled once successfully translated
      } else {
        translationSpan.innerHTML = `<em class="translation-status">(No specific translation found)</em>`;
        button.textContent = 'No Translation';
        // Allow re-try if no translation found
        setTimeout(() => { button.disabled = false; button.textContent = 'Translate'; }, 2000);
      }
      englishTextSpanElement.parentNode.insertBefore(translationSpan, englishTextSpanElement.nextSibling);

    } catch (error) {
      console.error('Inline Translation error:', error);
      const errorSpan = document.createElement('span');
      errorSpan.className = 'arabic-translation'; // Re-use class for consistent spacing
      errorSpan.innerHTML = `<em class="translation-status" style="color:red;">(Translation failed)</em>`;
      englishTextSpanElement.parentNode.insertBefore(errorSpan, englishTextSpanElement.nextSibling);
      button.textContent = 'Failed';
      // Allow re-try on failure
      setTimeout(() => { button.disabled = false; button.textContent = 'Translate'; }, 2000);
    }
  });
  return button;
}


// --- Audio Helper Functions (buildAudioUrl is essential) ---
function buildAudioUrl(audioBasename) {
  if (!audioBasename || typeof audioBasename !== 'string' || audioBasename.trim() === '') {
    console.warn("[DEBUG] buildAudioUrl: Invalid audioBasename provided:", audioBasename);
    return null;
  }
  let subdirectory;
  if (audioBasename.startsWith("bix")) {
    subdirectory = "bix";
  } else if (audioBasename.startsWith("gg")) {
    subdirectory = "gg";
  } else if (audioBasename.match(/^[a-zA-Z]/)) {
    subdirectory = audioBasename.charAt(0).toLowerCase();
  } else if (audioBasename.match(/^[0-9_]/)) {
    subdirectory = audioBasename.charAt(0);
    console.warn(`[DEBUG] buildAudioUrl: Basename "${audioBasename}" starts with non-alpha. Using first char '${subdirectory}' as subdirectory. Verify if this is correct for MW's structure.`);
  } else {
    subdirectory = audioBasename.charAt(0).toLowerCase();
    console.warn(`[DEBUG] buildAudioUrl: Basename "${audioBasename}" has an unexpected start. Using first char '${subdirectory}' as subdirectory.`);
  }
  return `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${audioBasename}.mp3`;
}

function playCurrentPronunciationAudio() {
  console.log("[DEBUG] playCurrentPronunciationAudio: Called. Current Basename:", currentPronunciationAudioBasename);
  if (!currentPronunciationAudioBasename) {
    console.warn("[DEBUG] playCurrentPronunciationAudio: No audio basename available to play.");
    return;
  }

  const audioUrl = buildAudioUrl(currentPronunciationAudioBasename);
  console.log("[DEBUG] playCurrentPronunciationAudio: Constructed Audio URL:", audioUrl);

  if (audioUrl) {
    if (!globalPronunciationPlayer) {
      globalPronunciationPlayer = new Audio();
      console.log("[DEBUG] playCurrentPronunciationAudio: New Audio object created.");
    }
    globalPronunciationPlayer.src = audioUrl;
    console.log("[DEBUG] playCurrentPronunciationAudio: Attempting to play", audioUrl);
    globalPronunciationPlayer.play().then(() => {
      console.log("[DEBUG] playCurrentPronunciationAudio: Playback started for", audioUrl);
    }).catch(error => {
      console.error("[DEBUG] playCurrentPronunciationAudio: Error playing audio:", error, "URL:", audioUrl);
      showErrorMessage("Could not play audio. Check console (e.g., file not found, browser restrictions).");
    });
  } else {
    console.error("[DEBUG] playCurrentPronunciationAudio: Could not build audio URL for basename:", currentPronunciationAudioBasename);
    showErrorMessage("Could not construct audio URL for pronunciation.");
  }
}

// --- Navigation and Interaction ---
function flipCard() {
  flashcardElement.classList.toggle('is-flipped');
}

async function nextCard() {
  if (currentCardIndex < flashcardWords.length - 1) {
    await displayCard(currentCardIndex + 1);
  }
}

async function prevCard() {
  if (currentCardIndex > 0) {
    await displayCard(currentCardIndex - 1);
  }
}

function updateNavigationButtons() {
  prevCardBtnElement.disabled = currentCardIndex === 0;
  nextCardBtnElement.disabled = currentCardIndex === flashcardWords.length - 1;
}


// --- Setup Event Listeners ---
function setupEventListeners() {
  flashcardPlayAudioBtnElement.addEventListener('click', (event) => {
    event.stopPropagation();
    playCurrentPronunciationAudio();
  });

  flashcardElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
      return;
    }
    flipCard();
  });
  nextCardBtnElement.addEventListener('click', nextCard);
  prevCardBtnElement.addEventListener('click', prevCard);
}

// --- Start the App ---
document.addEventListener('DOMContentLoaded', initializeApp);