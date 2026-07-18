const contactForm = document.getElementById("contactForm");
const response = document.getElementById("submit_response");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");
if (contactForm) {

    // Initialize EmailJS
    emailjs.init({
        publicKey: "p0lwWqnOfKY5vjcBe"
    });


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        response.innerHTML = "Sending message...";


        emailjs.sendForm(
            "service_l0ido64",
            "template_6jcgs3u",
            contactForm
        )

        .then(function () {

            response.innerHTML = "Message sent successfully!";

            contactForm.reset();

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);

            response.innerHTML =
                "Message failed to send. Please try again.";

        });

    });

}
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});