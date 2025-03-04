const groceries = [ 
    { name: "Milk", stock: 10 }, 
    { name: "Eggs", stock: 0 }, 
    { name: "Bread", stock: 5 } 
    ];

    let res=groceries.filter((ele)=>ele.stock>0)
    console.log(res)