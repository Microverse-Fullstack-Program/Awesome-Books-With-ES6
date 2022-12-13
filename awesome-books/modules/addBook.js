
import { Book } from './bookClass.js'
import { displayBooks } from './displayRemove.js'

const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBtn = document.querySelector('#add-book');
const errorMsg = document.querySelector('.error');

// Add A New Book.
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const id = Date.now();
  if (!title && !author) {
    errorMsg.innerHTML = 'Please enter book details';
    errorMsg.classList.add('active');
  } else {
    errorMsg.classList.remove('active');
    const addNewBook = new Book(title, author, id);
    let books = localStorage.getItem('books');
    if (books === null) {
      books = [];
    } else {
      books = JSON.parse(books);
    }
    books.push(addNewBook);
    localStorage.setItem('books', JSON.stringify(books));
    bookTitle.value = '';
    bookAuthor.value = '';
    // Display New Book
    const newBook = {title, author, id}
    displayBooks(newBook);
  }
});