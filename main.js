document.addEventListener('DOMContentLoaded', function() {
    // Toggle details on game accounts
    const toggles = document.querySelectorAll('.details-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const detailsId = this.getAttribute('data-details-id');
            const details = document.getElementById(detailsId);
            if (details) {
                details.classList.toggle('hidden');
            }
        });
    });

    // Form submission with validation
    const form = document.querySelector('#orderForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting traditionally
            const inputs = this.querySelectorAll('input[required], select[required]');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    alert(`Please fill out the ${input.name} field.`);
                    valid = false;
                }
            });
            if (valid) {
                // Process the form (AJAX, etc.) or simply submit it
                console.log('Form is valid, submitting...');
                // Example: Assuming AJAX submission here
                fetch('/submit-form-endpoint', {
                    method: 'POST',
                    body: new FormData(this),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('Thank you for your order!');
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Error submitting your order.');
                });
            }
        });
    }

    // Simple feedback mechanism
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});
