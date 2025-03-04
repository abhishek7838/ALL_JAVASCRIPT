const orderIDs = [1001, 1002, 1002, 1003, 1004, 1004, 1005]; 
let res=orderIDs.filter((ele,ind,arr)=>arr.indexOf(ele)==ind)
console.log(res)