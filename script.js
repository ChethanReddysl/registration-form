$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        $('.error').remove();
        
        // Validate name
        var name = $('#name').val().trim();
        if (name === '') {
            $('#name').after('<span class="error">Please enter your name</span>');
            return;
        }
        
        // Validate email
        var email = $('#email').val().trim();
        var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            $('#email').after('<span class="error">Please enter a valid email address</span>');
            return;
        }
        
        // Validate phone
        var phone = $('#phone').val().trim();
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            $('#phone').after('<span class="error">Please enter a valid 10-digit phone number</span>');
            return;
        }
        
        // Validate date of birth
        var dob = $('#dob').val();
        if (dob === '') {
            $('#dob').after('<span class="error">Please enter your date of birth</span>');
            return;
        }
        
        // Validate gender
        var gender = $('#gender').val();
        if (gender === '') {
            $('#gender').after('<span class="error">Please select your gender</span>');
            return;
        }
        
        // If all validations pass, submit the form
        this.submit();
    });
});

