// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

const userInput = Number(prompt("Enter the number of your birth month (1-12)."));
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (userInput === 1) {
    console.log(months[0]);
}
else if (userInput === 2) {
    console.log(months[1])
}
else if (userInput === 3) {
    console.log(months[2])
}
else if (userInput === 4) {
    console.log(months[3])
}
else if (userInput === 5) {
    console.log(months[4])
}
else if (userInput === 6) {
    console.log(months[5])
}
else if (userInput === 7) {
    console.log(months[6])
}
else if (userInput === 8) {
    console.log(months[7])
}
else if (userInput === 9) {
    console.log(months[8])
}
else if (userInput === 10) {
    console.log(months[9])
}
else if (userInput === 11) {
    console.log(months[10])
}
else if (userInput === 12) {
    console.log(months[11])
}
else {
    alert("INVALID! Please choose a number between (1-12).");
};