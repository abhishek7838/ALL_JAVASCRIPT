const users = [ 
    { name: "Aryan", email: "aryan@gmail.com" }, 
    { name: "Suresh", email: "suresh@yahoo.com" }, 
    { name: "Meena", email: "meena@gmail.com" } 
    ]; 

    let res=users.filter((ele)=>ele.email.includes('gmail'))
    console.log(res)