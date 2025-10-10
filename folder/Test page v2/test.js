// TEST PAGE JAVASCRIPT - FINAL VERSION
console.log('📝 Test Page JavaScript Loading...');

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 Test page initialized!');

  // Initialize all components
  initializeTestPage();

  function initializeTestPage() {
    setupLogoRedirect();
    setupNavigationMenu();
    setupTimeAndDate();
    setupTestButtons();
    setupTooltips();
    setupScheduledTests();
    setupLiveStats();

    console.log('✅ All Test page components loaded!');
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

  // Navigation menu functionality
  function setupNavigationMenu() {
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
        console.log('📂 Menu opened');
      } else {
        menuDropdown.classList.remove('show');
        menuBtn.classList.remove('active');
        console.log('📁 Menu closed');
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

    // Handle menu item clicks
    const menuItems = menuDropdown.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const pageName = this.textContent.trim();

        console.log(`🔗 Navigating to: ${pageName} -> ${href}`);

        // Allow normal navigation
      });
    });

    console.log('📋 Navigation menu setup complete');
  }

  // Real-time clock and date display
  function setupTimeAndDate() {
    function updateDateTime() {
      const now = new Date();
      const timeElement = document.getElementById('currentTime');
      const dateElement = document.getElementById('currentDate');

      if (timeElement) {
        const timeString = now.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
        timeElement.textContent = timeString;
      }

      if (dateElement) {
        const dateString = now.toLocaleDateString('en-US', { 
          month: 'short', 
          day: '2-digit', 
          year: 'numeric' 
        });
        dateElement.textContent = dateString;
      }
    }

    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute

    console.log('⏰ Real-time clock started');
  }

  // Test buttons functionality
  function setupTestButtons() {
    // Initial Test Button
    const initialTestBtn = document.getElementById('initialTestBtn');
    if (initialTestBtn) {
      initialTestBtn.addEventListener('click', function() {
        console.log('🚀 Initial test button clicked');

        // Show confirmation dialog
        const confirmed = confirm('Start Initial Assessment Test?\n\nThis test will evaluate your current skill level and determine your initial placement on the leaderboard.\n\nDuration: 60 minutes\nQuestions: 50\nTopics: Aptitude, Coding, Communication\n\nClick OK to begin or Cancel to go back.');

        if (confirmed) {
          // Show loading message
          this.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Loading...</span>';
          this.disabled = true;

          setTimeout(() => {
            alert('Initial Test page will open soon!\n\nRedirecting to test interface...');
            // window.location.href = 'initial-test.html';

            // Reset button
            this.innerHTML = '<span class="btn-icon">🚀</span><span class="btn-text">Attempt</span>';
            this.disabled = false;
          }, 2000);
        }

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (!this.disabled) {
            this.style.transform = '';
          }
        }, 150);
      });
    }

    // Ranked Test Button
    const rankedTestBtn = document.getElementById('rankedTestBtn');
    if (rankedTestBtn) {
      rankedTestBtn.addEventListener('click', function() {
        console.log('🏆 Ranked test button clicked');

        const confirmed = confirm('Start Ranked Test?\n\nThis test will affect your leaderboard ranking and provide detailed feedback.\n\nDuration: 90 minutes\nQuestions: 75\nTopics: All categories\nImpact: Leaderboard ranking\n\nClick OK to begin or Cancel to go back.');

        if (confirmed) {
          this.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Loading...</span>';
          this.disabled = true;

          setTimeout(() => {
            alert('Ranked Test page will open soon!\n\nRedirecting to competitive test interface...');
            // window.location.href = 'ranked-test.html';

            this.innerHTML = '<span class="btn-icon">🏆</span><span class="btn-text">Attempt</span>';
            this.disabled = false;
          }, 2000);
        }

        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (!this.disabled) {
            this.style.transform = '';
          }
        }, 150);
      });
    }

    // Practice Test Button
    const practiceTestBtn = document.getElementById('practiceTestBtn');
    if (practiceTestBtn) {
      practiceTestBtn.addEventListener('click', function() {
        console.log('💪 Practice test button clicked');

        const confirmed = confirm('Start Practice Test?\n\nThis is a risk-free test to help you understand exam patterns and question types.\n\nDuration: Flexible\nQuestions: 30-100 (your choice)\nTopics: Customizable\nImpact: No ranking effect\n\nClick OK to begin or Cancel to go back.');

        if (confirmed) {
          this.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Loading...</span>';
          this.disabled = true;

          setTimeout(() => {
            alert('Practice Test page will open soon!\n\nRedirecting to practice interface...');
            // window.location.href = 'practice-test.html';

            this.innerHTML = '<span class="btn-icon">💪</span><span class="btn-text">Attempt</span>';
            this.disabled = false;
          }, 2000);
        }

        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (!this.disabled) {
            this.style.transform = '';
          }
        }, 150);
      });
    }

    // Feedback Button
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
      feedbackBtn.addEventListener('click', function() {
        console.log('💬 Feedback button clicked');

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);

        // Redirect to feedback page
        console.log('🔗 Redirecting to feedback page...');
        window.location.href = 'feedback.html';
      });
    }

    console.log('📝 Test buttons setup complete');
  }

  // Tooltip functionality for hover descriptions
  function setupTooltips() {
    const tooltip = document.getElementById('tooltip');
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    if (!tooltip) {
      console.log('⚠️ Tooltip element not found');
      return;
    }

    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', function(e) {
        const tooltipText = this.getAttribute('data-tooltip');

        if (tooltipText) {
          tooltip.textContent = tooltipText;
          tooltip.classList.add('show');

          // Position tooltip
          const rect = this.getBoundingClientRect();
          const tooltipRect = tooltip.getBoundingClientRect();

          let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
          let top = rect.top - tooltipRect.height - 10;

          // Adjust if tooltip goes off screen
          if (left < 10) left = 10;
          if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
          }
          if (top < 10) {
            top = rect.bottom + 10;
          }

          tooltip.style.left = left + 'px';
          tooltip.style.top = top + 'px';

          console.log(`💬 Showing tooltip: "${tooltipText}"`);
        }
      });

      element.addEventListener('mouseleave', function() {
        tooltip.classList.remove('show');
      });
    });

    // Hide tooltip when scrolling or clicking
    document.addEventListener('scroll', function() {
      tooltip.classList.remove('show');
    });

    document.addEventListener('click', function() {
      tooltip.classList.remove('show');
    });

    console.log('💬 Tooltips setup complete');
  }

  // Scheduled tests functionality
  function setupScheduledTests() {
    const registerBtns = document.querySelectorAll('.register-btn');

    registerBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();

        const testCard = this.closest('.scheduled-test-card');
        const testTitle = testCard.querySelector('.scheduled-test-title').textContent;

        console.log(`📅 Registering for: ${testTitle}`);

        const confirmed = confirm(`Register for "${testTitle}"?\n\nYou will receive email notifications about this test including:\n• Reminder 24 hours before\n• Reminder 1 hour before\n• Test link and instructions\n\nClick OK to register or Cancel to go back.`);

        if (confirmed) {
          // Change button state
          this.textContent = 'Registered ✓';
          this.style.background = 'linear-gradient(135deg, var(--color-green-500), var(--color-teal-400))';
          this.disabled = true;

          // Show success message
          setTimeout(() => {
            alert(`✅ Successfully registered for "${testTitle}"!\n\nYou will receive confirmation email shortly with all the details.`);
          }, 500);

          // Add visual indicator to the card
          testCard.style.border = '2px solid var(--color-green-400)';
          testCard.style.background = 'rgba(34, 197, 94, 0.05)';
        }

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (!this.disabled) {
            this.style.transform = '';
          }
        }, 150);
      });
    });

    console.log('📅 Scheduled tests setup complete');
  }

  // Live stats updates
  function setupLiveStats() {
    const stats = {
      activeUsers: { min: 1200, max: 1300, current: 1252 },
      studentsPlaced: { base: 15382, increment: 0 },
      testsCount: { min: 20, max: 30, current: 24 },
      totalTests: { base: 156, current: 156 },
      activeTestTakers: { base: 2847, current: 2847 }
    };

    // Update stats every 5 seconds
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

      // Update tests count occasionally
      if (Math.random() < 0.3) {
        const testsCountElement = document.getElementById('testsCount');
        if (testsCountElement) {
          const variation = Math.floor(Math.random() * 3) - 1;
          let newTestCount = stats.testsCount.current + variation;
          newTestCount = Math.max(stats.testsCount.min, Math.min(stats.testsCount.max, newTestCount));
          stats.testsCount.current = newTestCount;
          testsCountElement.textContent = newTestCount;
        }
      }

      // Update students placed occasionally (simulate new placements)
      if (Math.random() < 0.1) { // 10% chance every 5 seconds
        stats.studentsPlaced.increment += 1;
        const newTotal = stats.studentsPlaced.base + stats.studentsPlaced.increment;

        const placedElements = [
          document.getElementById('studentsPlaced'),
          document.getElementById('studentsPlacedFooter')
        ];

        placedElements.forEach(el => {
          if (el) {
            el.textContent = newTotal.toLocaleString();

            // Add celebration animation for new placement
            el.style.color = '#22c55e';
            el.style.fontWeight = '700';
            setTimeout(() => {
              el.style.color = '';
              el.style.fontWeight = '';
            }, 2000);
          }
        });

        console.log(`🎉 New placement! Total: ${newTotal.toLocaleString()}`);
      }

      // Update other stats occasionally
      if (Math.random() < 0.15) {
        const totalTestsElement = document.getElementById('totalTests');
        if (totalTestsElement) {
          stats.totalTests.current += Math.floor(Math.random() * 2);
          totalTestsElement.textContent = stats.totalTests.current;
        }

        const activeTestTakersElement = document.getElementById('activeTestTakers');
        if (activeTestTakersElement) {
          const variation = Math.floor(Math.random() * 10) - 5;
          stats.activeTestTakers.current += variation;
          activeTestTakersElement.textContent = stats.activeTestTakers.current.toLocaleString();
        }
      }
    }, 5000);

    console.log('📊 Live stats updates enabled');
  }

  // Add keyboard shortcuts for better accessibility
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

    // Number keys for quick test access
    if (e.key === '1') {
      document.getElementById('initialTestBtn')?.click();
    } else if (e.key === '2') {
      document.getElementById('rankedTestBtn')?.click();
    } else if (e.key === '3') {
      document.getElementById('feedbackBtn')?.click();
    } else if (e.key === '4') {
      document.getElementById('practiceTestBtn')?.click();
    }

    // Escape key to close menu and tooltips
    if (e.key === 'Escape') {
      const menuDropdown = document.getElementById('menuDropdown');
      const menuBtn = document.getElementById('menuBtn');
      const tooltip = document.getElementById('tooltip');

      if (menuDropdown && menuDropdown.classList.contains('show')) {
        menuDropdown.classList.remove('show');
        menuBtn.classList.remove('active');
        console.log('📁 Menu closed (Escape key)');
      }

      if (tooltip) {
        tooltip.classList.remove('show');
      }
    }
  });

  console.log('⌨️ Keyboard shortcuts enabled');

  // Add smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading animations on page load
  window.addEventListener('load', function() {
    console.log('🎨 Adding entrance animations');

    // Animate hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.style.opacity = '0';
      heroSection.style.transform = 'translateY(30px)';

      setTimeout(() => {
        heroSection.style.transition = 'all 0.8s ease-out';
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
      }, 200);
    }

    // Animate test cards
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 400 + (index * 150));
    });

    // Animate scheduled test cards
    const scheduledCards = document.querySelectorAll('.scheduled-test-card');
    scheduledCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
      }, 800 + (index * 100));
    });

    // Animate stats cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.9)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 1200 + (index * 100));
    });
  });
});

// Utility function for number animation
function animateNumber(element, targetNumber, duration = 1500) {
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

console.log('✅ Test Page JavaScript Loaded Successfully!');