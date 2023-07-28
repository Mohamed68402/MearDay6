document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    var keyCode = event.which || event.keyCode;

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var keyCodeText = document.getElementById("keyCodeText");

    keyCodeText.textContent = "ASCII Code of the key pressed: " + keyCode;
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
