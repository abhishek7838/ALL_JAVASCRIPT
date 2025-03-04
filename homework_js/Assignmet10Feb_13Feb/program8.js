let num=  parseInt(prompt("enter a number to find factorial"))
 
let fact_Mul=1

for(let i=num;i>=1;i--)
{
   fact_Mul*=i
}
document.write(`Factorial of ${num}=${fact_Mul}`)