/* Create an array of objects representing different books. 
Each object should have properties for title, author, and genre, 
sort the array by author in alphabetical order and year of publication */ 
const booksArray = [
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      genre: "Magical realism",
      publicationDate: 1967
    },
    {
      title: "Love in the Time of Cholera",
      author: "Gabriel García Márquez",
      genre: "Magical realism",
      publicationDate: 1985
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopia",
      publicationDate: 1949
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romantic novel",
      publicationDate: 1813
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: 1954
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Southern Gothic",
      publicationDate: 1960
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Modernist novel",
      publicationDate: 1925
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian fiction",
      publicationDate: 1932
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age",
      publicationDate: 1951
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      genre: "Fantasy",
      publicationDate: 1950
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure novel",
      publicationDate: 1851
    },
    {
      title: "Bartleby, the Scrivener",
      author: "Herman Melville",
      genre: "Short story",
      publicationDate: 1853
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Gothic fiction",
      publicationDate: 1818
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: 1937
    },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      genre: "Science fiction",
      publicationDate: 1979
    },
    {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      genre: "Gothic fiction",
      publicationDate: 1847
    },
    {
      title: "The Shining",
      author: "Stephen King",
      genre: "Horror",
      publicationDate: 1977
    },
    {
      title: "It",
      author: "Stephen King",
      genre: "Horror",
      publicationDate: 1986
    }
];

const sortBooks = (books) => {
    const dateSortedBooks = books.sort((book1, book2) => book1.publicationDate - book2.publicationDate);
    const authorSortedBooks = dateSortedBooks.sort((book1, book2) => book1.author.localeCompare(book2.author));
    return authorSortedBooks;
};

console.log(sortBooks(booksArray))