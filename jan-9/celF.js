let num1=40
let num2=60
let num3=80
if(num1>num2 && num1>num3)
{
    if(num2>num3)
    {
        console.log(num2)
    }
    else{
        console.log(num1)
    }
}
else if(num2>num1 && num2>num3)
{
    if(num1>num3)
    {
        console.log(num1)
    }
    else
    {
        console.log(num3)
    }
        
}
else
{
    console.log(num1)
}
