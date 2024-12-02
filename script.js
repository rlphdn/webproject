var typed = new Typed(".text", {
    strings:["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; 
        const topButton = document.querySelector('.top');

        
        if (scrollPosition >= 300) {
            topButton.classList.add('visible'); 
        } else {
            topButton.classList.remove('visible'); 
        }
    });
    const navbarLinks = document.querySelectorAll('.navbar a');

    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
          
            navbarLinks.forEach(link => link.classList.remove('active'));

            
            this.classList.add('active');
        });
    });
