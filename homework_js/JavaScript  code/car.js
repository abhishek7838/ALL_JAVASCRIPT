let carName = prompt("Enter car Car Name : ");
let price = prompt("Enter Car Price : ");
if (carName == "Mahindra" && (700000 <= price && price <= 1000000)) {
    let taxPercent = (price * 5) / 100;
    document.write(`<h1> The tax Percent on ${brand} is : ${taxPercent}</h1>`);
} else if (carName == "Audi" && (1000000 <= price && price <= 1500000)) {

    let taxPercent = (price * 10) / 100;
    document.write(`<h1> The tax percent on ${brand} is:${taxPercent}</h1>`);
} else if (carName == "Jaguar" && (1500000 <= price && price <= 2000000)) {
    let taxPercent = (price * 25) / 100;
    document.write(`<h1> The tax percent on ${brand} is : ${taxPercent}</h1>`);
} else if (carName== "Mercedes" && (2000000 <= price && price <= 2500000)) {
    let taxPercent = (price * 30) / 100;
    document.write(`<h1> The tax percent on ${brand} is : ${taxPercent}</h1>`);
}