// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
    }
  });
});

// Sticky header effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    header.style.background = "#ffffff";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    header.style.background = "#ffffff";
  }
});

// Mobile menu toggle
const createMobileMenu = () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  // Create mobile menu button
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.classList.add("mobile-menu-btn");
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  mobileMenuBtn.style.display = "none";

  // Add mobile menu button to header
  header.querySelector(".container").appendChild(mobileMenuBtn);

  // Add event listener to mobile menu button
  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Check window width and show/hide mobile menu button
  const checkWindowWidth = () => {
    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = "block";
      nav.classList.add("mobile");
    } else {
      mobileMenuBtn.style.display = "none";
      nav.classList.remove("mobile", "active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  };

  // Initial check
  checkWindowWidth();

  // Listen for window resize
  window.addEventListener("resize", checkWindowWidth);
};

// Initialize mobile menu
document.addEventListener("DOMContentLoaded", createMobileMenu);

// Add animation to timeline items
const animateTimeline = () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  const checkTimelineItems = () => {
    timelineItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("animate");
      }
    });
  };

  // Initial check
  checkTimelineItems();

  // Listen for scroll
  window.addEventListener("scroll", checkTimelineItems);
};

// Initialize timeline animation
document.addEventListener("DOMContentLoaded", animateTimeline);

// Add animation to benefit cards
const animateBenefitCards = () => {
  const benefitCards = document.querySelectorAll(".benefit-card");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  const checkBenefitCards = () => {
    benefitCards.forEach((card, index) => {
      if (isInViewport(card)) {
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 100); // Staggered animation
      }
    });
  };

  // Initial check
  checkBenefitCards();

  // Listen for scroll
  window.addEventListener("scroll", checkBenefitCards);
};

// Initialize benefit cards animation
document.addEventListener("DOMContentLoaded", animateBenefitCards);

// Add CSS for animations
const addAnimationStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .timeline-item:nth-child(even) {
            transform: translateX(30px);
        }
        
        .timeline-item.animate {
            opacity: 1;
            transform: translateX(0);
        }
        
        .benefit-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .benefit-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .mobile-menu-btn {
                background: none;
                border: none;
                color: var(--primary-color);
                font-size: 1.5rem;
                cursor: pointer;
                position: absolute;
                top: 15px;
                right: 15px;
            }
            
            nav.mobile {
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background: white;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            
            nav.mobile.active {
                max-height: 300px;
            }
            
            nav.mobile ul {
                flex-direction: column;
                padding: 20px;
            }
            
            nav.mobile ul li {
                margin: 10px 0;
            }
        }
    `;
  document.head.appendChild(style);
};

// Add animation styles
document.addEventListener("DOMContentLoaded", addAnimationStyles);

// Handle download button click
document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector(".cta-section .btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert(
        "The full business plan document would be downloaded here. In a production environment, this would link to a PDF version of the business plan."
      );
    });
  }
});
