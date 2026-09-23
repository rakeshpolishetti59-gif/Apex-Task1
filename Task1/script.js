/**
 * ==============================================================================
 * Basics of Web Development - JavaScript Interactivity & Navigation Script
 * ==============================================================================
 * 
 * Demonstrates:
 * 1. Listening for DOMContentLoaded event.
 * 2. Handling button click events to display an interactive alert and update the DOM.
 * 3. Dynamic active state switching for Home, About, and Skills navigation links.
 */

document.addEventListener('DOMContentLoaded', function () {
  // ----------------------------------------------------------------------------
  // 1. Interactive "Click Me" Button (JavaScript Demonstration)
  // ----------------------------------------------------------------------------
  const alertButton = document.getElementById('alertBtn');
  const statusMessage = document.getElementById('statusMessage');

  if (alertButton) {
    alertButton.addEventListener('click', function () {
      // Display the JavaScript alert dialog
      const message = "🎉 Hello! You just triggered JavaScript interactivity!\n\n" +
        "JavaScript brings websites to life by listening for user actions " +
        "like clicks and dynamically responding.";

      alert(message);

      // Show on-page status feedback
      if (statusMessage) {
        statusMessage.classList.remove('hidden');
        statusMessage.style.display = 'flex';
        statusMessage.style.opacity = '1';

        // Auto-hide feedback smoothly after 5 seconds
        setTimeout(function () {
          statusMessage.style.opacity = '0';
          setTimeout(function () {
            statusMessage.classList.add('hidden');
            statusMessage.style.display = 'none';
          }, 300);
        }, 5000);
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 2. Navigation Link Active State & Scrollspy
  // ----------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('header#home, section#about, section#skills');

  // Handle manual click on nav links
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Update active nav link when scrolling through sections
  window.addEventListener('scroll', function () {
    let currentSectionId = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
          link.classList.add('active');
        }
      });
    }
  });

  console.log('✅ Basics of Web Development: script.js initialized successfully!');
});
