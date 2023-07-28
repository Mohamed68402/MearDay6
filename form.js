document.addEventListener("DOMContentLoaded", function () {
    var myForm = document.getElementById("myForm");
    var confirmationMessage = document.getElementById("confirmationMessage");
    var timeout;

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearTimeout(timeout);

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        if (name.trim() === "" || email.trim() === "") {
            confirmationMessage.style.backgroundColor = "#f2dede";
            confirmationMessage.style.color = "#a94442";
            confirmationMessage.innerHTML = "Please enter all required fields.";
        } else {
            confirmationMessage.style.backgroundColor = "#dff0d8";
            confirmationMessage.style.color = "#3c763d";
            confirmationMessage.innerHTML = "Form submitted successfully!";
            myForm.reset();
        }

        confirmationMessage.style.display = "block";

        timeout = setTimeout(function () {
            confirmationMessage.style.display = "none";
        }, 5000); // Hides the message after 5 seconds (5000 milliseconds)
    });
});
