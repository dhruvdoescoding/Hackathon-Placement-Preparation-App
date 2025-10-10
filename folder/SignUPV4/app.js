document.addEventListener('DOMContentLoaded', function() {
  // Navigation settings
  const navigationSettings = {
    scrollDirection: "down-for-next",
    transitionDuration: 800,
    cooldownPeriod: 600,
    scrollThreshold: 30,
    preventPageSkipping: true
  };

  const sections = [
    {id: "welcome", index: 0, title: "Welcome to the Path of Success"},
    {id: "user-choice", index: 1, title: "User Choice"},
    {id: "login", index: 2, title: "Login"},
    {id: "signup", index: 3, title: "Create Account"},
    {id: "personal-info", index: 4, title: "Personal Information"}
  ];

  const debugMode = {
    logScrollEvents: false,
    logTransitions: true,
    showCurrentSection: false
  };

  // Navigation state
  let currentSectionIndex = 0;
  let isTransitioning = false;
  let lastScrollTime = 0;
  let userPath = 'none'; // 'existing', 'new', or 'none'

  // Motivational stats for footer
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

  // Initialize the application
  init();

  function init() {
    // Set current year in footer
    setCurrentYear();

    // Setup dynamic motivational stats
    setupMotivationalStats();

    // Setup event listeners
    setupEventListeners();

    // Setup scroll-based navigation
    setupScrollNavigation();

    // Initialize form states
    initializeFormStates();

    // Setup navigation dots
    setupNavigationDots();

    // Setup user choice buttons
    setupUserChoiceButtons();

    // Set initial section - ensure we start at Welcome
    currentSectionIndex = 0;
    showSection(0, true);
    updateNavigationDots();

    console.log('Path of Success website initialized successfully! 🚀');
    console.log('Motivational stats active - inspiring students! 💪');

    // Hide scroll hint after a delay
    setTimeout(() => {
      const scrollHint = document.getElementById('scrollHint');
      if (scrollHint) {
        scrollHint.classList.add('hidden');
      }
    }, 5000);
  }

  function setupMotivationalStats() {
    // Update active users count periodically to show activity
    setInterval(() => {
      updateActiveUsersCount();
    }, 3000); // Update every 3 seconds

    // Increment students helped count occasionally for motivation
    setInterval(() => {
      updateStudentsHelpedCount();
    }, 15000); // Update every 15 seconds
  }

  function updateActiveUsersCount() {
    const activeUsersElement = document.getElementById('activeUsers');
    if (activeUsersElement) {
      // Generate a realistic fluctuation in active users
      const variation = Math.floor(Math.random() * 20) - 10; // -10 to +10
      let newCount = motivationalStats.activeUsers.current + variation;

      // Keep within realistic bounds
      newCount = Math.max(motivationalStats.activeUsers.min, 
                         Math.min(motivationalStats.activeUsers.max, newCount));

      motivationalStats.activeUsers.current = newCount;
      activeUsersElement.textContent = newCount.toLocaleString();
    }
  }

  function updateStudentsHelpedCount() {
    const studentsHelpedElement = document.getElementById('studentsHelped');
    if (studentsHelpedElement) {
      // Occasionally increment the count (motivation booster)
      if (Math.random() < 0.3) { // 30% chance every 15 seconds
        motivationalStats.studentsHelped.increment += 1;
        const newTotal = motivationalStats.studentsHelped.base + motivationalStats.studentsHelped.increment;
        studentsHelpedElement.textContent = newTotal.toLocaleString();
      }
    }
  }

  function setupUserChoiceButtons() {
    const existingUserBtn = document.getElementById('existingUserBtn');
    const newUserBtn = document.getElementById('newUserBtn');

    if (existingUserBtn) {
      existingUserBtn.addEventListener('click', () => {
        userPath = 'existing';
        console.log('User selected: Existing User - navigating to login');
        navigateToSection(2); // Go to login section
      });
    }

    if (newUserBtn) {
      newUserBtn.addEventListener('click', () => {
        userPath = 'new';
        console.log('User selected: New User - navigating to signup');
        navigateToSection(3); // Go to signup section
      });
    }

    // Switch buttons in forms
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');

    if (switchToSignup) {
      switchToSignup.addEventListener('click', () => {
        userPath = 'new';
        navigateToSection(3); // Go to signup
      });
    }

    if (switchToLogin) {
      switchToLogin.addEventListener('click', () => {
        userPath = 'existing';
        navigateToSection(2); // Go to login
      });
    }
  }

  function setupNavigationDots() {
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (!isTransitioning) {
          navigateToSection(index);
        }
      });
    });
  }

  function updateNavigationDots() {
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSectionIndex);
    });
  }

  function setupScrollNavigation() {
    // Handle wheel events (mouse scroll)
    document.addEventListener('wheel', function(e) {
      e.preventDefault();

      const now = Date.now();

      // Check if we're in cooldown period
      if (isTransitioning || (now - lastScrollTime < navigationSettings.cooldownPeriod)) {
        return;
      }

      // Check scroll threshold
      if (Math.abs(e.deltaY) < navigationSettings.scrollThreshold) {
        return;
      }

      // Determine scroll direction and navigate
      if (e.deltaY > 0) {
        // Scrolling down - go to next section
        navigateToSection(currentSectionIndex + 1);
      } else {
        // Scrolling up - go to previous section  
        navigateToSection(currentSectionIndex - 1);
      }

      lastScrollTime = now;
    }, { passive: false });

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
      touchStartY = e.touches[0].clientY;
    }, { passive: false });

    document.addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchend', function(e) {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) { // Minimum swipe distance
        const now = Date.now();

        if (isTransitioning || (now - lastScrollTime < navigationSettings.cooldownPeriod)) {
          return;
        }

        if (deltaY > 0) {
          // Swiping up - go to next section
          navigateToSection(currentSectionIndex + 1);
        } else {
          // Swiping down - go to previous section
          navigateToSection(currentSectionIndex - 1);
        }

        lastScrollTime = now;
      }
    }, { passive: false });
  }

  function navigateToSection(targetIndex) {
    if (targetIndex < 0 || targetIndex >= sections.length || targetIndex === currentSectionIndex) {
      return;
    }

    // Smart navigation: skip certain sections based on user path
    if (targetIndex === 2 && userPath === 'new') {
      // Skip login if user is new - go to signup
      targetIndex = 3;
    } else if (targetIndex === 3 && userPath === 'existing') {
      // Skip signup if user is existing - go to login  
      targetIndex = 2;
    }

    if (debugMode.logTransitions) {
      console.log('Navigating from', sections[currentSectionIndex].title, 'to', sections[targetIndex].title);
    }

    isTransitioning = true;

    // Hide current section
    showSection(currentSectionIndex, false);

    // Update current section index
    currentSectionIndex = targetIndex;

    // Show new section after a short delay
    setTimeout(() => {
      showSection(currentSectionIndex, true);
      updateNavigationDots();

      // Reset transition flag
      setTimeout(() => {
        isTransitioning = false;
      }, navigationSettings.transitionDuration);
    }, 100);
  }

  function showSection(index, show = true) {
    const sectionId = sections[index].id;
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      if (show) {
        sectionElement.classList.add('section--active');
      } else {
        sectionElement.classList.remove('section--active');
      }
    }
  }

  function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  function setupEventListeners() {
    // Header navigation buttons
    const btnNewUser = document.getElementById('btnNewUser');
    const btnLogin = document.getElementById('btnLogin');

    if (btnNewUser) {
      btnNewUser.addEventListener('click', () => {
        userPath = 'new';
        if (!isTransitioning) {
          navigateToSection(3); // Go directly to signup
        }
      });
    }

    if (btnLogin) {
      btnLogin.addEventListener('click', () => {
        userPath = 'existing';
        if (!isTransitioning) {
          navigateToSection(2); // Go directly to login
        }
      });
    }

    // Scroll CTA button in welcome section
    const scrollCta = document.querySelector('.scroll-cta');
    if (scrollCta) {
      scrollCta.addEventListener('click', function(e) {
        e.preventDefault();
        if (!isTransitioning) {
          navigateToSection(1); // Go to user choice
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      const now = Date.now();

      if (isTransitioning || (now - lastScrollTime < navigationSettings.cooldownPeriod)) {
        return;
      }

      switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Space bar
          e.preventDefault();
          navigateToSection(currentSectionIndex + 1);
          lastScrollTime = now;
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          navigateToSection(currentSectionIndex - 1);
          lastScrollTime = now;
          break;
        case 'Home':
          e.preventDefault();
          navigateToSection(0);
          lastScrollTime = now;
          break;
        case 'End':
          e.preventDefault();
          navigateToSection(sections.length - 1);
          lastScrollTime = now;
          break;
      }
    });
  }

  function initializeFormStates() {
    // Setup form validation and submission handlers
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const piForm = document.getElementById('piForm');

    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginSubmit);
      setupInputValidation(loginForm);
    }

    if (signupForm) {
      signupForm.addEventListener('submit', handleSignupSubmit);
      setupInputValidation(signupForm);
    }

    if (piForm) {
      piForm.addEventListener('submit', handlePersonalInfoSubmit);
      setupInputValidation(piForm);
    }
  }

  function setupInputValidation(form) {
    const inputs = form.querySelectorAll('.form-input');

    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateInput(this);
      });

      input.addEventListener('input', function() {
        clearError(this);
      });
    });
  }

  function validateInput(input) {
    const errorElement = document.getElementById(input.id + 'Error');
    let isValid = true;
    let errorMessage = '';

    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (input.type === 'password' && input.value && input.value.length < 6) {
      isValid = false;
      errorMessage = 'Password must be at least 6 characters';
    } else if (input.type === 'number' && input.value) {
      const value = parseFloat(input.value);
      const min = input.getAttribute('min');
      const max = input.getAttribute('max');

      if (min && value < parseFloat(min)) {
        isValid = false;
        errorMessage = `Value must be at least ${min}`;
      } else if (max && value > parseFloat(max)) {
        isValid = false;
        errorMessage = `Value must be at most ${max}`;
      }
    }

    if (errorElement) {
      errorElement.textContent = errorMessage;
    }

    input.classList.toggle('error', !isValid);
    return isValid;
  }

  function clearError(input) {
    const errorElement = document.getElementById(input.id + 'Error');
    if (errorElement) {
      errorElement.textContent = '';
    }
    input.classList.remove('error');
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate all inputs
    let isFormValid = true;
    const inputs = e.target.querySelectorAll('.form-input');
    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log('Login successful:', data);

      // Show success message
      alert(`🎉 Welcome back! Login successful for user: ${data.id}`);

      // Navigate back to welcome (logged in state)
      setTimeout(() => {
        if (!isTransitioning) {
          navigateToSection(0);
        }
      }, 1500);
    }
  }

  function handleSignupSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate all inputs
    let isFormValid = true;
    const inputs = e.target.querySelectorAll('.form-input');
    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log('Account created:', data);

      // Show success message
      alert('✅ Account created successfully! Please complete your profile...');

      // Navigate to personal info section for new users
      setTimeout(() => {
        if (!isTransitioning) {
          navigateToSection(4); // Go to personal info
        }
      }, 1000);
    }
  }

  function handlePersonalInfoSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate all required inputs
    let isFormValid = true;
    const inputs = e.target.querySelectorAll('.form-input[required]');
    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log('Registration completed:', data);

      // Show success message with motivational boost
      alert('🎉 Registration completed successfully! Welcome to the Path of Success!\n\nYou are now part of our growing community of successful students! 💪');

      // Increment students helped count immediately for instant gratification
      motivationalStats.studentsHelped.increment += 1;
      const studentsHelpedElement = document.getElementById('studentsHelped');
      if (studentsHelpedElement) {
        const newTotal = motivationalStats.studentsHelped.base + motivationalStats.studentsHelped.increment;
        studentsHelpedElement.textContent = newTotal.toLocaleString();
      }

      // Navigate back to welcome
      setTimeout(() => {
        if (!isTransitioning) {
          navigateToSection(0);
          userPath = 'none'; // Reset user path
        }
      }, 2000);
    }
  }

  // Prevent default scrolling behavior
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  // Reset scroll position
  window.scrollTo(0, 0);

  // Additional scroll prevention
  window.addEventListener('scroll', function() {
    window.scrollTo(0, 0);
  });
});