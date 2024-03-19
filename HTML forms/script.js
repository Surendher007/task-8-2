document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bigDataForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform form validation
        if (validateForm()) {
            // If validation succeeds, you can submit the form data
            submitForm();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value.trim();

        // Simple validation example, you can add more complex validation as needed
        if (name === '' || email === '' || age === '' || gender === '') {
            alert('All fields are required');
            return false;
        }

        return true;
    }

    function submitForm() {
        // Here you can perform actions with the form data, like sending it to a server
        alert('Form submitted successfully!');
        // You can also reset the form after submission if needed
        form.reset();
    }
});
