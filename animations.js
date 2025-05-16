// Main initialization function
document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting up animations...');
    setupHeroAnimation();
    setupContentAnimations();
    setupScrollAnimations();
  });
  
  /**
   * Complete hero animation implementation that ensures animations work properly
   * Uses direct DOM manipulation and forced reflow to guarantee animation
   */
  function setupHeroAnimation() {
    // First, check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('Reduced motion is preferred. Applying simplified animations.');
      document.body.classList.add('reduced-motion');
    }
    
    // Get hero section
    const heroSection = document.getElementById('home');
    if (!heroSection) {
      console.warn('Hero section not found');
      return;
    }
    
    // Ensure hero section has proper styling
    heroSection.style.position = 'relative';
    heroSection.style.overflow = 'hidden';
    heroSection.style.zIndex = '1';
    
    // Remove any existing animation elements (in case this runs multiple times)
    const existingBg = heroSection.querySelector('.hero-bg');
    if (existingBg) existingBg.remove();
    
    const existingFloatingElements = heroSection.querySelector('.floating-elements');
    if (existingFloatingElements) existingFloatingElements.remove();
    
    // Create dynamic keyframes (only once)
    if (!document.querySelector('style[data-animation="hero-animations"]')) {
      const styleSheet = document.createElement('style');
      styleSheet.setAttribute('data-animation', 'hero-animations');
      
      // Define all keyframes in one style element
      styleSheet.textContent = `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        
        @keyframes float1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 20px); }
        }
        
        @keyframes float2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-30px, 30px); }
        }
        
        @keyframes float3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20px, -40px); }
        }
        
        @keyframes float4 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, -20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      
      document.head.appendChild(styleSheet);
    }
    
    // Create hero background
    const heroBg = document.createElement('div');
    heroBg.className = 'hero-bg';
    heroBg.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 20%, rgba(189, 147, 249, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(189, 147, 249, 0.15) 0%, transparent 50%);
      opacity: 0.9;
      z-index: -1;
      ${prefersReducedMotion ? '' : 'animation: pulse 15s ease-in-out infinite alternate;'}
    `;
    
    // Create floating elements container
    const floatingElements = document.createElement('div');
    floatingElements.className = 'floating-elements';
    floatingElements.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    `;
    
    // Define floating element positions and animations
    const floatingElementsConfig = [
      { width: '150px', height: '150px', top: '15%', left: '10%', animation: 'float1 25s ease-in-out infinite alternate' },
      { width: '100px', height: '100px', top: '60%', left: '15%', animation: 'float2 20s ease-in-out infinite alternate' },
      { width: '180px', height: '180px', top: '30%', right: '15%', animation: 'float3 30s ease-in-out infinite alternate' },
      { width: '120px', height: '120px', bottom: '20%', right: '20%', animation: 'float4 22s ease-in-out infinite alternate' }
    ];
    
    // Create and add floating elements
    floatingElementsConfig.forEach(config => {
      const element = document.createElement('div');
      element.className = 'floating-element';
      
      // Apply styles directly to ensure they work
      element.style.cssText = `
        position: absolute;
        border-radius: 50%;
        filter: blur(10px);
        mix-blend-mode: screen;
        background: rgba(189, 147, 249, 0.2);
        width: ${config.width};
        height: ${config.height};
        ${config.top ? `top: ${config.top};` : ''}
        ${config.bottom ? `bottom: ${config.bottom};` : ''}
        ${config.left ? `left: ${config.left};` : ''}
        ${config.right ? `right: ${config.right};` : ''}
        ${prefersReducedMotion ? '' : `animation: ${config.animation};`}
        will-change: transform;
      `;
      
      floatingElements.appendChild(element);
    });
    
    // Add elements to the hero section
    heroSection.appendChild(heroBg);
    heroSection.appendChild(floatingElements);
    
    // Force a reflow to ensure animations start properly
    void heroBg.offsetWidth;
    floatingElements.querySelectorAll('.floating-element').forEach(el => {
      void el.offsetWidth;
    });
    
    console.log('Hero animation setup complete');
  }
  
  /**
   * Sets up fade-in animations for hero content elements
   */
  function setupContentAnimations() {
    // Skip elaborate animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) {
      console.warn('Hero content not found');
      return;
    }
    
    // Function to add animation with proper handling of reduced motion
    const animateElement = (element, animationClass, delay = 0) => {
      if (!element) return;
      
      if (prefersReducedMotion) {
        // Just make it visible without animation
        element.style.opacity = '1';
        element.style.transform = 'none';
      } else {
        // Add animation class and also set it inline for reliability
        element.classList.add(animationClass);
        element.style.animation = animationClass === 'fade-in' 
          ? `fadeIn 0.8s ease ${delay}ms forwards`
          : `fadeInUp 0.8s ease ${delay}ms forwards`;
        element.style.opacity = '0';
      }
    };
    
    // Animate hero content elements with staggered timing
    const h1 = heroContent.querySelector('h1');
    const h2 = heroContent.querySelector('h2');
    const p = heroContent.querySelector('p');
    const buttons = heroContent.querySelector('.cta-buttons');
    
    animateElement(h1, 'fade-in-up', 0);
    animateElement(h2, 'fade-in-up', 200);
    animateElement(p, 'fade-in-up', 300);
    animateElement(buttons, 'fade-in-up', 400);
    
    // Animate profile image
    const profileImage = document.querySelector('.hero-image .profile-placeholder');
    animateElement(profileImage, 'fade-in-up', 300);
    
    console.log('Content animations setup complete');
  }
  
  /**
   * Sets up animations for elements that appear when scrolling
   */
  function setupScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Function to observe and animate elements on scroll
    const setupScrollObserver = (selector, staggered = false) => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;
      
      // If user prefers reduced motion, just make elements visible without animation
      if (prefersReducedMotion) {
        elements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        return;
      }
      
      // Create an intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (staggered) {
              // Add staggered delay for items in a collection
              setTimeout(() => {
                animateElement(entry.target);
              }, index * 150);
            } else {
              // Animate immediately
              animateElement(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      // Prepare and observe each element
      elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
      });
    };
    
    // Function to animate an element when it comes into view
    const animateElement = (element) => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    };
    
    // Set up observers for different sections
    setupScrollObserver('.project-card', true);  // Staggered animation for project cards
    setupScrollObserver('.exp-item');
    setupScrollObserver('.skill-category');
    setupScrollObserver('.contact-item');
    
    console.log('Scroll animations setup complete');
  }