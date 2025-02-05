let option = prompt("Login with : \n1. phone No \n2. Email \n3. Exit");

if (option == 1) {
    let phone = prompt("Enter your phone number ")
    let otp = prompt("Enter your OTP Code")
    if (phone == "8171617359" && otp == "1234") {
        document.write(`<h1> login successfully with phone number </h1>`)
    } else {
        document.write(`<h1> Invailed phone number and otp </h1>`)
    }

} else if (option == 2) {
    let email = prompt("Enter your Email ID  ")
    let pass = prompt("Enter your Password  ")
    if (email == "user@example.com" && pass == "password123") {
        document.write(`<h1> login successfully  with email id</h1>`)
    } else {
        document.write(`<h1> Invailed email and password </h1>`)
    }

} else {
    document.write(`<h1> Exiting the program. Have a nice day!"</h1>`)
}