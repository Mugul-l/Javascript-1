const books=[
    {book:"Book1",publish:1999,genre:"History",edition:2020},
    {book:"Book2",publish:1989,genre:"Science",edition:2025},
    {book:"Book3",publish:2019,genre:"History",edition:2024},
    {book:"Book4",publish:2005,genre:"History",edition:2021},
    {book:"Book5",publish:1980,genre:"Mythology",edition:2020},
]

let res= books.filter((book)=> book.genre === "Science");
console.log(res);

res= books.filter((book)=>{
    return book.genre === "History" && book.publish >= 2000;
})
console.log(res);
