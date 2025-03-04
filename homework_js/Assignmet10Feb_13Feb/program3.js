let numb=parseInt(prompt("enter a number"))
let start_num=parseInt(prompt("enter start number"))
let end_num=parseInt(prompt("enter end number"))

for(let i=start_num;i<=end_num;i++)
{
    document.write(`${i}X${numb}=${i*numb}<br>`)
}