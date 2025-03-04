const employees = [ 
    { name: "Siddharth", salary: 60000, department: "Engineering" }, 
    { name: "Kavita", salary: 45000, department: "Marketing" }, 
    { name: "Manoj", salary: 70000, department: "Engineering" } 
    ]

    let res=employees.filter((ele)=>ele.salary>=50000)

    console.log(res)