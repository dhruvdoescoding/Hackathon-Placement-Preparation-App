// FEEDBACK PAGE JAVASCRIPT
console.log('💬 Feedback Page JavaScript Loading...');

document.addEventListener('DOMContentLoaded', function() {
  console.log('📊 Feedback page initialized!');

  // Initialize all feedback components
  initializeFeedbackPage();

  function initializeFeedbackPage() {
    setupLogoRedirect();
    setupOptionsMenu();
    setupTimeDisplay();
    setupWeeklyFeedbackDropdown();
    setupTroubleTopicsDropdown();
    setupTailoredTestButton();
    setupLiveStats();
    setupEntranceAnimations();

    console.log('✅ All feedback components loaded!');
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

  // Options menu functionality
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

  // Weekly Test Feedback Dropdown
  function setupWeeklyFeedbackDropdown() {
    const weeklySelect = document.getElementById('weeklyFeedbackSelect');
    const feedbackContainer = document.getElementById('selectedFeedbackContainer');

    if (!weeklySelect || !feedbackContainer) {
      console.log('⚠️ Weekly feedback elements not found');
      return;
    }

    const feedbackData = {
      test1: {
        title: 'Test #47 - Aptitude Challenge',
        date: 'Oct 9, 2025',
        id: 'APT_2025_1009_47',
        type: 'aptitude',
        icon: '🧠',
        score: '8.2/10',
        feedback: 'Excellent performance in logical reasoning and numerical ability. Your pattern recognition skills are outstanding. Minor improvements needed in verbal reasoning - focus on reading comprehension speed. Continue practicing similar problems to maintain this level.',
        strengths: ['Logical Reasoning', 'Pattern Recognition', 'Numerical Ability'],
        improvements: ['Reading Speed', 'Verbal Reasoning', 'Time Management']
      },
      test2: {
        title: 'Test #46 - Coding Marathon',
        date: 'Oct 7, 2025',
        id: 'COD_2025_1007_46',
        type: 'coding',
        icon: '💻',
        score: '7.5/10',
        feedback: 'Good algorithmic thinking and problem-solving approach. Code quality is improving with better variable naming and structure. Focus on optimizing time complexity and learning advanced data structures like segment trees and tries.',
        strengths: ['Algorithm Design', 'Code Structure', 'Problem Analysis'],
        improvements: ['Time Complexity', 'Advanced Data Structures', 'Edge Case Handling']
      },
      test3: {
        title: 'Test #45 - Communication Skills',
        date: 'Oct 5, 2025',
        id: 'COM_2025_1005_45',
        type: 'communication',
        icon: '💬',
        score: '7.8/10',
        feedback: 'Strong written communication with clear structure and good vocabulary usage. Presentation skills are developing well. Work on maintaining eye contact during verbal communication and practice active listening in group scenarios.',
        strengths: ['Written Communication', 'Vocabulary', 'Presentation Structure'],
        improvements: ['Eye Contact', 'Active Listening', 'Confidence in Speaking']
      },
      test4: {
        title: 'Test #44 - Full Stack Mock',
        date: 'Oct 3, 2025',
        id: 'FSM_2025_1003_44',
        type: 'coding',
        icon: '🌐',
        score: '7.0/10',
        feedback: 'Good understanding of full-stack concepts with solid frontend skills. Backend development needs more attention - focus on database optimization and API design patterns. Security best practices should be implemented more consistently.',
        strengths: ['Frontend Development', 'User Interface Design', 'JavaScript Proficiency'],
        improvements: ['Backend Architecture', 'Database Optimization', 'Security Implementation']
      },
      test5: {
        title: 'Test #43 - Data Structures',
        date: 'Oct 1, 2025',
        id: 'DSA_2025_1001_43',
        type: 'coding',
        icon: '🔢',
        score: '6.8/10',
        feedback: 'Basic data structure knowledge is solid, but advanced implementations need work. Tree and graph algorithms require more practice. Focus on understanding when to use specific data structures for optimal performance.',
        strengths: ['Basic Data Structures', 'Array Manipulation', 'Linked Lists'],
        improvements: ['Tree Algorithms', 'Graph Theory', 'Performance Optimization']
      }
    };

    weeklySelect.addEventListener('change', function() {
      const selectedValue = this.value;

      if (!selectedValue) {
        // Show no selection message
        feedbackContainer.innerHTML = `
          <div class="no-selection-message">
            <div class="message-icon">📝</div>
            <h3>Select a Test</h3>
            <p>Choose a test from the dropdown above to view detailed feedback and performance analysis.</p>
          </div>
        `;
        return;
      }

      const data = feedbackData[selectedValue];
      if (!data) return;

      // Create detailed feedback display
      feedbackContainer.innerHTML = `
        <div class="selected-feedback-content">
          <div class="feedback-item detailed-feedback">
            <div class="feedback-header">
              <div class="feedback-type ${data.type}">
                <span class="type-icon">${data.icon}</span>
                <span class="type-label">${data.title}</span>
              </div>
              <div class="feedback-date">${data.date}</div>
            </div>
            <div class="feedback-content">
              <div class="test-id-section">
                <span class="test-id-label">Test ID:</span>
                <span class="test-id-value">${data.id}</span>
              </div>
              <div class="feedback-score-section">
                <span class="score-label">Overall Performance:</span>
                <span class="score-value">${data.score}</span>
              </div>
              <div class="detailed-feedback-text">
                <h4>Detailed Analysis</h4>
                <p>${data.feedback}</p>
              </div>
              <div class="performance-breakdown">
                <div class="strengths-section">
                  <h5>✅ Strengths</h5>
                  <ul class="performance-list">
                    ${data.strengths.map(strength => `<li>${strength}</li>`).join('')}
                  </ul>
                </div>
                <div class="improvements-section">
                  <h5>📈 Areas for Improvement</h5>
                  <ul class="performance-list">
                    ${data.improvements.map(improvement => `<li>${improvement}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Add animation
      const feedbackContent = feedbackContainer.querySelector('.selected-feedback-content');
      if (feedbackContent) {
        feedbackContent.style.opacity = '0';
        feedbackContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
          feedbackContent.style.transition = 'all 0.5s ease-out';
          feedbackContent.style.opacity = '1';
          feedbackContent.style.transform = 'translateY(0)';
        }, 100);
      }

      console.log(`📊 Loaded feedback for: ${data.title}`);
    });

    console.log('📊 Weekly feedback dropdown setup complete');
  }

  // Trouble Topics Dropdown
  function setupTroubleTopicsDropdown() {
    const troubleSelect = document.getElementById('troubleTopicsSelect');
    const troubleContainer = document.getElementById('troubleTopicsContainer');

    if (!troubleSelect || !troubleContainer) {
      console.log('⚠️ Trouble topics elements not found');
      return;
    }

    const troubleData = {
      topic1: {
        topic: 'Dynamic Programming',
        testId: 'DP_2025_1008_23',
        difficulty: 'High',
        studentsStruggling: '78%',
        commonMistakes: [
          'Not identifying overlapping subproblems correctly',
          'Incorrect state transition formulation',
          'Memory optimization issues with space complexity'
        ],
        recommendations: [
          'Practice classic DP problems (Knapsack, LCS, LIS)',
          'Focus on memoization vs tabulation approaches',
          'Study space-optimized DP solutions'
        ],
        resources: [
          'Dynamic Programming Patterns Guide',
          'Interactive DP Visualizer',
          'Practice Problem Set #15'
        ]
      },
      topic2: {
        topic: 'System Design Scalability',
        testId: 'SD_2025_1007_19',
        difficulty: 'Very High',
        studentsStruggling: '85%',
        commonMistakes: [
          'Underestimating load balancing requirements',
          'Poor database sharding strategies',
          'Inadequate caching layer design'
        ],
        recommendations: [
          'Study real-world system architectures',
          'Practice capacity estimation problems',
          'Learn about different consistency models'
        ],
        resources: [
          'System Design Interview Guide',
          'Scalability Case Studies',
          'Architecture Patterns Library'
        ]
      },
      topic3: {
        topic: 'Graph Algorithms',
        testId: 'GR_2025_1006_15',
        difficulty: 'High',
        studentsStruggling: '72%',
        commonMistakes: [
          'Confusion between BFS and DFS applications',
          'Incorrect shortest path algorithm selection',
          'Poor understanding of graph representation trade-offs'
        ],
        recommendations: [
          'Practice various graph traversal problems',
          'Study shortest path algorithms (Dijkstra, Floyd-Warshall)',
          'Understand when to use adjacency list vs matrix'
        ],
        resources: [
          'Graph Theory Fundamentals',
          'Interactive Graph Visualizer',
          'Algorithm Complexity Cheat Sheet'
        ]
      }
    };

    troubleSelect.addEventListener('change', function() {
      const selectedValue = this.value;

      if (!selectedValue) {
        troubleContainer.innerHTML = `
          <div class="no-selection-message">
            <div class="message-icon">📊</div>
            <h3>Select Topic Analysis</h3>
            <p>Choose a topic from the dropdown to view detailed analysis of common student difficulties.</p>
          </div>
        `;
        return;
      }

      const data = troubleData[selectedValue];
      if (!data) return;

      troubleContainer.innerHTML = `
        <div class="trouble-topic-content">
          <div class="topic-header">
            <h3 class="topic-title">${data.topic}</h3>
            <div class="topic-meta">
              <span class="test-id">Test ID: ${data.testId}</span>
              <span class="difficulty-badge difficulty-${data.difficulty.toLowerCase().replace(' ', '-')}">${data.difficulty}</span>
              <span class="struggle-rate">${data.studentsStruggling} struggling</span>
            </div>
          </div>

          <div class="analysis-sections">
            <div class="analysis-section">
              <h4 class="section-title">❌ Common Mistakes</h4>
              <ul class="analysis-list">
                ${data.commonMistakes.map(mistake => `<li>${mistake}</li>`).join('')}
              </ul>
            </div>

            <div class="analysis-section">
              <h4 class="section-title">💡 Recommendations</h4>
              <ul class="analysis-list">
                ${data.recommendations.map(rec => `<li>${rec}</li>`).join('')}
              </ul>
            </div>

            <div class="analysis-section">
              <h4 class="section-title">📚 Learning Resources</h4>
              <ul class="analysis-list resources-list">
                ${data.resources.map(resource => `<li><a href="#" class="resource-link">${resource}</a></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;

      // Add animation
      const topicContent = troubleContainer.querySelector('.trouble-topic-content');
      if (topicContent) {
        topicContent.style.opacity = '0';
        topicContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
          topicContent.style.transition = 'all 0.5s ease-out';
          topicContent.style.opacity = '1';
          topicContent.style.transform = 'translateY(0)';
        }, 100);
      }

      console.log(`📊 Loaded trouble topic analysis: ${data.topic}`);
    });

    console.log('⚠️ Trouble topics dropdown setup complete');
  }

  // Tailored Test Button
  function setupTailoredTestButton() {
    const tailoredTestBtn = document.getElementById('attemptTailoredTest');

    if (!tailoredTestBtn) {
      console.log('⚠️ Tailored test button not found');
      return;
    }

    tailoredTestBtn.addEventListener('click', function() {
      console.log('🎯 Tailored test button clicked');

      // Visual feedback
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        if (!this.disabled) {
          this.style.transform = '';
        }
      }, 150);

      // Show confirmation dialog
      const confirmed = confirm(
        '🎯 Ready for Your Personalized Test?\n\n' +
        '📋 Tailored Assessment Details:\n' +
        '• Duration: 90 minutes\n' +
        '• Questions: 25 adaptive questions\n' +
        '• Focus: Algorithm optimization, Dynamic programming, System design\n' +
        '• Difficulty: Adjusts based on your responses\n\n' +
        '🎓 This test is specifically designed based on your performance analysis\n' +
        'and will help target your improvement areas effectively.\n\n' +
        'Click OK to start your personalized assessment!'
      );

      if (confirmed) {
        // Show loading state
        const originalContent = this.innerHTML;
        this.innerHTML = `
          <span class="btn-icon">⏳</span>
          <span class="btn-text">Preparing...</span>
        `;
        this.disabled = true;

        // Simulate loading and redirect
        setTimeout(() => {
          alert('🚀 Launching Tailored Test!\n\nYour personalized assessment is ready. This test focuses on your specific improvement areas.\n\nGood luck! 🍀');

          // In a real app, redirect to tailored test page
          console.log('🔗 Would redirect to tailored test page');

          // Reset button for demo
          this.innerHTML = originalContent;
          this.disabled = false;
        }, 2500);

        console.log('✅ User confirmed tailored test');
      } else {
        console.log('❌ User cancelled tailored test');
      }
    });

    console.log('🎯 Tailored test button setup complete');
  }

  // Live stats updates
  function setupLiveStats() {
    const stats = {
      activeUsers: { min: 1200, max: 1300, current: 1252 },
      studentsHelped: { base: 15382, increment: 0 }
    };

    // Update stats every 10 seconds
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
      if (Math.random() < 0.2) {
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

        console.log(`🎉 New placement! Total: ${newTotal.toLocaleString()}`);
      }
    }, 10000);

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

    // Animate feedback sections with stagger
    const feedbackSections = document.querySelectorAll('.feedback-section');
    feedbackSections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(40px)';

      setTimeout(() => {
        section.style.transition = 'all 0.6s ease-out';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, 400 + (index * 150));
    });

    // Animate GLA feedback items
    const glaFeedbackItems = document.querySelectorAll('.gla-feedback-card .feedback-item');
    glaFeedbackItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';

      setTimeout(() => {
        item.style.transition = 'all 0.5s ease-out';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, 800 + (index * 100));
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

    // Ctrl/Cmd + T for tailored test
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
      e.preventDefault();
      document.getElementById('attemptTailoredTest')?.click();
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

  console.log('⌨️ Keyboard shortcuts enabled (Ctrl+H: Home, Ctrl+M: Menu, Ctrl+T: Test, Esc: Close)');
});

// Add dynamic styles for detailed feedback
const feedbackStyles = document.createElement('style');
feedbackStyles.textContent = `
  .selected-feedback-content,
  .trouble-topic-content {
    width: 100%;
  }

  .detailed-feedback {
    margin: 0 !important;
  }

  .test-id-section {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border-light);
  }

  .test-id-label {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
  }

  .test-id-value {
    color: var(--color-primary-light);
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    font-family: 'Monaco', 'Menlo', monospace;
  }

  .feedback-score-section {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    padding: var(--spacing-lg);
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-border-light);
  }

  .detailed-feedback-text h4 {
    color: var(--color-white);
    font-size: var(--text-lg);
    font-weight: var(--weight-semibold);
    margin-bottom: var(--spacing-md);
  }

  .performance-breakdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-2xl);
  }

  .strengths-section,
  .improvements-section {
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    border: 1px solid var(--color-border-light);
  }

  .strengths-section h5,
  .improvements-section h5 {
    color: var(--color-white);
    font-size: var(--text-base);
    font-weight: var(--weight-semibold);
    margin-bottom: var(--spacing-lg);
  }

  .performance-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .performance-list li {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--color-border-light);
  }

  .performance-list li:last-child {
    border-bottom: none;
  }

  /* Trouble Topics Styles */
  .topic-header {
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-xl);
    border-bottom: 1px solid var(--color-border-light);
  }

  .topic-title {
    color: var(--color-white);
    font-size: var(--text-2xl);
    font-weight: var(--weight-bold);
    margin-bottom: var(--spacing-lg);
  }

  .topic-meta {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
  }

  .test-id {
    color: var(--color-primary-light);
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    font-family: 'Monaco', 'Menlo', monospace;
  }

  .difficulty-badge {
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: var(--weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .difficulty-high {
    background: rgba(245, 158, 11, 0.2);
    border: 1px solid rgba(245, 158, 11, 0.4);
    color: var(--color-warning);
  }

  .difficulty-very-high {
    background: rgba(239, 68, 68, 0.2);
    border: 1px solid rgba(239, 68, 68, 0.4);
    color: var(--color-error);
  }

  .struggle-rate {
    color: var(--color-error);
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
  }

  .analysis-sections {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
  }

  .analysis-section {
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    border: 1px solid var(--color-border-light);
  }

  .section-title {
    color: var(--color-white);
    font-size: var(--text-lg);
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
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid var(--color-border-light);
    line-height: 1.6;
  }

  .analysis-list li:last-child {
    border-bottom: none;
  }

  .resource-link {
    color: var(--color-primary-light);
    text-decoration: none;
    transition: var(--transition-fast);
  }

  .resource-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .performance-breakdown {
      grid-template-columns: 1fr;
      gap: var(--spacing-xl);
    }

    .topic-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacing-md);
    }
  }
`;
document.head.appendChild(feedbackStyles);

console.log('✅ Feedback Page JavaScript Loaded Successfully!');
console.log('💬 All interactive feedback features ready!');