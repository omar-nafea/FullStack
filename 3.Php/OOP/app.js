document.addEventListener('DOMContentLoaded', function () {
  const sidebarLinks = document.querySelectorAll('#sidebar .sidebar-link');
  const contentSections = document.querySelectorAll('#main-content .content-section');
  const mainContentArea = document.getElementById('main-content');

  const geminiModal = document.getElementById('gemini-modal');
  const geminiModalTitle = document.getElementById('gemini-modal-title');
  const geminiModalContentWrapper = document.getElementById('gemini-modal-content-wrapper');
  const geminiLoading = document.getElementById('gemini-loading');
  const geminiResponseArea = document.getElementById('gemini-response-area');
  const geminiModalCloseBtn = document.getElementById('gemini-modal-close');

  function openGeminiModal(title) {
    geminiModalTitle.textContent = title;
    geminiResponseArea.innerHTML = '';
    geminiLoading.classList.remove('hidden');
    geminiModal.classList.remove('hidden');
  }

  function closeGeminiModal() {
    geminiModal.classList.add('hidden');
    geminiLoading.classList.add('hidden');
  }

  geminiModalCloseBtn.addEventListener('click', closeGeminiModal);
  geminiModal.addEventListener('click', function (event) { // Close on backdrop click
    if (event.target === geminiModal) {
      closeGeminiModal();
    }
  });


  async function callGeminiAPI(prompt) {
    openGeminiModal("AI Assistant ✨"); // Generic title, can be overridden if needed
    geminiLoading.classList.remove('hidden');
    geminiResponseArea.innerHTML = '';

    let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = { contents: chatHistory };
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error (${response.status}): ${errorData.error?.message || 'Unknown error'}`);
      }

      const result = await response.json();

      let text = 'No content found.';
      if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
        text = result.candidates[0].content.parts[0].text;
      }

      // Basic Markdown to HTML (newlines, bold, italic, code blocks, lists)
      let htmlResponse = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>')     // Italic
        .replace(/```php\n([\s\S]*?)```/g, '<pre><code class="language-php">$1</code></pre>') // PHP code blocks
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>') // Generic code blocks
        .replace(/^\s*-\s+(.*)/gm, '<li>$1</li>') // Unordered list items
        .replace(/(<li>.*<\/li>\s*)+/g, '<ul>$&</ul>') // Wrap LIs in UL
        .replace(/^\s*\d+\.\s+(.*)/gm, '<li>$1</li>') // Ordered list items
        .replace(/(<li>.*<\/li>\s*)+/g, function (match, p1, offset, string) {
          // Check if previous LIs were part of an OL already
          // This is a bit tricky and might need a more robust parser for mixed lists
          if (string.substring(0, offset).includes("<ol>")) return match; // Avoid double wrapping
          return '<ol>$&</ol>';
        })
        .replace(/\n/g, '<br>');

      geminiResponseArea.innerHTML = htmlResponse;

    } catch (error) {
      console.error("Gemini API call failed:", error);
      geminiResponseArea.innerHTML = `<p class="text-red-600 font-semibold">Sorry, something went wrong: ${error.message}</p>`;
    } finally {
      geminiLoading.classList.add('hidden');
    }
  }


  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute('data-section');
      contentSections.forEach(section => section.classList.add('hidden'));
      const targetSection = document.getElementById(sectionId + '-content');
      if (targetSection) {
        targetSection.classList.remove('hidden');
        mainContentArea.scrollTop = 0;
      }
      sidebarLinks.forEach(s_link => s_link.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.explain-code-btn').forEach(button => {
    button.addEventListener('click', function () {
      const codeBlockElement = this.closest('.code-block').querySelector('pre code');
      const phpCode = codeBlockElement ? codeBlockElement.innerText : 'No code found.';
      const prompt = `Explain the following PHP code snippet in simple terms. Focus on its purpose, key OOP concepts demonstrated (if any), and how it works line by line or by logical blocks:\n\n\`\`\`php\n${phpCode}\n\`\`\``;
      geminiModalTitle.textContent = "Code Explanation ✨";
      callGeminiAPI(prompt);
    });
  });

  document.querySelectorAll('.generate-quiz-btn').forEach(button => {
    button.addEventListener('click', function () {
      const conceptName = this.dataset.conceptName;
      const sectionId = this.dataset.sectionId;
      const conceptTextElement = document.getElementById(sectionId)?.querySelector('.concept-explanation-text');
      const conceptText = conceptTextElement ? conceptTextElement.innerText.substring(0, 1500) : 'General OOP concept.'; // Limit context length
      const prompt = `Generate one multiple-choice quiz question about the PHP OOP concept: "${conceptName}". 
The question should test understanding of this concept. Provide 4 distinct options (A, B, C, D) and clearly indicate the correct answer (e.g., "Correct Answer: C").
Context for the concept:
${conceptText}`;
      geminiModalTitle.textContent = `Quiz: ${conceptName} ✨`;
      callGeminiAPI(prompt);
    });
  });

  document.querySelectorAll('.suggest-example-btn').forEach(button => {
    button.addEventListener('click', function () {
      const conceptName = this.dataset.conceptName;
      const sectionId = this.dataset.sectionId;
      const conceptTextElement = document.getElementById(sectionId)?.querySelector('.concept-explanation-text');
      const conceptText = conceptTextElement ? conceptTextElement.innerText.substring(0, 1500) : 'General OOP concept.';
      const prompt = `Provide a simple, clear, and concise real-world PHP code example that effectively illustrates the OOP concept of "${conceptName}".
The example should be easy to understand. After the code, briefly explain how the example demonstrates the concept.
Format the PHP code within triple backticks like \`\`\`php ... \`\`\`.
Context for the concept:
${conceptText}`;
      geminiModalTitle.textContent = `Example: ${conceptName} ✨`;
      callGeminiAPI(prompt);
    });
  });

  document.querySelectorAll('.copy-code-btn').forEach(button => {
    button.addEventListener('click', function () {
      const codeBlock = this.closest('.code-block').querySelector('pre code');
      const codeToCopy = codeBlock.innerText;
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = codeToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      try {
        document.execCommand('copy');
        const originalText = this.innerText;
        this.innerText = 'Copied!';
        setTimeout(() => { this.innerText = originalText; }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
        const originalText = this.innerText;
        this.innerText = 'Failed!';
        setTimeout(() => { this.innerText = originalText; }, 2000);
      }
      document.body.removeChild(tempTextArea);
    });
  });

  // Initially show the first section
  if (sidebarLinks.length > 0) {
    sidebarLinks[0].click();
  }
});