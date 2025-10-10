// DASHBOARD JAVASCRIPT - AESTHETICALLY IMPROVED VERSION
console.log('🎯 Enhanced Dashboard JavaScript Loading...');

document.addEventListener('DOMContentLoaded', function() {
  console.log('📊 Enhanced Dashboard initialized!');

  // Initialize all dashboard components
  initializeEnhancedDashboard();

  function initializeEnhancedDashboard() {
    setupLogoRedirect();
    setupOptionsMenu();
    setupTimeDisplay();
    setupActivityCalendar();
    setupProgressBars();
    setupLiveStats();
    setupTakeInitialTestButton();
    setupEntranceAnimations();

    console.log('✅ All enhanced dashboard components loaded!');
  }

  // Logo click to redirect to dashboard
  function setupLogoRedirect() {
    const logoClickable = document.getElementById('logoHome');
    if (logoClickable) {
      logoClickable.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🏠 Dashboard logo clicked - refreshing page');
        window.location.reload();
      });
      logoClickable.style.cursor = 'pointer';
    }
  }

  // Enhanced options menu functionality
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

    console.log('📋 Enhanced options menu setup complete');
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

    console.log('⏰ Enhanced real-time clock started');
  }

  // Enhanced activity calendar generation
  function setupActivityCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    if (!calendarGrid) {
      console.log('⚠️ Calendar grid not found');
      return;
    }

    // Clear existing content
    calendarGrid.innerHTML = '';

    // Generate 28 days (4 weeks × 7 days) for cleaner mobile layout
    const totalDays = 28;
    const activityLevels = ['no-activity', 'low-activity', 'medium-activity', 'high-activity'];

    for (let i = 0; i < totalDays; i++) {
      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day';

      // Random activity level with weighted distribution
      const rand = Math.random();
      let activityLevel;
      if (rand < 0.3) activityLevel = 'no-activity';
      else if (rand < 0.6) activityLevel = 'low-activity';
      else if (rand < 0.85) activityLevel = 'medium-activity';
      else activityLevel = 'high-activity';

      dayElement.classList.add(activityLevel);

      // Add tooltip with date info
      const date = new Date();
      date.setDate(date.getDate() - (totalDays - i));
      const dateString = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
      dayElement.title = `${dateString} - ${activityLevel.replace('-', ' ')}`;

      // Add click handler for activity details
      dayElement.addEventListener('click', function() {
        const activity = activityLevel.replace('-', ' ');
        alert(`📅 ${dateString}\n\nActivity Level: ${activity.charAt(0).toUpperCase() + activity.slice(1)}\n\nDetails coming soon in future updates!`);
      });

      calendarGrid.appendChild(dayElement);
    }

    console.log('📅 Enhanced activity calendar generated');
  }

  // Enhanced progress bars with data attributes
  function setupProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');

    // Reset widths and get target widths from data attributes
    progressFills.forEach(fill => {
      const targetWidth = fill.getAttribute('data-width') || '0%';
      fill.style.width = '0%';
      fill.dataset.targetWidth = targetWidth;
    });

    // Animate to target width with staggered timing
    setTimeout(() => {
      progressFills.forEach((fill, index) => {
        setTimeout(() => {
          fill.style.width = fill.dataset.targetWidth;

          // Add completion celebration for high percentages
          const percentage = parseInt(fill.dataset.targetWidth);
          if (percentage >= 80) {
            setTimeout(() => {
              fill.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.5)';
              setTimeout(() => {
                fill.style.boxShadow = '';
              }, 1000);
            }, 1200);
          }
        }, index * 300);
      });
    }, 800);

    console.log('📊 Enhanced progress bar animations setup');
  }

  // Enhanced live stats updates
  function setupLiveStats() {
    const stats = {
      activeUsers: { min: 1200, max: 1350, current: 1252 },
      studentsHelped: { base: 15382, increment: 0 }
    };

    // Update stats every 8 seconds
    setInterval(() => {
      // Update active users count
      const activeUsersElements = [
        document.getElementById('activeUsers'),
        document.getElementById('currentlyStudying')
      ];

      const variation = Math.floor(Math.random() * 25) - 12;
      let newCount = stats.activeUsers.current + variation;
      newCount = Math.max(stats.activeUsers.min, Math.min(stats.activeUsers.max, newCount));
      stats.activeUsers.current = newCount;

      activeUsersElements.forEach(el => {
        if (el) {
          animateNumber(el, newCount);
        }
      });

      // Update students helped occasionally
      if (Math.random() < 0.25) {
        stats.studentsHelped.increment += Math.floor(Math.random() * 3) + 1;
        const newTotal = stats.studentsHelped.base + stats.studentsHelped.increment;

        const studentsHelpedElements = [
          document.getElementById('studentsHelped'),
          document.getElementById('studentsPlacedFooter')
        ];

        studentsHelpedElements.forEach(el => {
          if (el) {
            animateNumber(el, newTotal);

            // Celebration effect
            el.style.color = '#22c55e';
            el.style.transform = 'scale(1.1)';
            setTimeout(() => {
              el.style.color = '';
              el.style.transform = '';
            }, 2000);
          }
        });

        console.log(`🎉 New placement! Total: ${newTotal.toLocaleString()}`);
      }
    }, 8000);

    console.log('📊 Enhanced live stats updates enabled');
  }

  // Enhanced Take Initial Test Button functionality
  function setupTakeInitialTestButton() {
    const takeInitialTestBtn = document.getElementById('takeInitialTestBtn');

    if (!takeInitialTestBtn) {
      console.log('⚠️ Take Initial Test button not found');
      return;
    }

    takeInitialTestBtn.addEventListener('click', function() {
      console.log('🚀 Enhanced Take Initial Test button clicked');

      // Enhanced visual feedback
      this.style.transform = 'scale(0.98)';
      this.style.boxShadow = '0 2px 15px rgba(16, 185, 129, 0.4)';

      setTimeout(() => {
        if (!this.disabled) {
          this.style.transform = '';
          this.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.25)';
        }
      }, 200);

      // Enhanced confirmation dialog
      const confirmed = confirm(
        '🚀 Ready to Begin Your Learning Journey?\n\n' +
        '📋 Initial Assessment Overview:\n' +
        '• Duration: 45-60 minutes\n' +
        '• Questions: 40-50 adaptive questions\n' +
        '• Topics: Aptitude, Communication, Coding Basics\n' +
        '• Format: Multiple choice & short answers\n\n' +
        '🎯 What You\'ll Get:\n' +
        '• Personalized skill assessment\n' +
        '• Custom learning recommendations\n' +
        '• Baseline for progress tracking\n' +
        '• Targeted practice suggestions\n\n' +
        '💡 Tips for Success:\n' +
        '• Take your time, no rush\n' +
        '• Answer honestly for accurate results\n' +
        '• Use a quiet environment\n\n' +
        'Click OK to start your assessment journey!'
      );

      if (confirmed) {
        // Enhanced loading state
        const originalContent = this.innerHTML;
        this.innerHTML = `
          <span class="btn-icon">⏳</span>
          <span class="btn-text">Preparing Test...</span>
        `;
        this.disabled = true;
        this.style.background = 'linear-gradient(135deg, #059669, #0891b2)';
        this.style.cursor = 'not-allowed';

        // Simulate loading phases
        let loadingPhase = 0;
        const loadingMessages = [
          'Preparing Test...',
          'Loading Questions...',
          'Setting Up Environment...',
          'Almost Ready...'
        ];

        const loadingInterval = setInterval(() => {
          if (loadingPhase < loadingMessages.length) {
            this.querySelector('.btn-text').textContent = loadingMessages[loadingPhase];
            loadingPhase++;
          }
        }, 600);

        setTimeout(() => {
          clearInterval(loadingInterval);
          console.log('🔗 Redirecting to test page...');

          // Final message before redirect
          alert('🎯 Launching Initial Assessment!\n\nYou\'re all set! Take your time and do your best.\n\nGood luck! 🍀');

          // Redirect to test page
          window.location.href = 'test.html';
        }, 2500);

        console.log('✅ User confirmed enhanced initial test - redirecting...');
      } else {
        console.log('❌ User cancelled initial test');

        // Enhanced encouragement message
        setTimeout(() => {
          alert('💪 No Problem!\n\nTake your time to prepare. The assessment will be here whenever you\'re ready.\n\n💡 Preparation Tips:\n• Review basic math and logic\n• Practice communication skills\n• Brush up on coding fundamentals\n\nWe\'re here to help you succeed! 🌟');
        }, 100);
      }
    });

    // Add periodic glow animation to draw attention
    setInterval(() => {
      if (!takeInitialTestBtn.disabled) {
        takeInitialTestBtn.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.4)';
        setTimeout(() => {
          takeInitialTestBtn.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.25)';
        }, 1500);
      }
    }, 10000);

    console.log('🚀 Enhanced Take Initial Test button setup complete');
  }

  // Enhanced entrance animations
  function setupEntranceAnimations() {
    // Animate welcome card
    const welcomeCard = document.querySelector('.welcome-card');
    if (welcomeCard) {
      welcomeCard.style.opacity = '0';
      welcomeCard.style.transform = 'translateY(30px) scale(0.98)';

      setTimeout(() => {
        welcomeCard.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        welcomeCard.style.opacity = '1';
        welcomeCard.style.transform = 'translateY(0) scale(1)';
      }, 300);
    }

    // Animate progress cards with stagger
    const progressCards = document.querySelectorAll('.progress-card');
    progressCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-30px)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
      }, 600 + (index * 200));
    });

    // Animate activity card
    const activityCard = document.querySelector('.activity-card');
    if (activityCard) {
      activityCard.style.opacity = '0';
      activityCard.style.transform = 'translateX(30px)';

      setTimeout(() => {
        activityCard.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        activityCard.style.opacity = '1';
        activityCard.style.transform = 'translateX(0)';
      }, 800);
    }

    // Special animation for Take Initial Test button
    const takeInitialTestBtn = document.getElementById('takeInitialTestBtn');
    if (takeInitialTestBtn) {
      takeInitialTestBtn.style.opacity = '0';
      takeInitialTestBtn.style.transform = 'scale(0.9) translateY(10px)';

      setTimeout(() => {
        takeInitialTestBtn.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        takeInitialTestBtn.style.opacity = '1';
        takeInitialTestBtn.style.transform = 'scale(1) translateY(0)';

        // Add subtle bounce after animation
        setTimeout(() => {
          takeInitialTestBtn.style.animation = 'subtleBounce 0.6s ease-out';
        }, 800);
      }, 1200);
    }

    console.log('🎨 Enhanced entrance animations setup');
  }

  // Enhanced keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + T to trigger Take Initial Test
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
      e.preventDefault();
      const takeInitialTestBtn = document.getElementById('takeInitialTestBtn');
      if (takeInitialTestBtn && !takeInitialTestBtn.disabled) {
        takeInitialTestBtn.click();
      }
    }

    // Ctrl/Cmd + M to toggle options menu
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      document.getElementById('menuBtn')?.click();
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

  console.log('⌨️ Enhanced keyboard shortcuts enabled');
});

// Enhanced utility function for smooth number animation
function animateNumber(element, targetNumber, duration = 1200) {
  if (!element) return;

  const startNumber = parseInt(element.textContent.replace(/[^0-9]/g, '')) || 0;
  const increment = (targetNumber - startNumber) / (duration / 16);
  let current = startNumber;

  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= targetNumber) || (increment < 0 && current <= targetNumber)) {
      element.textContent = targetNumber.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Add enhanced CSS animations
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
  @keyframes subtleBounce {
    0%, 100% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.02) translateY(-2px); }
  }

  @keyframes gentleGlow {
    0%, 100% { box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25); }
    50% { box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4); }
  }

  .take-initial-test-btn:not(:disabled) {
    animation: gentleGlow 4s ease-in-out infinite;
  }
`;
document.head.appendChild(enhancedStyle);

console.log('✅ Enhanced Dashboard JavaScript Loaded Successfully!');
console.log('🎨 Modern animations and improved UX ready!');
console.log('🚀 Take Initial Test button with enhanced interactions!');