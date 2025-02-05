let marks = Number(prompt("Enter the  Marks number:"))
function grade(marks) {
    if (marks >= 90 && marks <= 100) {
        document.write(`grade A :${marks}`);

    } else if (marks >= 80 && marks <= 89) {
        document.write(`grade B: ${marks}`)

    } else if (marks >= 70 && marks <= 79) {
        document.write(`grade C :${marks}`)

    } else if (marks >= 60 && marks <= 69) {
        document.write(`grade D : ${marks}`)

    } else if (marks >= 50 && marks <= 59) {
        document.write(`grade E :${marks}`)

    } else if (marks >= 0 && marks <= 49) {
        document.write(`Fail `)

    } else {
        document.write(`nvalid Marks:${marks} `)
    }
}
grade(marks)