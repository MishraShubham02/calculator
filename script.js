// Get the display box
let display = document.getElementById("output-calculator");

// Create a string to store what the user types
let input = "";

// Get all the buttons
let buttons = document.querySelectorAll("[data-value]");

// Loop through each button and add click event
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Get value from button
    let value = button.getAttribute("data-value");
    // If AC is clicked, clear input and display
    if (value === "AC") {
      input = "";
      display.innerText = "";
    }
    // If = is clicked, show the answer
    else if (value === "=") {
      // Simple way to calculate expression
      let answer = eval(input);
      display.innerText = input + " = " + answer;
      input = ""; // Clear for next input
    }
    // For all other buttons, add value to input
    else {
      input += value;
      display.innerText = input;
    }
  });
});
