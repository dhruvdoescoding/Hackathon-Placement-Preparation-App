// HELP DESK JAVASCRIPT - INTERACTIVE FUNCTIONALITY
console.log('🆘 Help Desk JavaScript Loading...');

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 Help Desk page initialized!');

  // Initialize all components
  initializeHelpDeskPage();

  function initializeHelpDeskPage() {
    setupLogoRedirect();
    setupNavigationMenu();
    setupTimeAndDate();
    setupContactButtons();
    setupFAQAccordion();
    setupLiveStats();

    console.log('✅ All Help Desk components loaded!');
  }

  // Logo click to redirect to homepage
  function setupLogoRedirect() {
    const logoClickable = document.getElementById('logoHome');
    if (logoClickable) {
      logoClickable.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🏠 Redirecting to homepage...');
        window.location.href = 'index.html';
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
        // The browser will handle the redirect
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

  // Contact buttons functionality
  function setupContactButtons() {
    const emailBtn = document.getElementById('emailBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const contactBtn = document.getElementById('contactBtn');

    // Email button
    if (emailBtn) {
      emailBtn.addEventListener('click', function() {
        console.log('📧 Email button clicked');

        // Create email with pre-filled subject and body
        const subject = encodeURIComponent('Help Desk Support Request - Placement Preparation App');
        const body = encodeURIComponent(`Hello Support Team,

I need help with the following:

[Please describe your issue or question here]

Best regards,
[Your Name]

---
Platform: Web Application
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}`);

        const emailUrl = `mailto:support@placementprep.com?subject=${subject}&body=${body}`;
        window.open(emailUrl, '_blank');

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    }

    // WhatsApp button
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function() {
        console.log('💬 WhatsApp button clicked');

        // WhatsApp message with pre-filled text
        const message = encodeURIComponent(`Hello! I need help with the Placement Preparation App.

Issue/Question: [Please describe your concern]

Thank you for your support!`);

        // Replace with actual WhatsApp business number
        const whatsappNumber = '1234567890'; // Replace with actual number
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    }

    // General contact button
    if (contactBtn) {
      contactBtn.addEventListener('click', function() {
        console.log('📞 Contact button clicked');

        // Show contact options modal
        const contactInfo = `📞 Contact Information:

📧 Email: support@placementprep.com
💬 WhatsApp: +1 (234) 567-8900
📱 Phone: +1 (234) 567-8901
🕐 Business Hours: Mon-Fri 9AM-6PM IST

🌐 Website: www.placementprep.com
📍 Office: GLA Mathura, India

We typically respond within:
• WhatsApp: 5-10 minutes
• Email: 2-4 hours
• Phone: Immediate during business hours`;

        alert(contactInfo);

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    }

    console.log('📞 Contact buttons setup complete');
  }

  // FAQ Accordion functionality
  function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqNumber = this.getAttribute('data-faq');
        const faqItem = this.parentElement;
        const faqAnswer = document.getElementById(`faq-${faqNumber}`);
        const faqToggle = this.querySelector('.faq-toggle');

        console.log(`❓ FAQ ${faqNumber} clicked`);

        // Check if this FAQ is currently open
        const isOpen = faqAnswer.classList.contains('open');

        // Close all FAQ items
        document.querySelectorAll('.faq-answer').forEach(answer => {
          answer.classList.remove('open');
        });
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });

        // If this FAQ wasn't open, open it
        if (!isOpen) {
          faqAnswer.classList.add('open');
          faqItem.classList.add('active');
          console.log(`✅ FAQ ${faqNumber} opened`);
        } else {
          console.log(`❌ FAQ ${faqNumber} closed`);
        }

        // Add ripple effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = '';
        }, 100);
      });
    });

    console.log('❓ FAQ accordion setup complete');
  }

  // Live stats updates
  function setupLiveStats() {
    const stats = {
      activeUsers: { min: 1200, max: 1300, current: 1252 },
      studentsHelped: { base: 15382, increment: 0 }
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

      // Update students helped occasionally (simulate new placements)
      if (Math.random() < 0.1) { // 10% chance every 5 seconds
        stats.studentsHelped.increment += 1;
        const newTotal = stats.studentsHelped.base + stats.studentsHelped.increment;

        const placedElements = [
          document.getElementById('studentsHelped'),
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
    }, 5000);

    console.log('📊 Live stats updates enabled');
  }

  // Add keyboard shortcuts for better accessibility
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + H to go home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      document.getElementById('logoHome')?.click();
    }

    // Ctrl/Cmd + M to toggle navigation menu
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

    // Animate FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';

      setTimeout(() => {
        item.style.transition = 'all 0.6s ease-out';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 400 + (index * 100));
    });

    // Animate help cards
    const helpCards = document.querySelectorAll('.help-card');
    helpCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 600 + (index * 150));
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

console.log('✅ Help Desk JavaScript Loaded Successfully!');