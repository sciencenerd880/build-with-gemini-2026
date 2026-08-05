// SG Defender - App Logic

// Preset Decks
const PRESETS = {
  singapore: [
    {
      question: "What is the English translation of Singapore's national anthem, 'Majulah Singapura'?",
      options: ["Onward Singapore", "Victory to Singapore", "Unity of Singapore", "Beautiful Singapore"],
      answer: "Onward Singapore",
      explanation: "Written by Zubir Said in 1958, 'Majulah Singapura' translates directly to 'Onward Singapore' in Malay."
    },
    {
      question: "Which iconic resort consists of three 55-storey towers topped by a boat-shaped SkyPark?",
      options: ["Resorts World Sentosa", "Marina Bay Sands", "Raffles Hotel", "Jewel Changi"],
      answer: "Marina Bay Sands",
      explanation: "Marina Bay Sands (MBS) is world-famous for its sky bridge, infinity pool, and three iconic towers."
    },
    {
      question: "In what year did Singapore gain independence?",
      options: ["1959", "1963", "1965", "1967"],
      answer: "1965",
      explanation: "Singapore separated from Malaysia and became an independent democratic nation on 9 August 1965."
    },
    {
      question: "What is the official mascot of Singapore, depicted with a lion's head and a fish's body?",
      options: ["The Singa", "The Merlion", "The Sea Dragon", "The Sang Nila Utama"],
      answer: "The Merlion",
      explanation: "The Merlion's fish body represents Singapore's origin as a fishing village (Temasek), and its lion head represents its original name, Singapura (Lion City)."
    },
    {
      question: "Which Singaporean historic site was previously known as 'Forbidden Hill' and houses the tomb of ancient kings?",
      options: ["Mount Faber", "Fort Canning Hill", "Bukit Timah Hill", "Sentosa Ridge"],
      answer: "Fort Canning Hill",
      explanation: "Fort Canning Hill was historically called 'Bukit Larangan' (Forbidden Hill) by local Malays who believed it was the seat of power for 14th-century kings."
    },
    {
      question: "What is Singapore's national flower?",
      options: ["Orchid Vanda Miss Joaquim", "Red Hibiscus", "Jasmine Grandiflorum", "Frangipani"],
      answer: "Orchid Vanda Miss Joaquim",
      explanation: "Selected in 1981, this hybrid orchid was chosen for its resilience and vibrant colors to represent the Singapore spirit."
    },
    {
      question: "Which UNESCO World Heritage site is located in Singapore?",
      options: ["Gardens by the Bay", "Singapore Botanic Gardens", "Haw Par Villa", "Chinatown Heritage Centre"],
      answer: "Singapore Botanic Gardens",
      explanation: "The Singapore Botanic Gardens was inscribed as a UNESCO World Heritage site in 2015, the first and only tropical botanic garden in Asia on the list."
    },
    {
      question: "Which famous dish is cooked in a thick savory sweet tomato-chilli sauce and often eaten with mantou buns?",
      options: ["Black Pepper Crab", "Chili Crab", "Hainanese Chicken Rice", "Laksa"],
      answer: "Chili Crab",
      explanation: "Chili Crab is one of Singapore's iconic seafood dishes, famous for its sweet, savory, and spicy egg-ribboned gravy."
    },
    {
      question: "What is the name of Singapore's main airport, frequently voted the world's best?",
      options: ["Changi Airport", "Paya Lebar Airport", "Seletar Airport", "Kallang Airport"],
      answer: "Changi Airport",
      explanation: "Opening in 1981, Changi Airport is renowned for its operations, efficiency, and attractions like Jewel's Rain Vortex."
    },
    {
      question: "Which island off Singapore's southern coast is a popular resort getaway containing Universal Studios?",
      options: ["Pulau Ubin", "Sentosa", "St John's Island", "Kusu Island"],
      answer: "Sentosa",
      explanation: "Sentosa, formerly a military fortress known as Pulau Blakang Mati, was rebranded in 1972 as a tropical leisure resort island."
    }
  ],
  space: [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "Mars",
      explanation: "Mars is reddish due to the high amount of iron oxide (rust) on its surface."
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Saturn", "Neptune", "Jupiter", "Earth"],
      answer: "Jupiter",
      explanation: "Jupiter is a gas giant with a mass more than two and a half times that of all the other planets in our solar system combined."
    },
    {
      question: "What type of galaxy is our Milky Way?",
      options: ["Elliptical", "Irregular", "Spiral", "Lenticular"],
      answer: "Spiral",
      explanation: "The Milky Way is a barred spiral galaxy, characterized by its rotating disk of stars, dust, and gas with spiral arms."
    },
    {
      question: "What is the boundary surrounding a black hole from which nothing, not even light, can escape?",
      options: ["Singularity", "Event Horizon", "Accretion Disk", "Schwarzschild Limit"],
      answer: "Event Horizon",
      explanation: "The event horizon is the 'point of no return' where the gravitational pull of the black hole becomes stronger than the speed of light."
    },
    {
      question: "Which planet has the most extensive ring system?",
      options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
      answer: "Saturn",
      explanation: "While other gas giants have faint rings, Saturn's ring system is the largest, brightest, and most complex, composed mostly of ice particles."
    },
    {
      question: "What is the hottest planet in our solar system?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      answer: "Venus",
      explanation: "Despite being farther from the Sun than Mercury, Venus is the hottest due to a runaway greenhouse effect from its thick CO2 atmosphere."
    },
    {
      question: "Approximately how long does light from the Sun take to reach Earth?",
      options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
      answer: "8 minutes",
      explanation: "Traveling at the speed of light (approx. 300,000 km/s), it takes solar light about 8 minutes and 20 seconds to traverse the distance to Earth."
    },
    {
      question: "What force keeps planets in orbit around the Sun?",
      options: ["Centrifugal force", "Electromagnetism", "Gravity", "Strong Nuclear Force"],
      answer: "Gravity",
      explanation: "The gravitational attraction between the massive Sun and the planets provides the centripetal force required to keep them in orbit."
    },
    {
      question: "What is the name of the first human-made satellite launched into space?",
      options: ["Vanguard 1", "Explorer 1", "Sputnik 1", "Apollo 11"],
      answer: "Sputnik 1",
      explanation: "Sputnik 1 was launched by the Soviet Union on October 4, 1957, beginning the Space Age."
    },
    {
      question: "Which stellar phenomenon represents the explosive death of a massive star?",
      options: ["Supernova", "Protostar", "White Dwarf", "Nebula"],
      answer: "Supernova",
      explanation: "A supernova is a massive explosion occurring at the end of a star's life cycle, releasing immense amounts of energy and light."
    }
  ],
  webdev: [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Link", "Hyper Transfer Markup Language"],
      answer: "HyperText Markup Language",
      explanation: "HTML is the standard markup language used to structure web pages and content."
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: "color",
      explanation: "In CSS, the 'color' property specifically defines the foreground color (text color) of an element."
    },
    {
      question: "Which HTML element is used to link a JavaScript file?",
      options: ["<js>", "<script>", "<link>", "<javascript>"],
      answer: "<script>",
      explanation: "The `<script>` tag is used to embed or reference executable client-side JavaScript scripts."
    },
    {
      question: "What does the 'DOM' stand for in web development?",
      options: ["Data Object Model", "Document Object Model", "Dynamic Output Mechanism", "Digital Ordinance Method"],
      answer: "Document Object Model",
      explanation: "The DOM is a programming interface for web documents. It represents the page structure so programs can change the document structure, style, and content."
    },
    {
      question: "Which CSS layout method is designed for one-dimensional layouts?",
      options: ["CSS Grid", "Flexbox", "Tables", "Absolute Positioning"],
      answer: "Flexbox",
      explanation: "Flexbox (Flexible Box Layout) is designed for laying out items in a single dimension (either a row or a column)."
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Complex State Styling"],
      answer: "Cascading Style Sheets",
      explanation: "CSS stands for Cascading Style Sheets, which describes how HTML elements are to be displayed on screen, paper, or in other media."
    },
    {
      question: "Which JavaScript keyword is used to declare a block-scoped local variable?",
      options: ["var", "let", "const", "Both let and const"],
      answer: "Both let and const",
      explanation: "Both `let` and `const` declare variables that are limited to the scope of the block, statement, or expression on which they are used, unlike `var` which is function-scoped."
    },
    {
      question: "Which HTTP status code represents a resource 'Not Found'?",
      options: ["200", "301", "400", "404"],
      answer: "404",
      explanation: "HTTP 404 is a standard client error response code indicating that the server cannot find the requested resource."
    },
    {
      question: "What is the purpose of the 'alt' attribute on an img tag?",
      options: [
        "To define the size of the image",
        "To provide alternative text for screen readers and search engines",
        "To specify the image's source URL",
        "To link the image to another web page"
      ],
      answer: "To provide alternative text for screen readers and search engines",
      explanation: "The `alt` attribute provides a fallback text description of an image for accessibility (screen readers) and if the image fails to load."
    },
    {
      question: "Which native CSS pseudo-class matches an input element only after the user has interacted with it?",
      options: [":invalid", ":user-invalid", ":dirty", ":touched"],
      answer: ":user-invalid",
      explanation: "`:user-invalid` is a modern selector that represents an element with invalid input, but only after the user has significantly interacted with it (e.g. typing and blurring), preventing premature validation errors on page load."
    }
  ]
};

// Application State
let state = {
  currentScreen: 'setup', // setup, battle, results
  deck: [],
  currentCardIndex: 0,
  playerHP: 100,
  monsterHP: 100,
  correctCount: 0,
  totalDamage: 0,
  activeTopic: '',
  timerInterval: null,
  timerSecondsRemaining: 20,
  timerEnabled: true,
  answersRecord: [], // logs each answer for review screen [{question, chosen, correct, answer, explanation}]
  questionStartTime: 0,
  apiKey: '',
  highScores: {},
  lottieInstance: null
};

// UI Selectors
const screens = {
  setup: document.getElementById('setup-screen'),
  battle: document.getElementById('battle-screen'),
  results: document.getElementById('results-screen')
};

const dom = {
  topicInput: document.getElementById('topic-input'),
  loadingOverlay: document.getElementById('loading-overlay'),
  lottieContainer: document.getElementById('lottie-loading-container'),
  startBtn: document.getElementById('start-game-btn'),
  settingsBtn: document.getElementById('settings-btn'),
  abortBtn: document.getElementById('abort-btn'),
  restartBtn: document.getElementById('restart-btn'),
  settingsModal: document.getElementById('settings-modal'),
  closeModalBtn: document.getElementById('modal-close-btn'),
  saveSettingsBtn: document.getElementById('save-settings-btn'),
  geminiKeyInput: document.getElementById('gemini-key'),
  setupGeminiKey: document.getElementById('setup-gemini-key'),
  timerToggle: document.getElementById('timer-toggle'),
  
  // Battle Screen UI
  playerHpBar: document.getElementById('player-hp-bar'),
  playerHpText: document.getElementById('player-hp-text'),
  monsterHpBar: document.getElementById('monster-hp-bar'),
  monsterHpText: document.getElementById('monster-hp-text'),
  monsterName: document.getElementById('monster-name'),
  activeTopicDisplay: document.getElementById('active-topic-display'),
  questionIndexText: document.getElementById('question-index'),
  timerText: document.getElementById('timer-text'),
  timerContainer: document.getElementById('timer-container'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  terminalFeed: document.getElementById('terminal-feed'),
  combatIndicators: document.getElementById('combat-indicators'),
  
  // Game Over screen UI
  outcomeBanner: document.getElementById('outcome-banner'),
  outcomeDesc: document.getElementById('outcome-desc'),
  statsAccuracy: document.getElementById('stats-accuracy'),
  statsDamage: document.getElementById('stats-damage'),
  statsHighScore: document.getElementById('stats-highscore'),
  reviewList: document.getElementById('review-list'),
  
  // Graphics nodes
  battleGraphics: document.getElementById('battle-graphics-container'),
  laserEffect: document.getElementById('laser-effect'),
  fireballEffect: document.getElementById('fireball-effect'),
  turret: document.getElementById('turret-graphic'),
  monster: document.getElementById('monster-graphic')
};

// Initial Setup
function initializeApp() {
  // Load saved configurations
  state.apiKey = localStorage.getItem('sg_defender_gemini_api_key') || '';
  if (dom.geminiKeyInput) dom.geminiKeyInput.value = state.apiKey;
  if (dom.setupGeminiKey) {
    dom.setupGeminiKey.value = state.apiKey;
  }
  
  const savedTimer = localStorage.getItem('sg_defender_timer_enabled');
  state.timerEnabled = savedTimer !== 'false';
  dom.timerToggle.checked = state.timerEnabled;

  const savedHighScores = localStorage.getItem('sg_defender_high_scores');
  if (savedHighScores) {
    state.highScores = JSON.parse(savedHighScores);
  }

  // Set up Event Listeners
  dom.startBtn.addEventListener('click', onStartGame);
  dom.settingsBtn.addEventListener('click', () => toggleModal(true));
  dom.closeModalBtn.addEventListener('click', () => toggleModal(false));
  dom.saveSettingsBtn.addEventListener('click', saveSettings);
  dom.abortBtn.addEventListener('click', abortMission);
  dom.restartBtn.addEventListener('click', restartToSetup);

  // Modal overlay click close
  dom.settingsModal.addEventListener('click', (e) => {
    if (e.target === dom.settingsModal) {
      toggleModal(false);
    }
  });

  // Keyboard controls for choices (1-4)
  window.addEventListener('keydown', handleKeyboardChoice);
  
  // Clear any existing active class overrides
  resetEffects();
}

// Keyboard shortcuts for option choices
function handleKeyboardChoice(e) {
  if (state.currentScreen !== 'battle') return;
  
  // Ignore inputs if modal is active
  if (!dom.settingsModal.classList.contains('hidden')) return;

  const key = e.key;
  if (['1', '2', '3', '4'].includes(key)) {
    const index = parseInt(key) - 1;
    const buttons = dom.optionsContainer.querySelectorAll('.option-btn');
    if (buttons && buttons[index] && !buttons[index].disabled) {
      buttons[index].click();
    }
  }
}

// Modal handler
function toggleModal(show) {
  if (show) {
    if (dom.geminiKeyInput) dom.geminiKeyInput.value = state.apiKey;
    dom.settingsModal.classList.remove('hidden');
    if (dom.geminiKeyInput) dom.geminiKeyInput.focus();
  } else {
    dom.settingsModal.classList.add('hidden');
  }
}

function saveSettings() {
  if (dom.geminiKeyInput) state.apiKey = dom.geminiKeyInput.value.trim();
  if (dom.setupGeminiKey) {
    dom.setupGeminiKey.value = state.apiKey;
  }
  state.timerEnabled = dom.timerToggle.checked;
  
  localStorage.setItem('sg_defender_gemini_api_key', state.apiKey);
  localStorage.setItem('sg_defender_timer_enabled', state.timerEnabled);
  
  writeTerminalLog(`[SYSTEM] Configuration updated. Timer: ${state.timerEnabled ? 'ENABLED' : 'DISABLED'}.`, 'sys');
  toggleModal(false);
}

// Write to Retro Terminal Feed
function writeTerminalLog(text, type = 'sys') {
  const line = document.createElement('div');
  line.className = `terminal-line ${type}`;
  line.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
  dom.terminalFeed.appendChild(line);
  dom.terminalFeed.scrollTop = dom.terminalFeed.scrollHeight;
}

// Reset skyline animations/classes
function resetEffects() {
  dom.laserEffect.classList.remove('animate-laser');
  dom.fireballEffect.classList.remove('animate-monster-attack');
  dom.monster.classList.remove('animate-roar', 'animate-dissolve', 'hit-flash');
  dom.turret.classList.remove('hit-flash');
  dom.battleGraphics.classList.remove('shake-screen');
}

// Validate Gemini API Key
async function validateGeminiKey(apiKey) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, {
    method: "GET"
  });
  
  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    const errMsg = errBody.error?.message || `HTTP error ${response.status}`;
    throw new Error(errMsg);
  }
  return true;
}

function resetStartButton() {
  dom.startBtn.disabled = false;
  dom.startBtn.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
    Deploy Defenses
  `;
}

// Start Game Core Logic
async function onStartGame() {
  // Enforce and read API key from setup screen
  const keyInput = dom.setupGeminiKey ? dom.setupGeminiKey.value.trim() : '';
  if (!keyInput) {
    alert("Error: A Gemini API Key is required to deploy defenses! Please enter your key on the setup screen.");
    if (dom.setupGeminiKey) dom.setupGeminiKey.focus();
    return;
  }
  
  state.apiKey = keyInput;
  localStorage.setItem('sg_defender_gemini_api_key', state.apiKey);
  if (dom.geminiKeyInput) dom.geminiKeyInput.value = state.apiKey;

  // Set button loading state
  dom.startBtn.disabled = true;
  dom.startBtn.innerHTML = `
    <svg class="spinner" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="animation: spin 1s linear infinite; margin-right: 0.5rem;">
      <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
      <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
    </svg>
    Verifying Key...
  `;

  // Validate API Key
  try {
    await validateGeminiKey(state.apiKey);
  } catch (err) {
    alert(`Error: API Key verification failed!\nDetails: ${err.message}`);
    resetStartButton();
    return;
  }

  const customTopic = dom.topicInput.value.trim();
  if (!customTopic) {
    alert("Error: Please enter a battle topic / subject to deploy defenses!");
    if (dom.topicInput) dom.topicInput.focus();
    resetStartButton();
    return;
  }

  state.deck = [];
  state.answersRecord = [];
  state.currentCardIndex = 0;
  state.playerHP = 100;
  state.monsterHP = 100;
  state.correctCount = 0;
  state.totalDamage = 0;
  
  resetEffects();
  updateHealthBars();

  state.activeTopic = customTopic;
  dom.activeTopicDisplay.textContent = customTopic;
  
  // Show Lottie loading overlay
  if (dom.loadingOverlay) {
    dom.loadingOverlay.classList.remove('hidden');
    if (dom.lottieContainer && typeof lottie !== 'undefined') {
      dom.lottieContainer.innerHTML = '';
      state.lottieInstance = lottie.loadAnimation({
        container: dom.lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'gemini_loading.json'
      });
    }
  }
  
  writeTerminalLog(`[SYSTEM] Initializing intelligence query for topic: "${customTopic}"...`, 'sys');
  
  try {
    const generatedDeck = await fetchCustomDeckFromGemini(customTopic);
    if (generatedDeck && generatedDeck.length > 0) {
      state.deck = generatedDeck;
    } else {
      throw new Error("Invalid deck parsed from server response.");
    }
  } catch (err) {
    console.error(err);
    writeTerminalLog(`[ERROR] Secure connection failed: ${err.message}. Reverting to SG Trivia preset.`, 'dmg');
    alert(`Failed to generate flashcards from Gemini: ${err.message}. Loading default Singapore Trivia deck instead.`);
    state.deck = PRESETS.singapore.slice(0, 5);
    state.activeTopic = "Singapore Trivia (Fallback)";
    dom.activeTopicDisplay.textContent = state.activeTopic;
  } finally {
    // Hide and cleanup Lottie
    if (dom.loadingOverlay) dom.loadingOverlay.classList.add('hidden');
    if (state.lottieInstance) {
      state.lottieInstance.destroy();
      state.lottieInstance = null;
    }
    resetStartButton();
  }

  // Shuffle option choices dynamically on each game play to prevent rote learning of ABCD keys
  state.deck.forEach(card => {
    card.options = shuffleArray([...card.options]);
  });

  // Switch Screens
  screens.setup.classList.add('hidden');
  screens.battle.classList.remove('hidden');
  state.currentScreen = 'battle';

  // Randomize monster naming for immersion
  const monstersList = ["MEGATRONUS V1", "KAIJU SENTOSA", "NEON PIRANHA", "CRABZILLA SG", "OBSIDIAN KRAKEN"];
  const randomName = monstersList[Math.floor(Math.random() * monstersList.length)];
  dom.monsterName.textContent = randomName;
  
  writeTerminalLog(`[ALERT] High energy signature detected approaching Singapore Strait! Entity designated: ${randomName}.`, 'monster');
  writeTerminalLog(`[SYSTEM] Shield status optimal. Battery reserves at 100%. Weapons hot.`, 'sys');
  
  loadCard(0);
}

// Shuffle Utility
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fetch generated cards from Gemini gemini-3.5-flash using structured JSON output
async function fetchCustomDeckFromGemini(topic) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${state.apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Generate exactly 5 high-quality, diverse flashcard questions for a multiple-choice quiz game on the requested topic: "${topic}". Ensure options are distinct, one is exactly correct, and explanations are concise (1-2 sentences).`
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            flashcards: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  question: { "type": "STRING" },
                  options: {
                    "type": "ARRAY",
                    "items": { "type": "STRING" }
                  },
                  answer: { "type": "STRING" },
                  explanation: { "type": "STRING" }
                },
                required: ["question", "options", "answer", "explanation"]
              }
            }
          },
          required: ["flashcards"]
        },
        temperature: 0.7
      }
    })
  });

  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}));
    const errMsg = errBody.error?.message || `HTTP error ${response.status}`;
    throw new Error(errMsg);
  }

  const json = await response.json();
  const text = json.candidates[0].content.parts[0].text;
  const data = JSON.parse(text);
  return data.flashcards;
}

// Load a specific question
function loadCard(index) {
  if (index >= state.deck.length) {
    endGame(true); // Victory if we finish all cards and survive
    return;
  }
  
  state.currentCardIndex = index;
  const card = state.deck[index];
  
  dom.questionIndexText.textContent = `QUESTION ${index + 1} OF ${state.deck.length}`;
  dom.questionText.textContent = card.question;
  
  // Render Option buttons
  dom.optionsContainer.innerHTML = '';
  card.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-key">${idx + 1}</span>
      <span class="option-text">${escapeHtml(opt)}</span>
    `;
    
    // Set custom property for CSS stagger delays
    btn.style.setProperty('--sibling-index', idx + 1);
    
    btn.addEventListener('click', () => handleChoiceSelection(opt, btn));
    dom.optionsContainer.appendChild(btn);
  });

  // Enable/disable timer
  if (state.timerEnabled) {
    dom.timerContainer.classList.remove('hidden');
    startTimer();
  } else {
    dom.timerContainer.classList.add('hidden');
  }

  state.questionStartTime = Date.now();
  
  // Minor monster movement to indicate it's active
  dom.monster.classList.remove('animate-roar');
  void dom.monster.offsetWidth; // trigger reflow
  dom.monster.classList.add('animate-roar');
}

// Escape html helper
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Timer Logic
function startTimer() {
  clearInterval(state.timerInterval);
  state.timerSecondsRemaining = 20;
  dom.timerText.textContent = `${state.timerSecondsRemaining}s`;
  dom.timerText.classList.remove('timer-warning');

  state.timerInterval = setInterval(() => {
    state.timerSecondsRemaining--;
    dom.timerText.textContent = `${state.timerSecondsRemaining}s`;

    if (state.timerSecondsRemaining <= 5) {
      dom.timerText.classList.add('timer-warning');
    }

    if (state.timerSecondsRemaining <= 0) {
      clearInterval(state.timerInterval);
      handleTimeout();
    }
  }, 1000);
}

// Time limit exceeded
function handleTimeout() {
  // Turn off interactive option buttons
  disableChoiceButtons();
  
  const card = state.deck[state.currentCardIndex];
  
  // Record response
  state.answersRecord.push({
    question: card.question,
    chosen: "[TIMEOUT]",
    correct: false,
    answer: card.answer,
    explanation: card.explanation
  });

  writeTerminalLog(`[ALERT] Target solution window collapsed! Defenses breached.`, 'dmg');
  
  // Monster deals critical damage (20 HP)
  applyDamageToPlayer(20);
}

// Process selection
function handleChoiceSelection(selectedOption, clickedButton) {
  clearInterval(state.timerInterval);
  disableChoiceButtons();

  const card = state.deck[state.currentCardIndex];
  const isCorrect = (selectedOption === card.answer);
  const timeTaken = (Date.now() - state.questionStartTime) / 1000;
  
  // Record choice
  state.answersRecord.push({
    question: card.question,
    chosen: selectedOption,
    correct: isCorrect,
    answer: card.answer,
    explanation: card.explanation
  });

  // Visually color code choices
  const buttons = dom.optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    const textSpan = btn.querySelector('.option-text');
    if (textSpan.textContent === card.answer) {
      btn.classList.add('correct');
    } else if (btn === clickedButton && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  if (isCorrect) {
    state.correctCount++;
    // Combat math
    let dmg = 15;
    let critText = '';
    // Critical hit if answered in under 5 seconds
    if (timeTaken <= 5) {
      dmg = 25;
      critText = 'CRITICAL HIT! ';
    }
    
    state.totalDamage += dmg;
    
    writeTerminalLog(`[SYSTEM] Solution verified. ${critText}Laser battery fired! Monster took ${dmg} damage.`, 'sys');
    
    // Combat effects
    triggerPlayerLaser(dmg);
  } else {
    writeTerminalLog(`[ALERT] Solution rejected. Intruder counter-attack detected!`, 'dmg');
    
    // Monster deals 15 damage
    applyDamageToPlayer(15);
  }
}

// Disable all option buttons
function disableChoiceButtons() {
  const buttons = dom.optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
}

// Combat Effects: Player Fire
function triggerPlayerLaser(damage) {
  resetEffects();
  
  // Position laser start and end
  // Laser starts at turret (around bottom left: 80, 260) and hits monster (around right center: 680, 230)
  dom.laserEffect.classList.add('animate-laser');
  
  // Show hit flash on monster after brief delay (impact)
  setTimeout(() => {
    dom.monster.classList.add('hit-flash');
    dom.battleGraphics.classList.add('shake-screen');
    spawnFloatingCombatText(damage, false); // display at monster
    
    // Reduce Monster HP
    state.monsterHP = Math.max(0, state.monsterHP - damage);
    updateHealthBars();
    
    // Check if monster dies
    setTimeout(() => {
      if (state.monsterHP <= 0) {
        triggerMonsterDeath();
      } else {
        // Next card
        loadCard(state.currentCardIndex + 1);
      }
    }, 600);
  }, 350);
}

// Combat Effects: Monster Fire
function applyDamageToPlayer(damage) {
  resetEffects();

  // Monster roars and charges fireball
  dom.monster.classList.add('animate-roar');
  
  setTimeout(() => {
    dom.fireballEffect.classList.add('animate-monster-attack');
    
    // Impact on player turret
    setTimeout(() => {
      dom.turret.classList.add('hit-flash');
      dom.battleGraphics.classList.add('shake-screen');
      spawnFloatingCombatText(damage, true); // display at turret
      
      // Reduce Player HP
      state.playerHP = Math.max(0, state.playerHP - damage);
      updateHealthBars();
      
      // Check if player dies
      setTimeout(() => {
        if (state.playerHP <= 0) {
          endGame(false); // Defeat
        } else {
          // Next card
          loadCard(state.currentCardIndex + 1);
        }
      }, 600);
    }, 500);
  }, 200);
}

// Spawn floating hit numbers
function spawnFloatingCombatText(value, isPlayerHit) {
  const numSpan = document.createElement('span');
  numSpan.className = `floating-damage ${isPlayerHit ? 'player-hit' : 'monster-hit'}`;
  numSpan.textContent = `-${value} HP`;
  
  // Position randomly near the target
  if (isPlayerHit) {
    numSpan.style.left = `${30 + Math.random() * 40}px`;
    numSpan.style.bottom = `${80 + Math.random() * 40}px`;
  } else {
    numSpan.style.right = `${60 + Math.random() * 40}px`;
    numSpan.style.bottom = `${100 + Math.random() * 40}px`;
  }
  
  dom.combatIndicators.appendChild(numSpan);
  
  // Auto remove
  setTimeout(() => {
    numSpan.remove();
  }, 1000);
}

// Monster Defeated Animation
function triggerMonsterDeath() {
  resetEffects();
  dom.monster.classList.add('animate-dissolve');
  writeTerminalLog(`[VICTORY] High energy target neutralized! Dissolution sequence complete.`, 'victory');
  
  setTimeout(() => {
    endGame(true);
  }, 1600);
}

// Update HUD health values and layout styles
function updateHealthBars() {
  dom.playerHpText.textContent = `${state.playerHP}/100`;
  dom.playerHpBar.style.width = `${state.playerHP}%`;
  
  dom.monsterHpText.textContent = `${state.monsterHP}/100`;
  dom.monsterHpBar.style.width = `${state.monsterHP}%`;

  // Warning flashing outline below 35% HP
  if (state.playerHP <= 35) {
    dom.playerHpBar.classList.add('shield-warning');
  } else {
    dom.playerHpBar.classList.remove('shield-warning');
  }
  
  if (state.monsterHP <= 35) {
    dom.monsterHpBar.classList.add('shield-warning');
  } else {
    dom.monsterHpBar.classList.remove('shield-warning');
  }
}

// Stop current game execution
function abortMission() {
  if (confirm("Are you sure you want to abort the current mission and retreat?")) {
    clearInterval(state.timerInterval);
    restartToSetup();
  }
}

// Game Over Transition
function endGame(isVictory) {
  clearInterval(state.timerInterval);
  
  state.currentScreen = 'results';
  screens.battle.classList.add('hidden');
  screens.results.classList.remove('hidden');

  // Compute game score
  // Formula: (Accuracy % * 10) + (Surviving HP * 5) + (Time Saved bonus if timer was enabled)
  const accuracy = Math.round((state.correctCount / state.deck.length) * 100) || 0;
  const hpBonus = state.playerHP * 5;
  const timerMultiplier = state.timerEnabled ? 2 : 1;
  const finalScore = (state.correctCount * 100 * timerMultiplier) + hpBonus;

  // Sync high score
  const topicKey = state.activeTopic.toLowerCase();
  const currentHighScore = state.highScores[topicKey] || 0;
  if (finalScore > currentHighScore) {
    state.highScores[topicKey] = finalScore;
    localStorage.setItem('sg_defender_high_scores', JSON.stringify(state.highScores));
  }

  // Populate HUD Stats
  dom.statsAccuracy.textContent = `${accuracy}%`;
  dom.statsDamage.textContent = state.totalDamage;
  dom.statsHighScore.textContent = state.highScores[topicKey] || finalScore;

  if (isVictory) {
    dom.outcomeBanner.textContent = "MISSION ACCOMPLISHED";
    dom.outcomeBanner.className = "outcome-title victory";
    dom.outcomeDesc.innerHTML = `
      The threat was repelled! Singapore has been successfully defended on the topic of 
      <strong style="color: var(--color-cyan);">${escapeHtml(state.activeTopic)}</strong>.<br>
      Total score compiled: <strong style="color: var(--color-yellow); font-size: 1.2rem;">${finalScore} pts</strong> (includes shield integrity bonus of ${hpBonus} pts).
    `;
  } else {
    dom.outcomeBanner.textContent = "SHIELD COLLAPSED";
    dom.outcomeBanner.className = "outcome-title defeat";
    dom.outcomeDesc.innerHTML = `
      The defense grid failed. Singapore was breached during the battle on 
      <strong style="color: var(--color-magenta);">${escapeHtml(state.activeTopic)}</strong>.<br>
      Total score compiled: <strong style="color: var(--color-yellow); font-size: 1.2rem;">${finalScore} pts</strong>. Deploy again to rebuild the shield lines!
    `;
  }

  // Populate Review List (Study Guide)
  dom.reviewList.innerHTML = '';
  state.answersRecord.forEach((rec, idx) => {
    const item = document.createElement('div');
    item.className = `review-item ${rec.correct ? 'correct' : 'incorrect'}`;
    
    const icon = rec.correct ? '✔' : '✖';
    const statusText = rec.correct ? 'Correct' : `Incorrect (Chose: ${escapeHtml(rec.chosen)})`;
    
    item.innerHTML = `
      <div class="review-q">${idx + 1}. ${escapeHtml(rec.question)}</div>
      <div class="review-a" style="color: ${rec.correct ? 'var(--color-green)' : 'var(--color-red)'}; font-weight: 600;">
        ${icon} ${statusText}
      </div>
      <div style="font-size: 0.85rem; margin-top: 0.2rem; color: #fff;">
        Correct Answer: <span style="color: var(--color-cyan); font-weight: 600;">${escapeHtml(rec.answer)}</span>
      </div>
      <div class="review-expl">${escapeHtml(rec.explanation)}</div>
    `;
    dom.reviewList.appendChild(item);
  });
}

function restartToSetup() {
  screens.results.classList.add('hidden');
  screens.battle.classList.add('hidden');
  screens.setup.classList.remove('hidden');
  state.currentScreen = 'setup';
  dom.topicInput.focus();
}

// Run Initialize on Dom Load
document.addEventListener('DOMContentLoaded', initializeApp);
