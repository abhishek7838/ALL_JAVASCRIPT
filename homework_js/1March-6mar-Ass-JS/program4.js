const responses = [0, "Yes", "", undefined, null, "No", NaN, false, "Maybe"];
let res=responses.filter((ele)=> ele.length>=2)
console.log(res)