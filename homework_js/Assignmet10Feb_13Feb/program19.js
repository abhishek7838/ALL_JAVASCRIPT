let str1="abhishek"
let str2="shubham"
let dupChar=[]
for(let i=0;i<str1.length;i++)
{
    for(let j=0;j<str2.length;j++)
    {
        if(str1[i]==str2[j])
        {
            dupChar.push(str1[i])

        }
    }
}

for(let i=0;i<dupChar.length;i++)
    {
       
        for(let j=i+1;j<dupChar.length;j++)
        {
            if(dupChar[i]==dupChar[j])
            {
                dupChar[j]='o'
            }
        }
    }

    for(let i=0;i<dupChar.length;i++)
        {
            if(dupChar[i]!='o')
            {
                document.write(`${dupChar[i]},`) 
            }
        }