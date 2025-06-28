/**
 * @fileoverview Handles client-side interactivity for the HealthDrop website.
 * Includes smooth scrolling for anchor links and responsive hamburger menu functionality.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('#nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('active');
    // Update aria-expanded for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
  });
  
  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scrolling functionality
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (const link of scrollLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      // A link with href="#" should not scroll, but can be used for other JS triggers.
      if (targetId.length > 1) { 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  }
});