
// Script For Single Page Appliction
export const section = document.querySelectorAll('section');
export const navBtn = document.querySelectorAll('.nav-bar a');

export const listPage =  () => {
  section[0].style.display = 'flex';
  section[1].style.display = 'none';
  section[2].style.display = 'none';
  navBtn[0].classList.add('green');
  navBtn[1].classList.remove('green');
  navBtn[2].classList.remove('green');
}

export const addPage = () => {
  section[0].style.display = 'none';
  section[1].style.display = 'flex';
  section[2].style.display = 'none';
  navBtn[0].classList.remove('green');
  navBtn[1].classList.add('green');
  navBtn[2].classList.remove('green');
}

export const contactPage = () => {
  section[0].style.display = 'none';
  section[1].style.display = 'none';
  section[2].style.display = 'flex';
  navBtn[0].classList.remove('green');
  navBtn[1].classList.remove('green');
  navBtn[2].classList.add('green');
}
