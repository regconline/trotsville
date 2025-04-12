// Main JavaScript file for Trostsville Primary School website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Add smooth scrolling to all links
  initSmoothScroll();
});

// Function to handle scroll animations
function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.scroll-animation');
  
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('active');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 80)) {
        displayScrollElement(el);
      }
    });
  };
  
  // Add event listener for scroll
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Trigger once on load
  handleScrollAnimation();
}

// Function to initialize mobile navigation
function initMobileNav() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Function to add smooth scrolling to all links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Function to toggle accordion elements
function toggleAccordion(id) {
  const accordionContent = document.getElementById(id);
  const accordionButton = document.querySelector(`[aria-controls="${id}"]`);
  
  if (accordionContent && accordionButton) {
    const isExpanded = accordionButton.getAttribute('aria-expanded') === 'true';
    
    accordionButton.setAttribute('aria-expanded', !isExpanded);
    accordionContent.classList.toggle('hidden');
    
    // Toggle icon rotation if present
    const icon = accordionButton.querySelector('.accordion-icon');
    if (icon) {
      icon.classList.toggle('rotate-180');
    }
  }
}
