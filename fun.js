
    const sections = document.querySelectorAll('section');
    const revealOnScroll = () => {
      const trigger = window.innerHeight / 1.2;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < trigger) {
          section.classList.add('reveal');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Back to top button
    const backToTopBtn = document.getElementById("backToTopBtn");
    window.onscroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };
    backToTopBtn.onclick = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Collapse navbar on link click (for mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(link => link.addEventListener('click', () => navCollapse.classList.remove('show')));

    // Toggle Contact Info
    function toggleContactInfo() {
      const contactInfo = document.getElementById("contact-info");
      contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
    }


    