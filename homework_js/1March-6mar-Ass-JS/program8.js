const productDiscounts = [10, 15, 20, 30, 45, 50, 60]; 
let res=productDiscounts.filter((ele)=>ele%3==0 && ele%5==0)
console.log(res)