import menuCardsTpl from   './templates/menu-cards.hbs';
import menuCard from './menu.json';
import './sass/main.scss';

const refs = {
     body: document.querySelector('body'),
     menuItems : document.querySelector('.js-menu'),
     themeSwitch: document.querySelector('.theme-switch__toggle'),
   
}

refs.menuItems.insertAdjacentHTML('beforeend', menuCardsTpl(menuCard));



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = function() {
  if (refs.themeSwitch.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
    return;
  }
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
};

const savedTheme = function() {
  if (localStorage.getItem('Theme') === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.themeSwitch.checked = true;
  }
};

refs.themeSwitch.addEventListener('click', themeSwitcher);
savedTheme();