let age = prompt("Enter your age: ")
let qualification = prompt("Enter your graduation Qualification:")
let nationality = prompt("Enter your Nationality :")


if (age >= 21 && age <= 32) {
    if (qualification == "Yes" || qualification == "YES" || qualification == "yes" && nationality == "Indian" || nationality == "indian") {
        //document.write(`<h1>if eligible, proceed to Prelims.</h1>`)
        let prelimsScore = prompt("Enter your  Prelims score more then 200 :")
        if (prelimsScore >= 200) {
            //  document.write(`<h1> proceed to Mains. </h1>`)
            let mainsScore = prompt("Enter your Mains score more then 600:")
            if (mainsScore >= 600) {
                // document.write(`<h1> proceed to Interview. </h1>`)
                let interiewScore = prompt("Enter your Mains score  more then 1000:")
                if (interiewScore >= 1000) {
                    document.write(`<h1> Congratulations! You have cleared the UPSC  </h1>`)

                } else {
                    document.write(`<h1> You failed the Interview. </h1>`)
                }

            } else {
                document.write(`<h1> You failed the Mains.. </h1>`)
            }
        } else {
            document.write(`<h1> You failed the Prelims.. </h1>`)
        }

    } else {
        document.write(`<h1> if ineligible, display the reason for ineligibility.</h1>`)

    }



} else {
    document.write(`<h1> Invailed input </h1>`)

} 
