// SCRIPT DU MENU 

document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector('.menubarre');
    var menu = document.querySelector('.menu');
    var closeBtn = document.createElement('div'); 
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  
    menu.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  
    closeBtn.innerHTML = '&#10006;'; 
    closeBtn.classList.add('close-btn');
    closeBtn.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  
    menu.appendChild(closeBtn); 
  });


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
 
  if (name && email && message) {
      document.getElementById("form-message").textContent = "Merci de nous avoir contactés ! Nous reviendrons vers vous bientôt.";
      document.getElementById("form-message").style.color = "#28a745";
      
      document.getElementById("contactForm").reset();
  } else {
      document.getElementById("form-message").textContent = "Veuillez remplir tous les champs.";
      document.getElementById("form-message").style.color = "#d9534f";
  }
});


window.addEventListener('scroll', () => {
        const section = document.querySelector('.job-section');
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Détecter si la section est visible
        if (sectionTop < windowHeight - 100) {
            section.classList.add('scrolled');
        }
    });


