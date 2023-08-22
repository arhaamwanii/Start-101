import { createInterface } from 'readline';

const r1 = createInterface({
  input: process.stdin,
  output: process.stdout
});

function square() {
  r1.question("Num1 =", function (userInput) {
    // This function will be called when the user enters input
    console.log("You entered: " + userInput);

    // Now, you can ask for the second number or perform any other actions here
    r1.question("Num2 =", function (userInput2) {
      console.log("You entered: " + userInput2);

      // You can perform calculations or other tasks here
      const num1 = parseFloat(userInput);
      const num2 = parseFloat(userInput2);

      if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        console.log(`Result: ${result}`);
      } else {
        console.log("Invalid input. Please enter valid numbers.");
      }

      // Close the readline interface when you're done
      r1.close();
    });
  });
}

// Call the square function to start the input process
square();
