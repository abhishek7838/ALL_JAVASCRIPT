

let word1="Dreamer infotech"
 let str=""
 let k=0
  for(let i=0;i<word1.length;i++)
  {
    if(word1[i]=="m" || word1[i]=='i')
   {
    continue
   }
   str+=word1[i]
  }
  console.log(str)
 