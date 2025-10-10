document.addEventListener('DOMContentLoaded', function() {
  console.log('About page with improved navigation initialized! 🚀');

  // Initialize all components
  initializeAboutPage();

  function initializeAboutPage() {
    setupLogoRedirect();
    setupNavigationDropdown();
    setupMotivationalStats();
    setupStatCounters();
    setupScrollAnimations();
    setupInteractiveElements();

    console.log('All about page components loaded with fixed navigation! 🎯');
  }

  // Logo click to redirect to main page
  function setupLogoRedirect() {
    const logoClickable = document.getElementById('logoHome');
    if (logoClickable) {
      logoClickable.addEventListener('click', function() {
        console.log('Redirecting to main page...');
        // In real implementation, redirect to main page
        alert('🏠 Redirecting to homepage...\n(In real app: window.location.href = "index.html")');
        // window.location.href = 'index.html';
      });

      logoClickable.style.cursor = 'pointer';
    }
  }

  // FIXED: Improved Navigation dropdown functionality
  function setupNavigationDropdown() {
    const optionsBtn = document.getElementById('optionsBtn');
    const dropdown = document.getElementById('optionsDropdown');

    if (!optionsBtn || !dropdown) {
      console.error('Navigation elements not found');
      return;
    }

    console.log('Setting up navigation dropdown...');

    // Toggle dropdown on button click
    optionsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Options button clicked');
      toggleDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!optionsBtn.contains(e.target) && !dropdown.contains(e.target)) {
        closeDropdown();
      }
    });

    // Handle dropdown item clicks
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    console.log(`Found ${dropdownItems.length} dropdown items`);

    dropdownItems.forEach((item, index) => {
      item.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const pageName = this.textContent.trim();

        console.log(`Clicked navigation item ${index + 1}: ${pageName} (${href})`);

        // Prevent navigation for demo purposes, show alert instead
        if (href && !href.includes('about.html')) {
          e.preventDefault();
          alert(`🔗 Navigating to ${pageName}\n\nPage: ${href}\n\n(In real app: window.location.href = "${href}")`);
          // window.location.href = href;
        }

        closeDropdown();
      });
    });

    // Keyboard support
    optionsBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown();
      } else if (e.key === 'Escape') {
        closeDropdown();
      }
    });

    // Arrow key navigation within dropdown
    dropdown.addEventListener('keydown', function(e) {
      const items = dropdown.querySelectorAll('.dropdown-item');
      const currentIndex = Array.from(items).indexOf(document.activeElement);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prevIndex].focus();
      } else if (e.key === 'Escape') {
        closeDropdown();
        optionsBtn.focus();
      }
    });

    console.log('📋 Navigation dropdown configured successfully');

    function toggleDropdown() {
      const isOpen = dropdown.classList.contains('show');
      console.log(`Toggling dropdown. Currently open: ${isOpen}`);

      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    }

    function openDropdown() {
      console.log('Opening dropdown');
      dropdown.classList.add('show');
      optionsBtn.classList.add('active');
      optionsBtn.setAttribute('aria-expanded', 'true');

      // Focus first item for keyboard navigation
      const firstItem = dropdown.querySelector('.dropdown-item');
      if (firstItem) {
        setTimeout(() => firstItem.focus(), 100);
      }
    }

    function closeDropdown() {
      console.log('Closing dropdown');
      dropdown.classList.remove('show');
      optionsBtn.classList.remove('active');
      optionsBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // Motivational stats with live updates (same as main site)
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
      if (activeUsersElement) {
        const variation = Math.floor(Math.random() * 20) - 10;
        let newCount = motivationalStats.activeUsers.current + variation;

        newCount = Math.max(motivationalStats.activeUsers.min, 
                           Math.min(motivationalStats.activeUsers.max, newCount));

        motivationalStats.activeUsers.current = newCount;
        activeUsersElement.textContent = newCount.toLocaleString();
      }
    }

    function updateStudentsHelpedCount() {
      const studentsHelpedElement = document.getElementById('studentsHelped');
      if (studentsHelpedElement) {
        if (Math.random() < 0.3) {
          motivationalStats.studentsHelped.increment += 1;
          const newTotal = motivationalStats.studentsHelped.base + motivationalStats.studentsHelped.increment;
          studentsHelpedElement.textContent = newTotal.toLocaleString();
        }
      }
    }
  }

  // Animated stat counters
  function setupStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element, target, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString();
        }
      }, 16);
    };

    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const target = parseInt(element.getAttribute('data-target'));
          animateCounter(element, target);
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
      observer.observe(stat);
    });

    console.log('📊 Stat counters set up');
  }

  // Scroll-triggered animations
  function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-card, .feature-card, .process-step, .stat-card, .vision-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(element);
    });

    console.log('✨ Scroll animations initialized');
  }

  // Interactive element effects
  function setupInteractiveElements() {
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Process step interactions
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
      step.addEventListener('click', function() {
        console.log(`Clicked process step ${index + 1}`);
        // Add a subtle pulse effect
        this.style.animation = 'pulse 0.6s ease-in-out';
        setTimeout(() => {
          this.style.animation = '';
        }, 600);
      });
    });

    // AI flow diagram interactions
    const flowNodes = document.querySelectorAll('.flow-node');
    flowNodes.forEach((node, index) => {
      node.addEventListener('click', function() {
        console.log(`Clicked flow node: ${this.textContent.trim()}`);
        // Highlight the node temporarily
        const originalBorderColor = this.style.borderColor;
        this.style.borderColor = '#667eea';
        this.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';

        setTimeout(() => {
          this.style.borderColor = originalBorderColor;
          this.style.boxShadow = '';
        }, 1500);
      });
    });

    // Database feature interactions
    const dbFeatures = document.querySelectorAll('.db-feature');
    dbFeatures.forEach(feature => {
      feature.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
        this.style.transform = 'scale(1.02)';
      });

      feature.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.05)';
        this.style.transform = 'scale(1)';
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

  // Smooth scrolling for any anchor links
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

  // Enhanced keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + H to go home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      document.getElementById('logoHome').click();
    }

    // Ctrl/Cmd + M to open/close navigation menu
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      document.getElementById('optionsBtn').click();
    }

    // Escape to close dropdown or scroll to top
    if (e.key === 'Escape') {
      const dropdown = document.getElementById('optionsDropdown');
      if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        document.getElementById('optionsBtn').classList.remove('active');
        document.getElementById('optionsBtn').focus();
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  });

  console.log('⌨️ Keyboard shortcuts enabled (Ctrl+H: Home, Ctrl+M: Menu, Esc: Close/Top)');

  // Add some dynamic content updates
  setTimeout(() => {
    // Add subtle animations to tech features
    const techFeatures = document.querySelectorAll('.tech-feature');
    techFeatures.forEach((feature, index) => {
      setTimeout(() => {
        feature.style.opacity = '1';
        feature.style.transform = 'translateX(0)';
      }, index * 200);

      feature.style.opacity = '0.8';
      feature.style.transform = 'translateX(-20px)';
      feature.style.transition = 'all 0.5s ease-out';
    });
  }, 1000);

  // Add loading states for dynamic content
  const loadingElements = document.querySelectorAll('.stat-number');
  loadingElements.forEach(element => {
    element.style.opacity = '0.7';
    element.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
      element.style.opacity = '1';
    }, 2000);
  });
});

// Utility functions for future enhancements
function showNotification(message, type = 'info') {
  console.log(`${type.toUpperCase()}: ${message}`);
  // In a real app, this would show a toast notification
}

function trackUserInteraction(action, element) {
  console.log(`User interaction: ${action} on ${element}`);
  // In a real app, this would send analytics data
}

// Performance optimization
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

// Add some visual feedback for better UX
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('Page hidden - pausing animations');
  } else {
    console.log('Page visible - resuming animations');
  }
});