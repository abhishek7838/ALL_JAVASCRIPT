let quiz = prompt(" Welcome Your  KBC Quiz start  Yes/No  ")
if (quiz == "Yes") {
    let ans1 = prompt("1- which langauage is used for development? \nA. python  \nB. Java  \nC. Javascript \nD. C++");
    if (ans1 == "C" || ans1 == "skip") {
        //document.write(` <h1>right answer  </h1>`);

    } else {
        document.write(` <h1> 1 wrong Answer 100000 point less </h1> `)


    }
    // question 2
    let ans2 = prompt("2- which langauage is used for Bckend ? \nA. HTML  \nB. Java  \nC. CSS \nD. React");
    if (ans2 == "B" || ans2 == "skip") {
        // document.write(` <h1>right answer  </h1>`);


    } else {
        document.write(` <h1>2 wrong Answer 10000 point   less </h1> `)
    }

    //question 3
    let ans3 = prompt("3- What is the keyword used to declare an interface in Java? \nA. Interface  \nB. Class  \nC. Abstract \nD. Extends");
    if (ans3 == "A" || ans3 == "skip") {
        // document.write(` <h1>right answer  </h1>`);


    } else {
        document.write(` <h1> 3 wrong Answer 100000 point less </h1> `)
    }
    //question 4
    let ans4 = prompt("4-What is the purpose of the this keyword in Java?\nA. Refer to the current class  \nB. Refer to the parent class  \nC. Refer to the current object \nD.Refer to a static method");
    if (ans4 == "C" || ans4 == "skip") {
        // document.write(` <h1>right answer  </h1>`);


    } else {
        document.write(` <h1> 4 wrong Answer 100000 point less  </h1> `)
    }

    // question 5 
    let ans5 = prompt("5-What is the purpose of encapsulation in Java?\nA.Protect data integrity \nB. Improve code readability  \nC. Increase code complexity \nD.Optimize program performance");
    if (ans5 == "A" || ans5 == "skip") {
        document.write(` <h1><center> All Currect Answer !! Win 500000 Points  </center> </h1>`);

    } else {
        document.write(`<h1> 5 wrong Answer 100000 point  less  </h1> `)
    }



} else {
    document.write(` <h1><center>Quiz end  Try to Net Time </center></h1> `)
}
