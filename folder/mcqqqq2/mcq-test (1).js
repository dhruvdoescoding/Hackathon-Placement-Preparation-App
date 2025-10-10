// MCQ TEST PAGE JAVASCRIPT - FIXED QUESTION VISIBILITY
console.log('📝 MCQ Test Page JavaScript Loading...');

// Test Questions Database - Coding & Aptitude
const testQuestions = [
  // CODING QUESTIONS
  {
    id: 1,
    type: 'coding',
    difficulty: 'Medium',
    question: 'What is the time complexity of searching an element in a balanced Binary Search Tree?',
    code: null,
    options: [
      'O(n)',
      'O(log n)',
      'O(n log n)',
      'O(1)'
    ],
    correctAnswer: 1,
    explanation: 'In a balanced BST, the height is log n, so searching takes O(log n) time.',
    topic: 'Data Structures',
    subtopic: 'Binary Search Trees'
  },
  {
    id: 2,
    type: 'coding',
    difficulty: 'Hard',
    question: 'Which algorithm is most suitable for finding the shortest path in a weighted graph with negative edges?',
    code: null,
    options: [
      'Dijkstra\'s Algorithm',
      'Floyd-Warshall Algorithm',
      'Bellman-Ford Algorithm',
      'Breadth-First Search'
    ],
    correctAnswer: 2,
    explanation: 'Bellman-Ford can handle negative edge weights, unlike Dijkstra\'s algorithm.',
    topic: 'Algorithms',
    subtopic: 'Graph Algorithms'
  },
  {
    id: 3,
    type: 'coding',
    difficulty: 'Easy',
    question: 'What will be the output of the following Python code?',
    code: 'def func(x=[]):\n    x.append(1)\n    return x\n\nprint(func())\nprint(func())',
    options: [
      '[1]\n[1]',
      '[1]\n[1, 1]',
      'Error',
      'None\nNone'
    ],
    correctAnswer: 1,
    explanation: 'Default mutable arguments are shared across function calls, causing [1] then [1, 1].',
    topic: 'Programming Languages',
    subtopic: 'Python Basics'
  },
  {
    id: 4,
    type: 'coding',
    difficulty: 'Medium',
    question: 'In dynamic programming, what is memoization?',
    code: null,
    options: [
      'A technique to reduce space complexity',
      'A method to store and reuse previously computed results',
      'A way to optimize recursive calls',
      'A sorting algorithm'
    ],
    correctAnswer: 1,
    explanation: 'Memoization stores results of expensive function calls to avoid redundant calculations.',
    topic: 'Algorithms',
    subtopic: 'Dynamic Programming'
  },
  {
    id: 5,
    type: 'coding',
    difficulty: 'Hard',
    question: 'What is the space complexity of the merge sort algorithm?',
    code: null,
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n log n)'
    ],
    correctAnswer: 2,
    explanation: 'Merge sort requires O(n) additional space for merging arrays.',
    topic: 'Algorithms',
    subtopic: 'Sorting Algorithms'
  },
  {
    id: 6,
    type: 'coding',
    difficulty: 'Medium',
    question: 'Which data structure is best suited for implementing a LRU (Least Recently Used) cache?',
    code: null,
    options: [
      'Array',
      'Stack',
      'Hash Map + Doubly Linked List',
      'Binary Tree'
    ],
    correctAnswer: 2,
    explanation: 'HashMap for O(1) access and Doubly Linked List for O(1) insertion/deletion.',
    topic: 'Data Structures',
    subtopic: 'Cache Design'
  },
  {
    id: 7,
    type: 'coding',
    difficulty: 'Easy',
    question: 'What does SQL stand for?',
    code: null,
    options: [
      'Structured Query Language',
      'Standard Query Language',
      'Sequential Query Language',
      'System Query Language'
    ],
    correctAnswer: 0,
    explanation: 'SQL stands for Structured Query Language, used for managing relational databases.',
    topic: 'Databases',
    subtopic: 'SQL Basics'
  },
  {
    id: 8,
    type: 'coding',
    difficulty: 'Medium',
    question: 'In Object-Oriented Programming, what is polymorphism?',
    code: null,
    options: [
      'Creating multiple objects of the same class',
      'The ability of different classes to be treated as instances of the same type',
      'Hiding internal implementation details',
      'Creating a new class based on an existing class'
    ],
    correctAnswer: 1,
    explanation: 'Polymorphism allows objects of different types to be treated as objects of a common base type.',
    topic: 'Programming Concepts',
    subtopic: 'OOP Principles'
  },

  // APTITUDE QUESTIONS
  {
    id: 9,
    type: 'aptitude',
    difficulty: 'Easy',
    question: 'If a train travels 120 km in 2 hours, what is its speed in km/hr?',
    code: null,
    options: [
      '50 km/hr',
      '60 km/hr',
      '70 km/hr',
      '80 km/hr'
    ],
    correctAnswer: 1,
    explanation: 'Speed = Distance / Time = 120 km / 2 hours = 60 km/hr',
    topic: 'Quantitative Aptitude',
    subtopic: 'Speed, Time & Distance'
  },
  {
    id: 10,
    type: 'aptitude',
    difficulty: 'Medium',
    question: 'What comes next in the series: 2, 6, 12, 20, 30, ?',
    code: null,
    options: [
      '40',
      '42',
      '44',
      '46'
    ],
    correctAnswer: 1,
    explanation: 'The differences are 4, 6, 8, 10, so next difference is 12. 30 + 12 = 42.',
    topic: 'Logical Reasoning',
    subtopic: 'Number Series'
  },
  {
    id: 11,
    type: 'aptitude',
    difficulty: 'Hard',
    question: 'In a class of 40 students, 24 play cricket, 20 play football, and 8 play both. How many play neither?',
    code: null,
    options: [
      '4',
      '6',
      '8',
      '10'
    ],
    correctAnswer: 0,
    explanation: 'Using Venn diagram: Cricket only (16) + Football only (12) + Both (8) = 36. Neither = 40 - 36 = 4.',
    topic: 'Logical Reasoning',
    subtopic: 'Set Theory'
  },
  {
    id: 12,
    type: 'aptitude',
    difficulty: 'Medium',
    question: 'If 5 men can complete a work in 12 days, how many days will 3 men take to complete the same work?',
    code: null,
    options: [
      '15 days',
      '18 days',
      '20 days',
      '24 days'
    ],
    correctAnswer: 2,
    explanation: 'Work = Men × Days. 5 × 12 = 60 man-days. For 3 men: 60 ÷ 3 = 20 days.',
    topic: 'Quantitative Aptitude',
    subtopic: 'Work & Time'
  },
  {
    id: 13,
    type: 'aptitude',
    difficulty: 'Easy',
    question: 'What is 25% of 80?',
    code: null,
    options: [
      '15',
      '20',
      '25',
      '30'
    ],
    correctAnswer: 1,
    explanation: '25% of 80 = (25/100) × 80 = 0.25 × 80 = 20',
    topic: 'Quantitative Aptitude',
    subtopic: 'Percentage'
  },
  {
    id: 14,
    type: 'aptitude',
    difficulty: 'Medium',
    question: 'If CODING is written as DPEJOH, how is SYSTEM written?',
    code: null,
    options: [
      'TZTUFN',
      'TZTUEM',
      'TZTUGN',
      'TZTVGN'
    ],
    correctAnswer: 0,
    explanation: 'Each letter is shifted by +1 in the alphabet. S→T, Y→Z, S→T, T→U, E→F, M→N = TZTUFN',
    topic: 'Logical Reasoning',
    subtopic: 'Coding-Decoding'
  },
  {
    id: 15,
    type: 'aptitude',
    difficulty: 'Hard',
    question: 'A shopkeeper marks his goods 40% above cost price and gives a discount of 25%. What is his profit percentage?',
    code: null,
    options: [
      '5%',
      '10%',
      '15%',
      '20%'
    ],
    correctAnswer: 0,
    explanation: 'Let CP = 100. MP = 140. SP = 140 - (25% of 140) = 140 - 35 = 105. Profit% = 5%',
    topic: 'Quantitative Aptitude',
    subtopic: 'Profit & Loss'
  }
];

// Global variables
let currentScreen = 'pre-test';
let currentQuestionIndex = 0;
let userAnswers = [];
let testStartTime = null;
let testEndTime = null;
let timer = null;
let timeRemaining = 25 * 60; // 25 minutes in seconds

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 MCQ test page initialized!');
  console.log('📝 Total questions loaded:', testQuestions.length);

  initializeMCQTest();

  function initializeMCQTest() {
    setupLogoRedirect();
    setupOptionsMenu();
    setupTimeDisplay();
    setupPreTestScreen();
    setupTestScreen();
    setupResultsScreen();

    // Show pre-test screen initially
    showScreen('pre-test');

    console.log('✅ All MCQ test components loaded!');
  }

  // Logo click to redirect to dashboard
  function setupLogoRedirect() {
    const logoClickable = document.getElementById('logoHome');
    if (logoClickable) {
      logoClickable.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🏠 Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
      });
      logoClickable.style.cursor = 'pointer';
    }
  }

  // Options menu functionality - FIXED
  function setupOptionsMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const menuDropdown = document.getElementById('menuDropdown');

    if (!menuBtn || !menuDropdown) {
      console.log('⚠️ Menu elements not found');
      return;
    }

    let isMenuOpen = false;

    menuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      isMenuOpen = !isMenuOpen;

      if (isMenuOpen) {
        menuDropdown.classList.add('show');
        menuBtn.classList.add('active');
        console.log('📂 Options menu opened');
      } else {
        menuDropdown.classList.remove('show');
        menuBtn.classList.remove('active');
        console.log('📁 Options menu closed');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
        if (isMenuOpen) {
          menuDropdown.classList.remove('show');
          menuBtn.classList.remove('active');
          isMenuOpen = false;
          console.log('📁 Menu closed (outside click)');
        }
      }
    });

    // Handle dropdown item clicks
    const dropdownItems = menuDropdown.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Close the dropdown first
        menuDropdown.classList.remove('show');
        menuBtn.classList.remove('active');
        isMenuOpen = false;

        // Navigate to the page
        if (href && href !== '#') {
          console.log('🔗 Navigating to:', href);
          window.location.href = href;
        }
      });
    });

    console.log('📋 Options menu setup complete');
  }

  // Real-time clock display
  function setupTimeDisplay() {
    function updateTime() {
      const now = new Date();
      const timeElement = document.getElementById('currentTime');
      const footerTimeElement = document.getElementById('currentTimeFooter');

      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });

      if (timeElement) {
        timeElement.textContent = timeString;
      }

      if (footerTimeElement) {
        footerTimeElement.textContent = timeString + ' IST';
      }
    }

    updateTime();
    setInterval(updateTime, 60000); // Update every minute

    console.log('⏰ Real-time clock started');
  }

  // Pre-test screen setup
  function setupPreTestScreen() {
    const startTestBtn = document.getElementById('startTestBtn');

    if (startTestBtn) {
      startTestBtn.addEventListener('click', function() {
        console.log('🚀 Starting MCQ test...');

        // Initialize test data
        userAnswers = new Array(testQuestions.length).fill(null);
        currentQuestionIndex = 0;
        testStartTime = new Date();
        timeRemaining = 25 * 60; // Reset timer

        // Show test screen and load first question
        showScreen('test');

        // Small delay to ensure screen transition
        setTimeout(() => {
          loadQuestion(currentQuestionIndex);
          startTimer();
        }, 100);

        console.log('📝 Test started with', testQuestions.length, 'questions');
      });
    }
  }

  // Test screen setup
  function setupTestScreen() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const overviewBtn = document.getElementById('overviewBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeOverviewBtn = document.getElementById('closeOverviewBtn');
    const modalOverlay = document.getElementById('modalOverlay');

    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          loadQuestion(currentQuestionIndex);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < testQuestions.length - 1) {
          currentQuestionIndex++;
          loadQuestion(currentQuestionIndex);
        }
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const confirmed = confirm(
          '📝 Submit Test?\n\nAre you sure you want to submit your test? You won\'t be able to make changes after submission.\n\nClick OK to submit or Cancel to continue.'
        );

        if (confirmed) {
          submitTest();
        }
      });
    }

    // Overview modal
    if (overviewBtn) {
      overviewBtn.addEventListener('click', () => {
        showQuestionOverview();
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        hideQuestionOverview();
      });
    }

    if (closeOverviewBtn) {
      closeOverviewBtn.addEventListener('click', () => {
        hideQuestionOverview();
      });
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          hideQuestionOverview();
        }
      });
    }
  }

  // Results screen setup
  function setupResultsScreen() {
    const retakeTestBtn = document.getElementById('retakeTestBtn');
    const viewDashboardBtn = document.getElementById('viewDashboardBtn');
    const saveResultsBtn = document.getElementById('saveResultsBtn');

    if (retakeTestBtn) {
      retakeTestBtn.addEventListener('click', () => {
        const confirmed = confirm('🔄 Retake Test?\n\nThis will reset your current results and start a new test. Are you sure?');
        if (confirmed) {
          resetTest();
          showScreen('pre-test');
        }
      });
    }

    if (viewDashboardBtn) {
      viewDashboardBtn.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
      });
    }

    if (saveResultsBtn) {
      saveResultsBtn.addEventListener('click', () => {
        saveTestResults();
      });
    }
  }

  // FIXED Screen management
  function showScreen(screenType) {
    console.log('📱 Switching to screen:', screenType);

    // Hide all screens first
    const preTestScreen = document.getElementById('preTestScreen');
    const testScreen = document.getElementById('testScreen');
    const resultsScreen = document.getElementById('resultsScreen');

    if (preTestScreen) preTestScreen.classList.remove('active');
    if (testScreen) testScreen.classList.remove('active');
    if (resultsScreen) resultsScreen.classList.remove('active');

    // Show target screen
    let targetScreen = null;
    switch (screenType) {
      case 'pre-test':
        targetScreen = preTestScreen;
        break;
      case 'test':
        targetScreen = testScreen;
        break;
      case 'results':
        targetScreen = resultsScreen;
        break;
    }

    if (targetScreen) {
      targetScreen.classList.add('active');
      currentScreen = screenType;
      console.log('✅ Screen switched to:', screenType);
    } else {
      console.error('❌ Screen not found:', screenType);
    }
  }

  // FIXED Load question function
  function loadQuestion(index) {
    const question = testQuestions[index];
    if (!question) {
      console.error('❌ Question not found at index:', index);
      return;
    }

    console.log('📝 Loading question', index + 1, ':', question.question.substring(0, 50) + '...');

    // Update progress
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const totalQuestions = document.getElementById('totalQuestions');
    const progressFill = document.getElementById('progressFill');

    if (currentQuestionNum) currentQuestionNum.textContent = index + 1;
    if (totalQuestions) totalQuestions.textContent = testQuestions.length;

    if (progressFill) {
      const progressPercentage = ((index + 1) / testQuestions.length) * 100;
      progressFill.style.width = progressPercentage + '%';
    }

    // Update question content
    const questionType = document.getElementById('questionType');
    const questionDifficulty = document.getElementById('questionDifficulty');
    const questionText = document.getElementById('questionText');

    if (questionType) {
      questionType.textContent = question.type;
      questionType.className = 'question-type ' + question.type;
    }

    if (questionDifficulty) {
      questionDifficulty.textContent = question.difficulty;
    }

    if (questionText) {
      questionText.textContent = question.question;
    }

    // Show/hide code section
    const codeSection = document.getElementById('questionCode');
    if (codeSection) {
      if (question.code) {
        codeSection.style.display = 'block';
        codeSection.innerHTML = '<pre><code>' + question.code + '</code></pre>';
      } else {
        codeSection.style.display = 'none';
      }
    }

    // Generate options
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';

      question.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option-item';
        optionElement.innerHTML = 
          '<div class="option-radio"></div>' +
          '<div class="option-label">' + String.fromCharCode(65 + optionIndex) + '</div>' +
          '<div class="option-text">' + option + '</div>';

        // Check if this option is selected
        if (userAnswers[index] === optionIndex) {
          optionElement.classList.add('selected');
        }

        // Add click handler
        optionElement.addEventListener('click', () => {
          selectOption(index, optionIndex);
        });

        optionsContainer.appendChild(optionElement);
      });
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) {
      prevBtn.disabled = index === 0;
    }

    if (nextBtn && submitBtn) {
      if (index === testQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
      } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
      }
    }

    console.log('✅ Question loaded successfully:', question.type, '-', question.difficulty);
  }

  // Select option
  function selectOption(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;

    // Update visual selection
    const options = document.querySelectorAll('.option-item');
    options.forEach((option, index) => {
      if (index === optionIndex) {
        option.classList.add('selected');
      } else {
        option.classList.remove('selected');
      }
    });

    console.log('✅ Selected option', optionIndex, 'for question', questionIndex + 1);
  }

  // Start timer
  function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (!timerDisplay) return;

    timer = setInterval(() => {
      timeRemaining--;

      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

      // Change color when time is running out
      if (timeRemaining <= 300) { // 5 minutes
        timerDisplay.style.color = 'var(--color-error)';
      } else if (timeRemaining <= 600) { // 10 minutes
        timerDisplay.style.color = 'var(--color-warning)';
      }

      // Auto-submit when time runs out
      if (timeRemaining <= 0) {
        clearInterval(timer);
        alert('⏰ Time\'s up! Your test will be submitted automatically.');
        submitTest();
      }
    }, 1000);

    console.log('⏰ Timer started - 25 minutes');
  }

  // Show question overview
  function showQuestionOverview() {
    const overviewGrid = document.getElementById('overviewGrid');
    const modalOverlay = document.getElementById('modalOverlay');

    if (!overviewGrid || !modalOverlay) return;

    overviewGrid.innerHTML = '';

    testQuestions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'overview-question';
      questionElement.textContent = index + 1;

      // Set status
      if (index === currentQuestionIndex) {
        questionElement.classList.add('current');
      } else if (userAnswers[index] !== null) {
        questionElement.classList.add('answered');
      } else {
        questionElement.classList.add('unanswered');
      }

      // Add click handler
      questionElement.addEventListener('click', () => {
        currentQuestionIndex = index;
        loadQuestion(index);
        hideQuestionOverview();
      });

      overviewGrid.appendChild(questionElement);
    });

    modalOverlay.classList.add('show');
    console.log('🔍 Question overview shown');
  }

  // Hide question overview
  function hideQuestionOverview() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('show');
    }
    console.log('🔍 Question overview hidden');
  }

  // Submit test
  function submitTest() {
    if (timer) {
      clearInterval(timer);
    }
    testEndTime = new Date();

    console.log('📤 Test submitted!');
    showScreen('results');
    calculateResults();
  }

  // Calculate results
  function calculateResults() {
    const totalQuestions = testQuestions.length;
    let correctAnswers = 0;
    let codingCorrect = 0;
    let aptitudeCorrect = 0;
    let codingTotal = 0;
    let aptitudeTotal = 0;

    testQuestions.forEach((question, index) => {
      if (question.type === 'coding') {
        codingTotal++;
        if (userAnswers[index] === question.correctAnswer) {
          codingCorrect++;
          correctAnswers++;
        }
      } else if (question.type === 'aptitude') {
        aptitudeTotal++;
        if (userAnswers[index] === question.correctAnswer) {
          aptitudeCorrect++;
          correctAnswers++;
        }
      }
    });

    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const timeTaken = Math.floor((testEndTime - testStartTime) / 1000);
    const timeTakenMinutes = Math.floor(timeTaken / 60);
    const timeTakenSeconds = timeTaken % 60;

    // Update results display
    const scoreNumber = document.getElementById('scoreNumber');
    const correctAnswersEl = document.getElementById('correctAnswers');
    const wrongAnswersEl = document.getElementById('wrongAnswers');
    const timeTakenEl = document.getElementById('timeTaken');

    if (scoreNumber) scoreNumber.textContent = scorePercentage;
    if (correctAnswersEl) correctAnswersEl.textContent = correctAnswers;
    if (wrongAnswersEl) wrongAnswersEl.textContent = wrongAnswers;
    if (timeTakenEl) timeTakenEl.textContent = timeTakenMinutes + ':' + timeTakenSeconds.toString().padStart(2, '0');

    // Update category breakdown
    const codingScore = document.getElementById('codingScore');
    const aptitudeScore = document.getElementById('aptitudeScore');
    const codingFill = document.getElementById('codingFill');
    const aptitudeFill = document.getElementById('aptitudeFill');

    if (codingScore) codingScore.textContent = codingCorrect + '/' + codingTotal;
    if (aptitudeScore) aptitudeScore.textContent = aptitudeCorrect + '/' + aptitudeTotal;

    const codingPercentage = (codingCorrect / codingTotal) * 100;
    const aptitudePercentage = (aptitudeCorrect / aptitudeTotal) * 100;

    if (codingFill) codingFill.style.width = codingPercentage + '%';
    if (aptitudeFill) aptitudeFill.style.width = aptitudePercentage + '%';

    // Update results icon based on score
    const resultsIcon = document.getElementById('resultsIcon');
    if (resultsIcon) {
      if (scorePercentage >= 80) {
        resultsIcon.textContent = '🎉';
      } else if (scorePercentage >= 70) {
        resultsIcon.textContent = '👍';
      } else if (scorePercentage >= 60) {
        resultsIcon.textContent = '😐';
      } else {
        resultsIcon.textContent = '😔';
      }
    }

    console.log('📊 Results calculated:', scorePercentage + '% (' + correctAnswers + '/' + totalQuestions + ')');

    // Generate AI feedback
    setTimeout(() => {
      generateAIFeedback(scorePercentage, correctAnswers, totalQuestions, codingCorrect, codingTotal, aptitudeCorrect, aptitudeTotal);
    }, 2000);
  }

  // Generate AI feedback
  function generateAIFeedback(scorePercentage, correctAnswers, totalQuestions, codingCorrect, codingTotal, aptitudeCorrect, aptitudeTotal) {
    const feedbackContent = document.getElementById('aiFeedbackContent');
    const tailoredSection = document.getElementById('tailoredTestSection');

    if (!feedbackContent || !tailoredSection) return;

    // Analyze performance
    const weakAreas = [];
    const strongAreas = [];

    const codingPercentage = (codingCorrect / codingTotal) * 100;
    const aptitudePercentage = (aptitudeCorrect / aptitudeTotal) * 100;

    if (codingPercentage < 70) {
      weakAreas.push({
        area: 'Coding & Programming',
        score: codingPercentage,
        issues: ['Data Structures understanding', 'Algorithm complexity analysis', 'Problem-solving approach']
      });
    } else {
      strongAreas.push('Coding & Programming');
    }

    if (aptitudePercentage < 70) {
      weakAreas.push({
        area: 'Quantitative & Logical Reasoning',
        score: aptitudePercentage,
        issues: ['Mathematical calculations', 'Logical pattern recognition', 'Problem interpretation']
      });
    } else {
      strongAreas.push('Quantitative & Logical Reasoning');
    }

    // Generate feedback HTML
    let feedbackHTML = '<div class="ai-feedback-text">' +
      '<h4 style="color: var(--color-white); margin-bottom: 1rem;">📈 Performance Analysis</h4>' +
      '<p style="margin-bottom: 1rem;">Based on your test performance, I\'ve analyzed your strengths and areas for improvement:</p>';

    if (strongAreas.length > 0) {
      feedbackHTML += '<div style="margin-bottom: 1.5rem;">' +
        '<h5 style="color: var(--color-success); margin-bottom: 0.5rem;">✅ Strong Areas:</h5>' +
        '<ul style="margin-left: 1rem; color: var(--color-text-secondary);">';

      strongAreas.forEach(area => {
        feedbackHTML += '<li style="margin-bottom: 0.25rem;">' + area + '</li>';
      });

      feedbackHTML += '</ul></div>';
    }

    if (weakAreas.length > 0) {
      feedbackHTML += '<div style="margin-bottom: 1.5rem;">' +
        '<h5 style="color: var(--color-warning); margin-bottom: 0.5rem;">⚠️ Areas Needing Improvement:</h5>' +
        '<ul class="weakness-list">';

      weakAreas.forEach(weak => {
        feedbackHTML += '<li class="weakness-item">' +
          '<div class="weakness-icon">📚</div>' +
          '<div class="weakness-content">' +
          '<div class="weakness-title">' + weak.area + ' (Score: ' + Math.round(weak.score) + '%)</div>' +
          '<div class="weakness-description">Focus on: ' + weak.issues.join(', ') + '</div>' +
          '</div></li>';
      });

      feedbackHTML += '</ul></div>';
    }

    // Personalized recommendations
    feedbackHTML += '<div style="margin-bottom: 1.5rem;">' +
      '<h5 style="color: var(--color-info); margin-bottom: 0.5rem;">💡 Personalized Recommendations:</h5>' +
      '<ul style="margin-left: 1rem; color: var(--color-text-secondary);">';

    if (codingPercentage < 70) {
      feedbackHTML += '<li style="margin-bottom: 0.5rem;">Practice data structure problems daily (30-45 minutes)</li>' +
        '<li style="margin-bottom: 0.5rem;">Focus on time complexity analysis for algorithms</li>' +
        '<li style="margin-bottom: 0.5rem;">Solve coding problems on platforms like LeetCode or HackerRank</li>';
    }

    if (aptitudePercentage < 70) {
      feedbackHTML += '<li style="margin-bottom: 0.5rem;">Practice quantitative aptitude questions regularly</li>' +
        '<li style="margin-bottom: 0.5rem;">Work on logical reasoning and pattern recognition</li>' +
        '<li style="margin-bottom: 0.5rem;">Take timed practice tests to improve speed</li>';
    }

    let assessmentText = '';
    if (scorePercentage >= 80) {
      assessmentText = 'Excellent performance! Keep up the great work.';
    } else if (scorePercentage >= 70) {
      assessmentText = 'Good performance with room for improvement in specific areas.';
    } else if (scorePercentage >= 60) {
      assessmentText = 'Average performance. Focus on weak areas for significant improvement.';
    } else {
      assessmentText = 'Needs improvement. Dedicated practice in identified areas will help boost your score.';
    }

    feedbackHTML += '</ul></div>' +
      '<div style="padding: 1rem; background: var(--color-surface); border-radius: var(--radius-lg); border-left: 4px solid var(--color-test-primary);">' +
      '<strong style="color: var(--color-white);">Overall Assessment:</strong> ' +
      '<span style="color: var(--color-text-secondary);">' + assessmentText + '</span>' +
      '</div></div>';

    feedbackContent.innerHTML = feedbackHTML;

    // Generate tailored test plan
    generateTailoredTestPlan(weakAreas);

    // Show tailored section
    tailoredSection.style.display = 'block';

    console.log('🤖 AI feedback generated');
  }

  // Generate tailored test plan
  function generateTailoredTestPlan(weakAreas) {
    const tailoredContent = document.getElementById('tailoredContent');
    const nextTestDate = document.getElementById('nextTestDate');
    const focusAreas = document.getElementById('focusAreas');
    const expectedImprovement = document.getElementById('expectedImprovement');

    if (!tailoredContent || !nextTestDate || !focusAreas || !expectedImprovement) return;

    // Calculate next test date (7 days from now)
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 7);
    const formattedDate = nextDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    nextTestDate.textContent = formattedDate;

    // Set focus areas
    const focusAreasList = weakAreas.length > 0 ? 
      weakAreas.map(area => area.area).join(', ') : 
      'Comprehensive Review, Advanced Topics';

    focusAreas.textContent = focusAreasList;

    // Calculate expected improvement
    const currentWeakness = weakAreas.length;
    const improvementPercentage = currentWeakness > 0 ? 
      Math.min(25, 10 + (currentWeakness * 5)) : 10;

    expectedImprovement.textContent = improvementPercentage + '%';

    // Generate tailored content
    let tailoredHTML = '<div style="margin-bottom: 1rem;">' +
      '<h4 style="color: var(--color-white); margin-bottom: 0.5rem;">🎯 Customized Study Plan</h4>' +
      '<p style="color: var(--color-text-secondary); margin-bottom: 1rem;">Based on your performance, I\'ve created a personalized 7-day study plan:</p>' +
      '</div>';

    if (weakAreas.length > 0) {
      tailoredHTML += '<div style="margin-bottom: 1.5rem;">' +
        '<h5 style="color: var(--color-test-primary); margin-bottom: 0.75rem;">📚 Daily Study Schedule:</h5>' +
        '<div style="display: grid; gap: 0.75rem;">';

      const studyPlan = [
        'Day 1-2: Focus on Data Structures and Basic Algorithms',
        'Day 3-4: Practice Quantitative Aptitude and Speed Calculations',
        'Day 5-6: Work on Logical Reasoning and Pattern Recognition',
        'Day 7: Comprehensive Review and Mock Test'
      ];

      studyPlan.forEach(plan => {
        tailoredHTML += '<div style="padding: 0.75rem; background: var(--color-surface); border-radius: var(--radius-md); border-left: 3px solid var(--color-test-primary);">' +
          '<span style="color: var(--color-white); font-weight: 600;">' + plan + '</span>' +
          '</div>';
      });

      tailoredHTML += '</div></div>';
    }

    tailoredHTML += '<div style="padding: 1rem; background: linear-gradient(135deg, var(--color-success), rgba(34, 197, 94, 0.8)); border-radius: var(--radius-lg); color: white;">' +
      '<strong>💪 Goal:</strong> Improve your overall score by ' + improvementPercentage + '% in the next scheduled test!' +
      '</div>';

    tailoredContent.innerHTML = tailoredHTML;

    console.log('🎯 Tailored test scheduled for', formattedDate);
  }

  // Reset test
  function resetTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    testStartTime = null;
    testEndTime = null;
    timeRemaining = 25 * 60;

    if (timer) {
      clearInterval(timer);
      timer = null;
    }

    // Reset timer display
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
      timerDisplay.textContent = '25:00';
      timerDisplay.style.color = 'var(--color-white)';
    }

    console.log('🔄 Test reset');
  }

  // Save test results
  function saveTestResults() {
    const results = {
      date: new Date().toISOString(),
      score: document.getElementById('scoreNumber') ? document.getElementById('scoreNumber').textContent : 0,
      correct: document.getElementById('correctAnswers') ? document.getElementById('correctAnswers').textContent : 0,
      total: testQuestions.length,
      timeTaken: document.getElementById('timeTaken') ? document.getElementById('timeTaken').textContent : '0:00',
      answers: userAnswers
    };

    // Save to localStorage (in a real app, this would be saved to a server)
    try {
      const savedResults = JSON.parse(localStorage.getItem('testResults') || '[]');
      savedResults.push(results);
      localStorage.setItem('testResults', JSON.stringify(savedResults));

      alert('💾 Test results saved successfully!\n\nYou can view your saved results in your profile or dashboard.');
      console.log('💾 Test results saved');
    } catch (error) {
      console.error('❌ Error saving results:', error);
      alert('❌ Error saving results. Please try again.');
    }
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (currentScreen === 'test') {
      // Arrow keys for navigation
      if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        e.preventDefault();
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
      } else if (e.key === 'ArrowRight' && currentQuestionIndex < testQuestions.length - 1) {
        e.preventDefault();
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
      }

      // Number keys for option selection
      if (['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        const optionIndex = parseInt(e.key) - 1;
        selectOption(currentQuestionIndex, optionIndex);
      }

      // Escape key to show overview
      if (e.key === 'Escape') {
        e.preventDefault();
        showQuestionOverview();
      }
    }

    // Ctrl/Cmd + H to go to dashboard
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      if (document.getElementById('logoHome')) {
        document.getElementById('logoHome').click();
      }
    }

    // Ctrl/Cmd + M to toggle navigation menu
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      if (document.getElementById('menuBtn')) {
        document.getElementById('menuBtn').click();
      }
    }
  });

  console.log('⌨️ Keyboard shortcuts enabled');
});

console.log('✅ MCQ Test Page JavaScript Loaded Successfully!');
console.log('📝 Test ready with', testQuestions.length, 'questions');
console.log('🤖 AI feedback and tailored test scheduling enabled!');