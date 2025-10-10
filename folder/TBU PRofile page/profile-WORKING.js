document.addEventListener('DOMContentLoaded', function() {
  console.log('Profile page with WORKING navigation initialized! 🚀');

  // Initialize all profile components
  initializeProfilePage();

  function initializeProfilePage() {
    setupLogoRedirect();
    setupNavigationDropdown(); // COMPLETELY FIXED dropdown functionality
    setupMotivationalStats();
    setupProgressBars();
    setupProfilePicture();
    loadUserProfileData();
    setupInteractiveElements();

    console.log('All profile components loaded with WORKING navigation! 👤');
  }

  // Logo click to redirect to homepage
  function setupLogoRedirect() {
    const logoClickable = document.getElementById('logoHome');
    if (logoClickable) {
      logoClickable.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Redirecting to homepage...');
        // Real navigation - replace with your actual homepage file
        window.location.href = 'index.html';
      });

      logoClickable.style.cursor = 'pointer';
    }
  }

  // COMPLETELY FIXED: Navigation dropdown functionality
  function setupNavigationDropdown() {
    const optionsBtn = document.getElementById('optionsBtn');
    const dropdown = document.getElementById('optionsDropdown');

    if (!optionsBtn) {
      console.error('Options button not found!');
      return;
    }

    if (!dropdown) {
      console.error('Dropdown menu not found!');
      return;
    }

    console.log('✅ Navigation elements found, setting up dropdown...');

    let isDropdownOpen = false;

    // FIXED: Toggle dropdown on button click
    optionsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('🖱️ Options button clicked!');

      if (isDropdownOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    // FIXED: Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!optionsBtn.contains(e.target) && !dropdown.contains(e.target)) {
        if (isDropdownOpen) {
          console.log('🖱️ Clicked outside - closing dropdown');
          closeDropdown();
        }
      }
    });

    // FIXED: Handle dropdown item clicks with REAL navigation
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    console.log(`📋 Found ${dropdownItems.length} dropdown items`);

    dropdownItems.forEach((item, index) => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const href = this.getAttribute('href');
        const pageName = this.textContent.trim();

        console.log(`🔗 Clicked: ${pageName} -> ${href}`);

        // Close dropdown immediately
        closeDropdown();

        // Navigate to the page after short delay
        setTimeout(() => {
          navigateToPage(href, pageName);
        }, 100);
      });

      // Add hover effects
      item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
      });

      item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
          this.style.backgroundColor = 'transparent';
        }
      });
    });

    // FIXED: Keyboard support
    optionsBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });

    // Global escape key handler
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isDropdownOpen) {
        closeDropdown();
        optionsBtn.focus();
      }
    });

    function openDropdown() {
      console.log('📂 Opening dropdown...');
      dropdown.classList.add('show');
      optionsBtn.classList.add('active');
      optionsBtn.setAttribute('aria-expanded', 'true');
      isDropdownOpen = true;

      // Focus first dropdown item
      const firstItem = dropdown.querySelector('.dropdown-item');
      if (firstItem) {
        setTimeout(() => firstItem.focus(), 50);
      }
    }

    function closeDropdown() {
      console.log('📁 Closing dropdown...');
      dropdown.classList.remove('show');
      optionsBtn.classList.remove('active');
      optionsBtn.setAttribute('aria-expanded', 'false');
      isDropdownOpen = false;
    }

    // Navigation function with real page redirects
    function navigateToPage(href, pageName) {
      if (!href) {
        console.error('No href provided for navigation');
        return;
      }

      console.log(`🚀 Navigating to: ${pageName} (${href})`);

      // For demo purposes, show alert first, then navigate
      // In production, remove the alert and just navigate
      const shouldNavigate = confirm(`Navigate to ${pageName}?\n\nPage: ${href}\n\nClick OK to navigate or Cancel to stay.`);

      if (shouldNavigate) {
        // Check if current page to avoid reload
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === href) {
          console.log('Already on this page');
          return;
        }

        // Navigate to the page
        window.location.href = href;
      }
    }

    console.log('✅ Navigation dropdown setup complete!');
  }

  // Motivational stats with live updates
  function setupMotivationalStats() {
    const motivationalStats = {
      activeUsers: {
        min: 1200,
        max: 1500,
        current: 1247
      },
      studentsHelped: {
        base: 15382,
        increment: 0
      }
    };

    // Update active users count periodically
    setInterval(() => {
      updateActiveUsersCount();
    }, 3000);

    // Update students helped count occasionally
    setInterval(() => {
      updateStudentsHelpedCount();
    }, 15000);

    function updateActiveUsersCount() {
      const activeUsersElement = document.getElementById('activeUsers');
      const currentlyStudyingElement = document.getElementById('currentlyStudying');

      if (activeUsersElement || currentlyStudyingElement) {
        const variation = Math.floor(Math.random() * 20) - 10;
        let newCount = motivationalStats.activeUsers.current + variation;

        newCount = Math.max(motivationalStats.activeUsers.min, 
                           Math.min(motivationalStats.activeUsers.max, newCount));

        motivationalStats.activeUsers.current = newCount;

        if (activeUsersElement) {
          activeUsersElement.textContent = newCount.toLocaleString();
        }
        if (currentlyStudyingElement) {
          currentlyStudyingElement.textContent = newCount.toLocaleString();
        }
      }
    }

    function updateStudentsHelpedCount() {
      const studentsHelpedElement = document.getElementById('studentsHelped');
      const studentsPlacedElement = document.getElementById('studentsPlaced');

      if ((studentsHelpedElement || studentsPlacedElement) && Math.random() < 0.3) {
        motivationalStats.studentsHelped.increment += 1;
        const newTotal = motivationalStats.studentsHelped.base + motivationalStats.studentsHelped.increment;

        if (studentsHelpedElement) {
          studentsHelpedElement.textContent = newTotal.toLocaleString();
        }
        if (studentsPlacedElement) {
          studentsPlacedElement.textContent = newTotal.toLocaleString();
        }
      }
    }
  }

  // Animated progress bars
  function setupProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');

    // Animate progress bars on load
    setTimeout(() => {
      progressFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        if (progress) {
          fill.style.width = progress + '%';
        }
      });
    }, 500);

    // Progress bar hover effects
    const progressCards = document.querySelectorAll('.progress-card');
    progressCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const fill = this.querySelector('.progress-fill');
        if (fill) {
          const currentWidth = parseInt(fill.getAttribute('data-progress') || '0');
          fill.style.width = Math.min(currentWidth + 2, 100) + '%';
        }
      });

      card.addEventListener('mouseleave', function() {
        const fill = this.querySelector('.progress-fill');
        if (fill) {
          const originalWidth = fill.getAttribute('data-progress');
          if (originalWidth) {
            fill.style.width = originalWidth + '%';
          }
        }
      });
    });

    console.log('📊 Progress bars animated');
  }

  // Profile picture upload functionality
  function setupProfilePicture() {
    const uploadBtn = document.querySelector('.image-upload-btn');
    if (uploadBtn) {
      uploadBtn.addEventListener('click', function() {
        console.log('Profile picture upload clicked');

        // Simulate a picture change for demo
        const profilePic = document.getElementById('userProfilePic');
        if (profilePic) {
          const colors = ['4f46e5', '7c3aed', '059669', 'dc2626', 'ea580c'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          profilePic.src = `https://via.placeholder.com/150/${randomColor}/ffffff?text=👤`;
        }

        showNotification('Profile picture updated!', 'success');
      });
    }
  }

  // Load user profile data
  function loadUserProfileData() {
    const userData = {
      name: 'Chhota Bheem',
      username: '@chhotabheem',
      universityRoll: 'CS2023001',
      githubId: 'dholakpur-laddoo-devourver',
      codeforcesRating: 1420,
      leetcodeRating: 1850,
      skills: {
        communication: 72,
        aptitude: 85,
        coding: 68
      },
      stats: {
        sessions: 47,
        tests: 23,
        rank: 42,
        streak: 7
      }
    };

    // Update profile information
    updateProfileInfo(userData);
    updatePlatformRatings(userData);
    updateSkillProgress(userData.skills);
    updateAchievementStats(userData.stats);

    console.log('👤 User profile data loaded:', userData.name);
  }

  function updateProfileInfo(userData) {
    const elements = {
      userName: document.getElementById('userName'),
      userUsername: document.getElementById('userUsername'),
      universityRoll: document.getElementById('universityRoll'),
      githubId: document.getElementById('githubId')
    };

    if (elements.userName) elements.userName.textContent = userData.name;
    if (elements.userUsername) elements.userUsername.textContent = userData.username;
    if (elements.universityRoll) elements.universityRoll.textContent = userData.universityRoll;
    if (elements.githubId) elements.githubId.textContent = userData.githubId;
  }

  function updatePlatformRatings(userData) {
    // Update Codeforces rating
    const codeforcesRating = document.getElementById('codeforcesRating');
    const codeforcesRank = document.getElementById('codeforcesRank');
    if (codeforcesRating) {
      animateNumber(codeforcesRating, userData.codeforcesRating);
    }
    if (codeforcesRank) {
      codeforcesRank.textContent = getCodeforcesRank(userData.codeforcesRating);
    }

    // Update LeetCode rating
    const leetcodeRating = document.getElementById('leetcodeRating');
    const leetcodeRank = document.getElementById('leetcodeRank');
    if (leetcodeRating) {
      animateNumber(leetcodeRating, userData.leetcodeRating);
    }
    if (leetcodeRank) {
      leetcodeRank.textContent = getLeetCodeRank(userData.leetcodeRating);
    }
  }

  function updateSkillProgress(skills) {
    Object.keys(skills).forEach(skill => {
      const progress = skills[skill];
      const progressElement = document.querySelector(`.progress-card.${skill} .progress-fill`);
      const percentageElement = document.querySelector(`.progress-card.${skill} .progress-percentage`);

      if (progressElement) {
        progressElement.setAttribute('data-progress', progress);
      }

      if (percentageElement) {
        percentageElement.textContent = progress + '%';
      }
    });
  }

  function updateAchievementStats(stats) {
    const elements = {
      totalSessions: document.getElementById('totalSessions'),
      testsCompleted: document.getElementById('testsCompleted'),
      currentRank: document.getElementById('currentRank'),
      streakCount: document.getElementById('streakCount')
    };

    if (elements.totalSessions) {
      animateNumber(elements.totalSessions, stats.sessions);
    }
    if (elements.testsCompleted) {
      animateNumber(elements.testsCompleted, stats.tests);
    }
    if (elements.currentRank) {
      elements.currentRank.textContent = '#' + stats.rank;
    }
    if (elements.streakCount) {
      animateNumber(elements.streakCount, stats.streak);
    }
  }

  // Helper functions
  function getCodeforcesRank(rating) {
    if (rating < 1200) return 'Newbie';
    if (rating < 1400) return 'Pupil';
    if (rating < 1600) return 'Specialist';
    if (rating < 1900) return 'Expert';
    if (rating < 2100) return 'Candidate Master';
    if (rating < 2300) return 'Master';
    if (rating < 2400) return 'International Master';
    return 'Grandmaster';
  }

  function getLeetCodeRank(rating) {
    if (rating < 1500) return 'Guardian';
    if (rating < 1800) return 'Knight';
    if (rating < 2100) return 'Guardian';
    return 'Knight';
  }

  function animateNumber(element, targetNumber, duration = 1500) {
    if (!element) return;

    const startNumber = 0;
    const increment = targetNumber / (duration / 16);
    let current = startNumber;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        element.textContent = targetNumber;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Interactive elements
  function setupInteractiveElements() {
    // Platform card interactions
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards.forEach(card => {
      card.addEventListener('click', function() {
        const platform = this.classList.contains('codeforces') ? 'Codeforces' : 'LeetCode';
        console.log(`Clicked ${platform} card`);
        alert(`🔗 ${platform} Profile\n\nThis would open your ${platform} profile!`);
      });
    });

    // Stat card interactions
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
      card.addEventListener('click', function() {
        const statLabel = this.querySelector('.stat-label')?.textContent || 'Stat';
        console.log(`Clicked ${statLabel} stat`);

        // Add pulse animation
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      });
    });

    // Activity item interactions
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
      item.addEventListener('click', function() {
        const title = this.querySelector('.activity-title')?.textContent || 'Activity';
        console.log(`Clicked activity: ${title}`);
        alert(`📝 Activity Details\n\n${title}\n\nThis would show detailed information!`);
      });
    });

    console.log('🎯 Interactive elements configured');
  }

  // Set current year in footer
  function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Initialize year
  setCurrentYear();

  // Enhanced keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + H to go home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      document.getElementById('logoHome')?.click();
    }

    // Ctrl/Cmd + M to toggle navigation menu
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      document.getElementById('optionsBtn')?.click();
    }

    // Ctrl/Cmd + U to change profile picture
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
      document.querySelector('.image-upload-btn')?.click();
    }
  });

  console.log('⌨️ Keyboard shortcuts enabled (Ctrl+H: Home, Ctrl+M: Menu, Ctrl+U: Upload)');
});

// Utility functions
function showNotification(message, type = 'info') {
  console.log(`${type.toUpperCase()}: ${message}`);
  // Simple notification simulation
  if (typeof alert !== 'undefined') {
    alert(message);
  }
}

// Debug function to test dropdown
function testDropdown() {
  console.log('🧪 Testing dropdown functionality...');
  const optionsBtn = document.getElementById('optionsBtn');
  const dropdown = document.getElementById('optionsDropdown');

  console.log('Options button:', optionsBtn);
  console.log('Dropdown:', dropdown);

  if (optionsBtn && dropdown) {
    console.log('✅ Elements found - dropdown should work!');
  } else {
    console.log('❌ Elements missing - dropdown will not work!');
  }
}

// Call test function after page loads
setTimeout(testDropdown, 1000);