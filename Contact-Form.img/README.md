#📩 Contact Form with JavaScript Validation

-This project is a Contact form built using  HTML,CSS, & JAVASCRIPT .
-It validates Name,Email, and Message before allowing the form to be submitted.


# 📝 Features
 - Name Validation : Only letters and spaces are allowed.
 - Email Validation: Checks if the email format is correct.
 - Message Validation: Must be at least 10 characters long. 
 - Inline Error Messages: Shows red text below each input when invalid.
 - Success Message: Shows confirmation when form is valid.
 - Prevents Page Reload: Uses `event.preventDefault()` so we can validate before submission.
 - Form Reset: Clears fields after successful submission.


 #📂 Files
 index.html → The main HTML structure for the form.
 style.css→ Basic styling for form layout and error messages.
 app.js → JavaScript validation logic.

 🛠 How It Works
1. Form Submit Event 
   The form listens for a `submit` event using:
   "javascript"
   form.addEventListener('submit', function(e) { ... });