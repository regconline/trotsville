document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donation-form');
    if (!donationForm) return;

    // Form validation and submission
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error messages
        const errorMessages = donationForm.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.classList.add('hidden');
            msg.textContent = '';
        });

        // Get form status element
        const formStatus = document.getElementById('donation-form-status');
        formStatus.classList.add('hidden');
        
        // Validate form
        let isValid = true;
        
        // Required fields validation
        const requiredFields = donationForm.querySelectorAll('[required]');
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
        const emailField = donationForm.querySelector('#donor-email');
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
        
        // Donation amount validation
        const amountField = donationForm.querySelector('#donation-amount');
        if (amountField && amountField.value.trim()) {
            const amount = parseFloat(amountField.value);
            if (isNaN(amount) || amount < 10) {
                isValid = false;
                const errorEl = amountField.nextElementSibling;
                if (errorEl && errorEl.classList.contains('error-message')) {
                    errorEl.textContent = 'Please enter a valid amount (minimum R10)';
                    errorEl.classList.remove('hidden');
                }
            }
        }
        
        // If form is valid, simulate form submission
        if (isValid) {
            // Show loading state
            formStatus.textContent = 'Processing donation request...';
            formStatus.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
            formStatus.classList.add('bg-blue-100', 'text-blue-700');
            
            // In a real implementation, you would redirect to payment gateway or process the donation
            setTimeout(() => {
                // Success simulation
                formStatus.textContent = 'Thank you for your generosity! You will be redirected to our secure payment processor shortly.';
                formStatus.classList.remove('bg-blue-100', 'text-blue-700', 'bg-red-100', 'text-red-700');
                formStatus.classList.add('bg-green-100', 'text-green-700');
                
                // Simulate redirect to payment gateway
                setTimeout(() => {
                    alert('In a real implementation, you would now be redirected to a secure payment gateway to complete your donation of R' + amountField.value);
                    // Reset form after simulated payment process
                    donationForm.reset();
                }, 3000);
            }, 1500);
        }
    });
    
    // Focus/blur events for better UX
    const formInputs = donationForm.querySelectorAll('input, textarea, select');
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
    
    // Handle donation amount presets (if needed)
    const amountPresets = document.querySelectorAll('.donation-preset');
    const amountInput = document.getElementById('donation-amount');
    
    if (amountPresets && amountInput) {
        amountPresets.forEach(preset => {
            preset.addEventListener('click', function(e) {
                e.preventDefault();
                const amount = this.dataset.amount;
                if (amount) {
                    amountInput.value = amount;
                    
                    // Remove active class from all presets
                    amountPresets.forEach(p => p.classList.remove('bg-sky-blue', 'text-white'));
                    
                    // Add active class to clicked preset
                    this.classList.add('bg-sky-blue', 'text-white');
                }
            });
        });
        
        // Custom amount input handling
        amountInput.addEventListener('focus', function() {
            // Remove active class from all presets when user focuses on custom amount
            amountPresets.forEach(p => p.classList.remove('bg-sky-blue', 'text-white'));
        });
    }
    
    // Handle donation type change
    const donationTypeRadios = document.querySelectorAll('input[name="donation-type"]');
    if (donationTypeRadios) {
        donationTypeRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                const donationType = this.value;
                // You can update UI elements based on donation type if needed
                console.log('Donation type changed to:', donationType);
                
                // For example, you might want to update labels or show/hide elements
                if (donationType === 'monthly') {
                    document.querySelector('label[for="donation-amount"]').textContent = 'Monthly Donation Amount (R) *';
                } else {
                    document.querySelector('label[for="donation-amount"]').textContent = 'Donation Amount (R) *';
                }
            });
        });
    }
});
