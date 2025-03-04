let str=prompt("enter a string to see cons and vowel")
let vowell=[]
let consonantt=[]
for(let i=0;i<str.length;i++)
{
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='i'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U')
    {
       vowell.push(str[i])
    }
    else
    {
        consonantt.push(str[i])
    }
}
document.write(`Vowel=${vowell}<br>`)
document.write(`Consonant=${consonantt}`)
