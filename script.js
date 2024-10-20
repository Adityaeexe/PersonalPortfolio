

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("lyVFXTKG2OO3Xr_kA");  // Replace with your actual User ID

    // Change 'contact' to 'contact-form' to correctly reference the form
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data via EmailJS
        emailjs.sendForm('service_a2olb6k', 'template_nuvc1jw', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('status-message').innerText = 'Message sent successfully!';
                document.getElementById('contact-form').reset(); // Reset the form after successful submission
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('status-message').innerText = 'Message failed to send. Please try again.';
            });
    });
});



