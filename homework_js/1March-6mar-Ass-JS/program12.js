const books = [ 
    { title: "Ramayana", year: 1999, rating: 4.5 }, 
    { title: "Mahabharata", year: 2005, rating: 3.8 }, 
    { title: "Bhagavad Gita", year: 2010, rating: 4.2 } 
    ]; 

    let res=books.filter((ele)=>ele.year>=2000 && ele.rating>=4)
    console.log(res)