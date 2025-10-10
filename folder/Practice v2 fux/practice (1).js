// PRACTICE TESTS PAGE JAVASCRIPT - FIXED DROPDOWN
console.log('💪 Practice Tests Page JavaScript Loading...');

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 Practice tests page initialized!');

  // Initialize all practice components
  initializePracticePage();

  function initializePracticePage() {
    setupLogoRedirect();
    setupOptionsMenu();
    setupTimeDisplay();
    setupAttemptButtons();
    setupHistoryDropdown();
    setupViewToggle();
    setupHistoryFilter();
    setupLiveStats();
    setupEntranceAnimations();

    console.log('✅ All practice components loaded!');
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

  // FIXED Options menu functionality
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
          console.log(`🔗 Navigating to: ${href}`);
          window.location.href = href;
        }
      });
    });

    console.log('📋 FIXED Options menu setup complete');
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

  // Attempt buttons for test categories
  function setupAttemptButtons() {
    const attemptButtons = document.querySelectorAll('.attempt-btn');

    attemptButtons.forEach(button => {
      button.addEventListener('click', function() {
        const testType = this.getAttribute('data-test-type');
        const testInfo = getTestInfo(testType);

        console.log(`🚀 ${testType} test button clicked`);

        // Visual feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          if (!this.disabled) {
            this.style.transform = '';
          }
        }, 150);

        // Show confirmation dialog
        const confirmed = confirm(
          `🎯 Ready to Start ${testInfo.title}?\n\n` +
          `📋 Test Details:\n` +
          `• Duration: ${testInfo.duration}\n` +
          `• Questions: ${testInfo.questions}\n` +
          `• Difficulty: ${testInfo.difficulty}\n` +
          `• Focus: ${testInfo.focus}\n\n` +
          `💡 This practice test will help you improve your ${testType} skills.\n\n` +
          `Click OK to start your practice session!`
        );

        if (confirmed) {
          // Show loading state
          const originalContent = this.innerHTML;
          this.innerHTML = `
            <span class="btn-icon">⏳</span>
            <span class="btn-text">Loading...</span>
          `;
          this.disabled = true;

          // Simulate loading and redirect
          setTimeout(() => {
            alert(`🚀 Launching ${testInfo.title}!\n\nYour practice test is ready. Give it your best shot!\n\nGood luck! 🍀`);

            // In a real app, redirect to specific test page
            console.log(`🔗 Would redirect to ${testType} test page`);

            // Reset button for demo
            this.innerHTML = originalContent;
            this.disabled = false;
          }, 2000);

          console.log(`✅ User confirmed ${testType} test`);
        } else {
          console.log(`❌ User cancelled ${testType} test`);
        }
      });
    });

    console.log('💪 Attempt buttons setup complete');
  }

  function getTestInfo(testType) {
    const testData = {
      coding: {
        title: 'Coding Practice Test',
        duration: '60 minutes',
        questions: '25 problems',
        difficulty: 'Medium',
        focus: 'Data Structures & Algorithms'
      },
      aptitude: {
        title: 'Aptitude Practice Test',
        duration: '45 minutes',
        questions: '40 questions',
        difficulty: 'Mixed',
        focus: 'Logical & Analytical Reasoning'
      },
      communication: {
        title: 'Communication Skills Test',
        duration: '40 minutes',
        questions: '30 questions',
        difficulty: 'Easy to Medium',
        focus: 'Verbal & Written Skills'
      }
    };

    return testData[testType] || {};
  }

  // History dropdown functionality
  function setupHistoryDropdown() {
    const historySelect = document.getElementById('historyTestSelect');
    const historyContainer = document.getElementById('selectedHistoryContainer');

    if (!historySelect || !historyContainer) {
      console.log('⚠️ History elements not found');
      return;
    }

    const historyData = {
      test1: {
        title: 'Coding Practice #23',
        date: 'Oct 9, 2025',
        type: 'coding',
        icon: '💻',
        score: '8.2/10',
        duration: '58 min',
        questions: 25,
        attempted: 25,
        correct: 18,
        topics: ['Arrays', 'Dynamic Programming', 'Trees'],
        strengths: ['Algorithm Design', 'Code Efficiency', 'Problem Analysis'],
        improvements: ['Edge Case Handling', 'Time Complexity Optimization'],
        feedback: 'Strong performance in core algorithms. Focus on optimizing time complexity and handling edge cases more systematically.'
      },
      test2: {
        title: 'Aptitude Challenge #18',
        date: 'Oct 8, 2025',
        type: 'aptitude',
        icon: '🧠',
        score: '9.1/10',
        duration: '42 min',
        questions: 40,
        attempted: 40,
        correct: 36,
        topics: ['Logical Reasoning', 'Numerical Ability', 'Pattern Recognition'],
        strengths: ['Pattern Recognition', 'Logical Analysis', 'Quick Calculation'],
        improvements: ['Reading Comprehension Speed', 'Complex Word Problems'],
        feedback: 'Excellent logical reasoning skills. Minor improvements needed in verbal reasoning section for faster completion.'
      },
      test3: {
        title: 'Communication Skills #15',
        date: 'Oct 7, 2025',
        type: 'communication',
        icon: '💬',
        score: '7.8/10',
        duration: '37 min',
        questions: 30,
        attempted: 30,
        correct: 23,
        topics: ['Grammar', 'Vocabulary', 'Reading Comprehension'],
        strengths: ['Vocabulary Usage', 'Grammar Rules', 'Sentence Structure'],
        improvements: ['Reading Speed', 'Comprehension Accuracy', 'Idioms & Phrases'],
        feedback: 'Good foundation in grammar and vocabulary. Work on reading comprehension speed and accuracy for better scores.'
      },
      test4: {
        title: 'Coding Marathon #22',
        date: 'Oct 6, 2025',
        type: 'coding',
        icon: '💻',
        score: '7.5/10',
        duration: '62 min',
        questions: 25,
        attempted: 24,
        correct: 16,
        topics: ['Graph Algorithms', 'String Manipulation', 'Sorting'],
        strengths: ['Basic Data Structures', 'Code Readability', 'Debugging'],
        improvements: ['Graph Traversal', 'Advanced Algorithms', 'Time Management'],
        feedback: 'Solid understanding of basic concepts. Focus on advanced algorithms and improve time management during tests.'
      },
      test5: {
        title: 'Logical Reasoning #17',
        date: 'Oct 5, 2025',
        type: 'aptitude',
        icon: '🧠',
        score: '8.7/10',
        duration: '40 min',
        questions: 40,
        attempted: 39,
        correct: 34,
        topics: ['Syllogisms', 'Blood Relations', 'Seating Arrangements'],
        strengths: ['Logical Analysis', 'Deductive Reasoning', 'Pattern Recognition'],
        improvements: ['Complex Puzzles', 'Time Allocation'],
        feedback: 'Strong logical reasoning abilities. Practice complex puzzles to improve speed and accuracy further.'
      }
    };

    historySelect.addEventListener('change', function() {
      const selectedValue = this.value;

      if (!selectedValue) {
        // Show no selection message
        historyContainer.innerHTML = `
          <div class="no-selection-message">
            <div class="message-icon">📝</div>
            <h3>Select a Practice Test</h3>
            <p>Choose a test from the dropdown above to view detailed performance analysis and results.</p>
          </div>
        `;
        return;
      }

      const data = historyData[selectedValue];
      if (!data) return;

      // Create detailed history display
      historyContainer.innerHTML = `
        <div class="selected-history-content">
          <div class="history-item-detailed">
            <div class="history-header">
              <div class="history-type ${data.type}">
                <span class="type-icon">${data.icon}</span>
                <span class="type-label">${data.title}</span>
              </div>
              <div class="history-date">${data.date}</div>
            </div>

            <div class="history-overview">
              <div class="overview-stats">
                <div class="overview-stat">
                  <span class="stat-label">Score</span>
                  <span class="stat-value score">${data.score}</span>
                </div>
                <div class="overview-stat">
                  <span class="stat-label">Duration</span>
                  <span class="stat-value">${data.duration}</span>
                </div>
                <div class="overview-stat">
                  <span class="stat-label">Accuracy</span>
                  <span class="stat-value">${Math.round((data.correct / data.attempted) * 100)}%</span>
                </div>
                <div class="overview-stat">
                  <span class="stat-label">Questions</span>
                  <span class="stat-value">${data.correct}/${data.attempted}</span>
                </div>
              </div>
            </div>

            <div class="history-details">
              <div class="detail-section">
                <h4 class="detail-title">📚 Topics Covered</h4>
                <div class="topics-list">
                  ${data.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
              </div>

              <div class="performance-analysis">
                <div class="analysis-section">
                  <h5 class="analysis-title">✅ Strengths</h5>
                  <ul class="analysis-list">
                    ${data.strengths.map(strength => `<li>${strength}</li>`).join('')}
                  </ul>
                </div>

                <div class="analysis-section">
                  <h5 class="analysis-title">📈 Areas to Improve</h5>
                  <ul class="analysis-list">
                    ${data.improvements.map(improvement => `<li>${improvement}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <div class="feedback-section">
                <h4 class="detail-title">💡 Detailed Feedback</h4>
                <p class="feedback-text">${data.feedback}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      // Add animation
      const historyContent = historyContainer.querySelector('.selected-history-content');
      if (historyContent) {
        historyContent.style.opacity = '0';
        historyContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
          historyContent.style.transition = 'all 0.5s ease-out';
          historyContent.style.opacity = '1';
          historyContent.style.transform = 'translateY(0)';
        }, 100);
      }

      console.log(`📊 Loaded history for: ${data.title}`);
    });

    console.log('📊 History dropdown setup complete');
  }

  // View toggle functionality
  function setupViewToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const listView = document.getElementById('historyListView');
    const chartView = document.getElementById('historyChartView');

    if (!listView || !chartView) {
      console.log('⚠️ View elements not found');
      return;
    }

    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const view = this.getAttribute('data-view');

        // Update button states
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Update views
        if (view === 'list') {
          listView.classList.add('active');
          chartView.classList.remove('active');
          console.log('📋 Switched to list view');
        } else if (view === 'chart') {
          listView.classList.remove('active');
          chartView.classList.add('active');
          animateChart();
          console.log('📈 Switched to chart view');
        }
      });
    });

    console.log('🔄 View toggle setup complete');
  }

  // Animate chart bars
  function animateChart() {
    const chartBars = document.querySelectorAll('.chart-bar');

    chartBars.forEach((bar, index) => {
      const height = bar.style.height;
      bar.style.height = '0%';

      setTimeout(() => {
        bar.style.transition = 'height 0.8s ease-out';
        bar.style.height = height;
      }, index * 100);
    });
  }

  // History filter functionality
  function setupHistoryFilter() {
    const historyFilter = document.getElementById('historyFilter');
    const historySelect = document.getElementById('historyTestSelect');

    if (!historyFilter || !historySelect) {
      console.log('⚠️ Filter elements not found');
      return;
    }

    historyFilter.addEventListener('change', function() {
      const filterValue = this.value;
      const options = historySelect.querySelectorAll('option');

      options.forEach(option => {
        if (option.value === '') {
          option.style.display = 'block';
          return;
        }

        if (filterValue === 'all') {
          option.style.display = 'block';
        } else {
          // Simple filtering based on option text
          const optionText = option.textContent.toLowerCase();
          if (optionText.includes(filterValue)) {
            option.style.display = 'block';
          } else {
            option.style.display = 'none';
          }
        }
      });

      // Reset selection
      historySelect.value = '';
      historySelect.dispatchEvent(new Event('change'));

      console.log(`🔍 Filtered tests by: ${filterValue}`);
    });

    console.log('🔍 History filter setup complete');
  }

  // Live stats updates
  function setupLiveStats() {
    const stats = {
      activeUsers: { min: 1200, max: 1300, current: 1252 },
      studentsHelped: { base: 15382, increment: 0 }
    };

    // Update stats every 12 seconds
    setInterval(() => {
      // Update active users count
      const activeUsersElements = [
        document.getElementById('activeUsers'),
        document.getElementById('currentlyStudying')
      ];

      const variation = Math.floor(Math.random() * 20) - 10;
      let newCount = stats.activeUsers.current + variation;
      newCount = Math.max(stats.activeUsers.min, Math.min(stats.activeUsers.max, newCount));
      stats.activeUsers.current = newCount;

      activeUsersElements.forEach(el => {
        if (el) {
          el.textContent = newCount.toLocaleString();
        }
      });

      // Update students helped occasionally
      if (Math.random() < 0.15) {
        stats.studentsHelped.increment += 1;
        const newTotal = stats.studentsHelped.base + stats.studentsHelped.increment;

        const studentsHelpedElements = [
          document.getElementById('studentsHelped'),
          document.getElementById('studentsPlacedFooter')
        ];

        studentsHelpedElements.forEach(el => {
          if (el) {
            el.textContent = newTotal.toLocaleString();
          }
        });

        console.log(`🎉 New success story! Total: ${newTotal.toLocaleString()}`);
      }
    }, 12000);

    console.log('📊 Live stats updates enabled');
  }

  // Entrance animations
  function setupEntranceAnimations() {
    // Animate page header
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
      pageHeader.style.opacity = '0';
      pageHeader.style.transform = 'translateY(30px)';

      setTimeout(() => {
        pageHeader.style.transition = 'all 0.8s ease-out';
        pageHeader.style.opacity = '1';
        pageHeader.style.transform = 'translateY(0)';
      }, 200);
    }

    // Animate practice cards with stagger
    const practiceCards = document.querySelectorAll('.practice-card');
    practiceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px) scale(0.95)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, 600 + (index * 200));
    });

    // Animate history section
    const historySection = document.querySelector('.practice-history');
    if (historySection) {
      historySection.style.opacity = '0';
      historySection.style.transform = 'translateY(40px)';

      setTimeout(() => {
        historySection.style.transition = 'all 0.6s ease-out';
        historySection.style.opacity = '1';
        historySection.style.transform = 'translateY(0)';
      }, 1200);
    }

    // Animate stat badges
    const statBadges = document.querySelectorAll('.stat-badge');
    statBadges.forEach((badge, index) => {
      badge.style.opacity = '0';
      badge.style.transform = 'scale(0.8)';

      setTimeout(() => {
        badge.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        badge.style.opacity = '1';
        badge.style.transform = 'scale(1)';
      }, 400 + (index * 100));
    });

    console.log('🎨 Entrance animations setup');
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + H to go to dashboard
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      document.getElementById('logoHome')?.click();
    }

    // Ctrl/Cmd + M to toggle navigation menu
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      document.getElementById('menuBtn')?.click();
    }

    // Ctrl/Cmd + 1/2/3 for practice tests
    if ((e.ctrlKey || e.metaKey) && ['1', '2', '3'].includes(e.key)) {
      e.preventDefault();
      const testTypes = ['coding', 'aptitude', 'communication'];
      const testIndex = parseInt(e.key) - 1;
      const testButton = document.querySelector(`[data-test-type="${testTypes[testIndex]}"]`);
      testButton?.click();
    }

    // Escape key to close menu
    if (e.key === 'Escape') {
      const menuDropdown = document.getElementById('menuDropdown');
      const menuBtn = document.getElementById('menuBtn');
      if (menuDropdown && menuDropdown.classList.contains('show')) {
        menuDropdown.classList.remove('show');
        menuBtn.classList.remove('active');
        console.log('📁 Menu closed (Escape key)');
      }
    }
  });

  console.log('⌨️ Keyboard shortcuts enabled (Ctrl+H: Home, Ctrl+M: Menu, Ctrl+1/2/3: Tests, Esc: Close)');
});

// Add dynamic styles for detailed history
const historyStyles = document.createElement('style');
historyStyles.textContent = `
  .selected-history-content {
    width: 100%;
  }

  .history-item-detailed {
    background: var(--color-surface);
    border-radius: var(--radius-2xl);
    border: 1px solid var(--color-border-light);
    padding: var(--spacing-3xl);
    margin: 0;
  }

  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-2xl);
    padding-bottom: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border-light);
  }

  .history-type {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
  }

  .history-type.coding {
    background: var(--color-coding-light);
    border: 1px solid var(--color-coding-border);
    color: var(--color-coding);
  }

  .history-type.aptitude {
    background: var(--color-aptitude-light);
    border: 1px solid var(--color-aptitude-border);
    color: var(--color-aptitude);
  }

  .history-type.communication {
    background: var(--color-communication-light);
    border: 1px solid var(--color-communication-border);
    color: var(--color-communication);
  }

  .type-icon {
    font-size: var(--text-lg);
  }

  .history-date {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
  }

  .history-overview {
    margin-bottom: var(--spacing-2xl);
  }

  .overview-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-lg);
  }

  .overview-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-border-light);
  }

  .overview-stat .stat-label {
    color: var(--color-text-secondary);
    font-size: var(--text-xs);
    font-weight: var(--weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .overview-stat .stat-value {
    color: var(--color-white);
    font-size: var(--text-lg);
    font-weight: var(--weight-bold);
  }

  .overview-stat .stat-value.score {
    color: var(--color-success);
  }

  .history-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
  }

  .detail-section {
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    border: 1px solid var(--color-border-light);
  }

  .detail-title {
    color: var(--color-white);
    font-size: var(--text-lg);
    font-weight: var(--weight-semibold);
    margin-bottom: var(--spacing-lg);
  }

  .topics-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .topic-tag {
    padding: var(--spacing-xs) var(--spacing-md);
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: var(--weight-medium);
  }

  .performance-analysis {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }

  .analysis-section {
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    border: 1px solid var(--color-border-light);
  }

  .analysis-title {
    color: var(--color-white);
    font-size: var(--text-base);
    font-weight: var(--weight-semibold);
    margin-bottom: var(--spacing-lg);
  }

  .analysis-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .analysis-list li {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--color-border-light);
    line-height: 1.5;
  }

  .analysis-list li:last-child {
    border-bottom: none;
  }

  .feedback-section {
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    border: 1px solid var(--color-border-light);
  }

  .feedback-text {
    color: var(--color-text-secondary);
    font-size: var(--text-base);
    line-height: 1.7;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .performance-analysis {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .overview-stats {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-md);
    }

    .history-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacing-md);
    }
  }
`;
document.head.appendChild(historyStyles);

console.log('✅ FIXED Practice Tests Page JavaScript Loaded Successfully!');
console.log('💪 Dropdown menu fixed with proper event handling!');
console.log('🖤 Solid black background dropdown working!');