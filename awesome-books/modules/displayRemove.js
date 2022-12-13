const booksContainer = document.querySelector('#book-list');

// Function displayBooks.
const displayBooks = ({ title, author, id }) => {
  const newBook = document.createElement('div');
  newBook.id = id;
  newBook.className = 'book-wrapper';
  newBook.innerHTML = `
      <div class="book-info">
        <p>"${title}" </p>
        <p>by ${author}</p>
      </div>
      <button class="remove-btn ${id}">Remove</button>
    `;

  booksContainer.appendChild(newBook);

  // Delete Selected Book.
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const booksList = document.querySelectorAll('#book-list div');
      booksList.forEach((theBook) => {
        // Remove Book From Display.
        if (theBook.id === btn.classList[1]) {
          theBook.remove();
        }
        // Remove Books From Local Storage And Store Remaining Using Filter.
        const books = JSON.parse(localStorage.getItem('books'));
        localStorage.removeItem('books');
        const remainingBooks = books.filter((theBook) => {
          if (theBook.id !== JSON.parse(btn.classList[1])) {
            return true;
          }
          return false;
        });
        if (remainingBooks.length > 0) {
          localStorage.setItem('books', JSON.stringify(remainingBooks));
        }
      });
    });
  });
};

export default displayBooks;