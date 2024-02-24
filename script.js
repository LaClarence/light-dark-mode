const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const SAVED_THEME = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const properties = {
  nav: {
    dark: 'rgb(0 0 0 / 50%)',
    light: 'rgb(255 255 255 / 50%)',
  },
  textMode: {
    dark: 'rgb(255 255 255 / 50%)',
    light: 'rgb(0 0 0 / 50%)'
  },
  toggleIcon: {
    text: {
      dark: 'Dark Mode',
      light: 'Light Mode'
    },
    icons: {
      dark: { from: 'fa-sun', to: 'fa-moon' },
      light: { from: 'fa-moon', to: 'fa-sun' }
    }
  }
};

function imagesTheme(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function toggleDarkLightTheme(theme) {
  nav.style.backgroundColor = properties.nav[theme];
  textBox.style.backgroundColor = properties.textMode[theme];
  toggleIcon.children[0].textContent = properties.toggleIcon.text[theme];
  toggleIcon.children[1].classList.replace(properties.toggleIcon.icons[theme].from, properties.toggleIcon.icons[theme].to);
  imagesTheme(theme);
}

function switchTheme(event) {
  let themeToApply = event.target.checked ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute('data-theme', themeToApply);
  localStorage.setItem(SAVED_THEME, themeToApply);
  toggleDarkLightTheme(themeToApply);
}

toggleSwitch.addEventListener('change', switchTheme);

const themeSaved = localStorage.getItem(SAVED_THEME);
if (themeSaved) {
  document.documentElement.setAttribute('data-theme', themeSaved);
  if (themeSaved === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightTheme(DARK_THEME);
  }
}
