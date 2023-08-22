const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function square() {
    r1.question("Num1 =", function (userInput) {
        console.log("You entered: " + userInput);

        r1.question("Num2 =", function (userInput2) {
            console.log("You entered: " + userInput2);

            const num1 = parseFloat(userInput);
            const num2 = parseFloat(userInput2);

            if (!isNaN(num1) && !isNaN(num2)) {
                const result = num1 * num2;
                console.log(`Result: ${result}`);
            } else {
                console.log("Invalid input. Please enter valid numbers.");
            }

            r1.close();
        });
    });
}

square();
