var messageElement = document.getElementById("message");

document.addEventListener("keydown", function(event) {
    // Get the ASCII code of the pressed key
    var keyCode = event.keyCode
    console.log("ASCII Code:", keyCode);

    // Detect whether it is the Alt, Ctrl, or Shift key
    var isAltKey = event.altKey;
    var isCtrlKey = event.ctrlKey;
    var isShiftKey = event.shiftKey;

    if (isAltKey) {
        console.log("Alt key pressed");
    }

    if (isCtrlKey) {
        console.log("Ctrl key pressed");
    }

    if (isShiftKey) {
        console.log("Shift key pressed");
    }
});
