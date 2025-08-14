         const form = document.querySelector('contactForm');
        const nameInput = document.querySelector('name');
        const emailInput = document.querySelector('email');
        const messageInput = document.querySelector('message');
        const successMsg = document.querySelector('successMsg');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            let isValid = true;

            //Name validation
            const nameValue = nameInput.value.trim();
            if (nameValue === '' || /[^a-zA-Z\s]/.test(nameValue)) {
                setError(nameInput, "Name must contain only letters and spaces");
                isValid = false;
            } else {
                setSuccess(nameInput);
            }

            // Email validation
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                setError(emailInput, "Enter a valid email address");
                isValid = false;
            } else {
                setSuccess(emailInput);
            }

            // Message validation
            const messageValue = messageInput.value.trim();
            if (messageValue.length < 10) {
                setError(messageInput, "Message must be at least 10 characters");
                isValid = false;
            } else {
                setSuccess(messageInput);
            }

            // If all valid
            if (isValid) {
                successMsg.textContent = "Form submitted successfully!";
                form.reset();
                clearErrors();
            } else {
                successMsg.textContent = "";
            }
        });

        function setError(input, message) {
            const formGroup = input.parentElement;
            const small = formGroup.querySelector('small');
            small.textContent = message;
        }

        function setSuccess(input) {
            const formGroup = input.parentElement;
            const small = formGroup.querySelector('small');
            small.textContent = "";
        }

        function clearErrors() {
            document.querySelectorAll('small').forEach(small => small.textContent = "");
        }