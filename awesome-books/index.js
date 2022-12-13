import { displayDateTime } from "./modules/Date.js";
import { displayBooks } from "./modules/displayRemove.js"
import {
  section,
  navBtn,
  listPage, 
  addPage, 
  contactPage,
} from "./modules/navButtons.js"

/* pages navigation */
navBtn[0].addEventListener('click', listPage);
navBtn[1].addEventListener('click', addPage);
navBtn[2].addEventListener('click', contactPage);

/* Onpage load or reload */
window.addEventListener('DOMContentLoaded', () => {
  // On Page Load, Display Books From Local Storage.
  const books = JSON.parse(localStorage.getItem('books'));
  if (books) {
    books.forEach((book) => {
      displayBooks(book);
    });
  }
  // ON Page lodd, Hide Sections
  section[1].style.display = 'none';
  section[2].style.display = 'none';
  // On Page Load, Display Date & Time
  displayDateTime ();
});
