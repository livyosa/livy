// Optimized portfolio.js - Step 1
// This replaces your entire js/portfolio.js file

const mainSection = document.querySelector('.main-section');

if (mainSection) {
  // Use Intersection Observer instead of scroll events for better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { 
    threshold: 0.2, // Trigger when 20% visible
    rootMargin: '0px 0px -20% 0px' // Same behavior as your original 0.8 threshold
  });

  observer.observe(mainSection);
  
  // Initial check in case element is already in view
  const rect = mainSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    mainSection.classList.add('fade-in');
  }
} else {
  console.warn('Main section not found');
}


// email pop up

const emailBtn = document.getElementById('email-btn');
const popup = document.getElementById('contact-popup');
const closeBtn = document.getElementById('close-popup');

emailBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optional: close popup when clicking outside form
popup.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});
