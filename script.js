document.addEventListener('DOMContentLoaded', function() {
    // Collapsible functionality
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0 1.5rem';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '1.5rem';
            }
        });
    });

    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const themeIcons = document.querySelectorAll('.theme-icon i');
    
    // Check for saved user preference, if any, on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
        updateThemeIcons('dark');
    } else {
        updateThemeIcons('light');
    }
    
    // Theme switch event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateThemeIcons('dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            updateThemeIcons('light');
        }
    });
    
    // Update theme icons based on current theme
    function updateThemeIcons(theme) {
        themeIcons.forEach(icon => {
            if (theme === 'dark') {
                if (icon.classList.contains('fa-sun')) {
                    icon.style.opacity = '0.5';
                } else if (icon.classList.contains('fa-moon')) {
                    icon.style.opacity = '1';
                }
            } else {
                if (icon.classList.contains('fa-sun')) {
                    icon.style.opacity = '1';
                } else if (icon.classList.contains('fa-moon')) {
                    icon.style.opacity = '0.5';
                }
            }
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Open first collapsible by default
    if (collapsibles.length > 0) {
        collapsibles[0].click();
    }
});
