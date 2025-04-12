document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error messages
        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.classList.add('hidden');
            msg.textContent = '';
        });

        // Get form status element
        const formStatus = document.getElementById('form-status');
        formStatus.classList.add('hidden');
        
        // Validate form
        let isValid = true;
        
        // Required fields validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                const errorEl = field.nextElementSibling;
                if (errorEl && errorEl.classList.contains('error-message')) {
                    errorEl.textContent = 'This field is required';
                    errorEl.classList.remove('hidden');
                }
            }
        });
        
        // Email validation
        const emailField = contactForm.querySelector('#email');
        if (emailField && emailField.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                isValid = false;
                const errorEl = emailField.nextElementSibling;
                if (errorEl && errorEl.classList.contains('error-message')) {
                    errorEl.textContent = 'Please enter a valid email address';
                    errorEl.classList.remove('hidden');
                }
            }
        }
        
        // If form is valid, simulate form submission
        if (isValid) {
            // Show loading state
            formStatus.textContent = 'Sending message...';
            formStatus.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
            formStatus.classList.add('bg-blue-100', 'text-blue-700');
            
            // Simulate API call (in a real implementation, this would be an actual API call)
            setTimeout(() => {
                // Success simulation
                formStatus.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                formStatus.classList.remove('bg-blue-100', 'text-blue-700', 'bg-red-100', 'text-red-700');
                formStatus.classList.add('bg-green-100', 'text-green-700');
                
                // Reset form
                contactForm.reset();
                
                // In a real implementation, you would handle actual form submission here
                // using fetch() or XMLHttpRequest to send the data to a server endpoint
            }, 1500);
        }
    });
    
    // Focus/blur events for better UX
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        // Clear error message when user starts typing
        input.addEventListener('input', function() {
            const errorEl = this.nextElementSibling;
            if (errorEl && errorEl.classList.contains('error-message')) {
                errorEl.classList.add('hidden');
                errorEl.textContent = '';
            }
        });
    });
});
