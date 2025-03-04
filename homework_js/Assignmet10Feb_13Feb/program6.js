

let start_num=parseInt(prompt("enter a start number of range "))
let end_num=parseInt(prompt("enter end number of range"))

let mul=1     // 2*3*4*5=120

for(let i=start_num;i<=end_num;i++)
{
    mul*=i
}
document.write(`multiply start from ${start_num} to ${end_num}=${mul}`)