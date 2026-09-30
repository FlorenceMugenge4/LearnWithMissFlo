// MOBILE MENU //

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

        const menuIsOpen = !mobileMenu.classList.contains("hidden");

        menuButton.setAttribute("aria-expanded", menuIsOpen);

        if (menuIsOpen) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });
}

// RESOURCE FILTERING //

const filterButtons = document.querySelectorAll(".category-button");
const resourceCards = document.querySelectorAll(".resource-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.category;

        resourceCards.forEach(function (card) {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });
    });
});


// CONTACT FORM VALIDATION //

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value;
        const message = document.querySelector("#message").value.trim();

        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const subjectError = document.querySelector("#subjectError");
        const messageError = document.querySelector("#messageError");
        const successMessage = document.querySelector("#successMessage");

        // Hide previous messages
        nameError.classList.add("hidden");
        emailError.classList.add("hidden");
        subjectError.classList.add("hidden");
        messageError.classList.add("hidden");
        successMessage.classList.add("hidden");

        let isValid = true;


        // Name validation
        if (name === "") {

            nameError.textContent = "Please enter your name.";
            nameError.classList.remove("hidden");

            isValid = false;
        }


        // Email validation
        if (email === "") {

            emailError.textContent = "Please enter your email.";
            emailError.classList.remove("hidden");

            isValid = false;

        } else if (!email.includes("@")) {

            emailError.textContent = "Please enter a valid email address.";
            emailError.classList.remove("hidden");

            isValid = false;
        }


        // Subject validation
        if (subject === "") {

            subjectError.textContent = "Please select a subject.";
            subjectError.classList.remove("hidden");

            isValid = false;
        }


        // Message validation
        if (message === "") {

            messageError.textContent = "Please enter your message.";
            messageError.classList.remove("hidden");

            isValid = false;
        }


        // Successful submission
        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been submitted successfully.";

            successMessage.classList.remove("hidden");

            contactForm.reset();
        }

    });
// RESOURCE ACTIVITY BUTTONS //

const activityButtons = document.querySelectorAll(".activity-button");
const activityMessage = document.querySelector("#activityMessage");
const activityText = document.querySelector("#activityText");
const closeActivity = document.querySelector("#closeActivity");

activityButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const activity = button.dataset.activity;

        activityText.textContent = activity;

        activityMessage.classList.remove("hidden");

        activityMessage.scrollIntoView({
            behavior: "smooth"
        });

    });

});


if (closeActivity) {

    closeActivity.addEventListener("click", function () {

        activityMessage.classList.add("hidden");

    });

}
}
