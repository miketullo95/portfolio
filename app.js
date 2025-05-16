// Initialize all functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  setupSmoothScroll();
  setupScrollSpy();
  setupStickyHeader();
  setupScrollAnimations();
  setupContactForm();
  setupAccessibility();
  
  // Optional features - uncomment to enable
  // setupThemeToggle(); 
  // setupProjectsFilter();
});// DOM Elements
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const body = document.body;
const sections = document.querySelectorAll('section');

// Mobile Navigation
function setupMobileNav() {
  // Create mobile nav element if it doesn't exist
  if (!document.querySelector('.mobile-nav')) {
    const mobileNav = document.createElement('div');
    mobileNav.classList.add('mobile-nav');
    mobileNav.setAttribute('id', 'mobile-nav');
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    
    // Clone the nav links
    const mobileNavLinks = navLinks.cloneNode(true);
    mobileNav.appendChild(mobileNavLinks);
    
    // Insert after header
    const header = document.querySelector('header');
    header.insertAdjacentElement('afterend', mobileNav);

  // Toggle mobile nav
  burger.addEventListener('click', () => {
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !isExpanded);
    burger.classList.toggle('active');
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    // Set focus to the first menu item when opened
    if (!isExpanded) {
      const firstMenuItem = mobileNav.querySelector('a');
      if (firstMenuItem) {
        setTimeout(() => firstMenuItem.focus(), 100);
      }
    }
  });
  
  // Close mobile nav when clicking on a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('active');
      mobileNav.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
  
  // Close mobile nav when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('active');
      mobileNav.classList.remove('active');
      body.classList.remove('no-scroll');
      burger.focus(); // Return focus to the burger button
    }
  });
}

  const mobileNav = document.querySelector('.mobile-nav');
  
  // Toggle mobile nav
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });
  
  // Close mobile nav when clicking on a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileNav.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  
  allNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Skip if user prefers reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Set focus to the target element
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
        
        // Update URL without scrolling
        history.pushState(null, null, targetId);
      }
    });
  });
}

// Active link highlighting based on scroll position
function setupScrollSpy() {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('header').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100; // 100px offset for better UX
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
}

// Sticky header with background change on scroll
function setupStickyHeader() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Animation on scroll
function setupScrollAnimations() {
  // Add fadeIn class to elements when they come into view
  const animElements = document.querySelectorAll('.project-card, .exp-item, .skill-category, .contact-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animElements.forEach(element => {
    observer.observe(element);
  });
}

// Form validation and submission
function setupContactForm() {
  // Removed as we no longer have a contact form
  // Instead, we'll add some hover and focus effects for the social links
  
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach(link => {
    // Initialize aria-label with original label
    const originalLabel = link.getAttribute('aria-label');
    
    link.addEventListener('mouseenter', () => {
      link.classList.add('pulse');
    });
    
    link.addEventListener('mouseleave', () => {
      link.classList.remove('pulse');
      // Reset aria-label to original
      link.setAttribute('aria-label', originalLabel);
    });
    
    link.addEventListener('focus', () => {
      // Enhance aria-label with instructions
      link.setAttribute('aria-label', `${originalLabel} (press Enter to visit)`);
    });
    
    link.addEventListener('blur', () => {
      // Reset aria-label to original
      link.setAttribute('aria-label', originalLabel);
    });
  });
}

// Dark/Light mode toggle
function setupThemeToggle() {
  // If you decide to add a theme toggle button later
  const themeToggle = document.createElement('button');
  themeToggle.classList.add('theme-toggle');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
  
  nav.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Projects filter (if you decide to add it later)
function setupProjectsFilter() {
  const filterContainer = document.createElement('div');
  filterContainer.classList.add('filter-container');
  
  const filters = ['All', 'UX Design', 'Product Management', 'Research'];
  
  filterContainer.innerHTML = `
    <div class="filters">
      ${filters.map(filter => `<button class="filter-btn ${filter === 'All' ? 'active' : ''}" data-filter="${filter.toLowerCase()}">${filter}</button>`).join('')}
    </div>
  `;
  
  const projectsHeader = document.querySelector('#projects .section-header');
  projectsHeader.appendChild(filterContainer);
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const tags = card.querySelector('.project-tags').textContent.toLowerCase();
        
        if (filter === 'all') {
          card.style.display = 'block';
        } else if (tags.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Initialize all functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  setupSmoothScroll();
  setupScrollSpy();
  setupStickyHeader();
  setupScrollAnimations();
  setupContactForm();
  setupAccessibility();
  
  // Optional features - uncomment to enable
  // setupThemeToggle(); 
  // setupProjectsFilter();
});

// Additional accessibility enhancements
function setupAccessibility() {
  // Add focus styles to all interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex="0"]');
  interactiveElements.forEach(el => {
    el.addEventListener('focus', () => {
      el.classList.add('focus-visible');
    });
    
    el.addEventListener('blur', () => {
      el.classList.remove('focus-visible');
    });
  });

  // Ensure proper image loading
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Provide fallback for images that fail to load
    img.addEventListener('error', () => {
      img.alt = img.alt || 'Image failed to load';
      img.style.border = '1px dashed var(--text-secondary)';
      img.style.padding = '1rem';
      img.style.display = 'flex';
      img.style.alignItems = 'center';
      img.style.justifyContent = 'center';
      
      const text = document.createElement('span');
      text.textContent = img.alt;
      img.parentNode.insertBefore(text, img.nextSibling);
    });
  });
}