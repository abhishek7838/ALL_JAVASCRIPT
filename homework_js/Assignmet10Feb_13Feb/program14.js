  
  let str1=prompt("enter a string for check to palindrom")
     let str2=""

     for(let i=str1.length-1;i>=0;i--)
     {
      str2+=str1[i]
     }
     if(str1==str2)
     {
      document.write("this is palindrom String")
     }
     else
     {
      document.write("this is not palindrom String")
     }