let start_number=parseInt(prompt("enter start number"))
let end_Number=parseInt(prompt("enter a end number"))
let sum=0   //3+4+5+6+7+8

for(let i=start_number;i<=end_Number;i++)
{
    sum+=i
}
document.write(`Sum: ${sum}`)