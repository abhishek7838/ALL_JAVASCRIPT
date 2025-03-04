const students = [ 
    { name: "Neha", gpa: 3.5 }, 
    { name: "Rahul", gpa: 2.8 }, 
    { name: "Anjali", gpa: 3.9 } 
    ]; 

    let res=students.filter((ele)=>ele.gpa>=3.5)
    console.log(res)