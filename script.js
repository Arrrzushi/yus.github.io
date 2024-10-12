document.addEventListener('DOMContentLoaded', function() {
  // Scroll animations
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + window.innerHeight;
    sections.forEach(section => {
      if (scrollPos > section.offsetTop + section.clientHeight / 3) {
        section.classList.add('visible');
      }
    });
  });

  // JavaScript for adding animation when scrolling into view
  window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      alert(`Thank you, ${name}. Your message has been sent.`);
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
});

// Corrected particles.js code
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    }, // <-- Corrected comma here
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { 
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      } 
    }
  },
  "retina_detect": true
}, function() {
  console.log("Particles.js loaded successfully!");
});


/*Particle.js initialization for moving ant effect
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000" // You can change the color of the ants here
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  }
});*/