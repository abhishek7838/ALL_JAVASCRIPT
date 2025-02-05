let num1 = Number(prompt("Enter 1st number"))
let num2 = Number(prompt("Enter 2st number"))
let num3 = Number(prompt("Enter 3st number"))
if (num1 > num2 && num1 > num3) {
    document.write(` 1st number is greatest :${num1}`);
} else if (num2 > num1 && num2 > num3) {
    document.write(` 2st number is greatest :${num2}`);
} else {
    document.write(`3rd number is greatest :${num3}`);
}
