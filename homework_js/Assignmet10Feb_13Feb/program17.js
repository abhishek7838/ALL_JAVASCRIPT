let str=prompt("enter a string to print duplicate char")
        //abhishek pratap singh

let dupli=[]
let dupli1=[]
for(let i=0;i<str.length;i++)
{
    for(let j=i+1;j<str.length;j++)
    {
        if(str[i]==str[j])
        {
            dupli.push(str[i])
            

        }
    }
}


for(let i=0;i<dupli.length;i++)
{
    
    for(let j=i+1;j<dupli.length;j++)
    {
        
        if(dupli[i]==dupli[j])
        {
            dupli[j]='o'
        }
    }
}
for(let i=0;i<dupli.length;i++)
{
    if(dupli[i]!='o')
    {
        document.write(`${dupli[i]},`) 
    }
}

