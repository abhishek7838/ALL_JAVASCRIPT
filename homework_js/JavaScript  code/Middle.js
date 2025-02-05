let num1 = Number(prompt("Enter 1st number"))
let num2 = Number(prompt("Enter 2st number"))
let num3 = Number(prompt("Enter 3st number"))
if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    document.write(` 1st number is middle :${num1}`);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    document.write(` 2st number is middle :${num2}`);
} else {
    document.write(`3rd number is middle :${num3}`);
}