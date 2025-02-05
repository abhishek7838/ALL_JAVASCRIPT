let day = prompt("Enter your book issue day:")
if (day <= 5) {
    document.write(`<h1>Up to 5 days: ₹2/day than  day${day} Total charges.  ${day * 2}</h1>`)
} else if (day <= 10) {
    document.write(`<h1>6 to 10 days: ₹3/day than  day${day} Total charges.  ${day * 3}</h1>`)
} else if (day <= 15) {
    document.write(`<center> <h1>11 to 15 days: ₹4/day than  day${day} Total charges.  ${day * 4}</h1></center>`)
} else if (day >= 15) {
    document.write(`<center><h1>more than 15 days: ₹5/day than  day${day} Total charges.  ${day * 5}</h1></center>`)
}

else {
    document.write(`Invailed input`)
}