
let num=9

let arr=[0,1]
let k=1
let sum
for(let i=0;i<num;i++)
{
    sum=arr[i]+arr[k++]
    arr[k]=parseInt(sum)
}
for(let i=0;i<num;i++)
{
    console.log(arr[i])
}