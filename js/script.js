const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');
const themeToggle = document.querySelector('#themeToggle');
const dateButton = document.querySelector('#dateButton');
const navItems = document.querySelectorAll('.nav-item');
const dateRanges = ['Last 7 days', 'Last 30 days', 'Last 90 days'];
let dateRangeIndex = 1;

const savedTheme = localStorage.getItem('northstar-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☾';
  themeToggle.setAttribute('aria-label', 'Switch to light mode');
}

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', sidebar.classList.contains('open'));
});

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  themeToggle.textContent = isDark ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  localStorage.setItem('northstar-theme', isDark ? 'dark' : 'light');
});

dateButton.addEventListener('click', () => {
  dateRangeIndex = (dateRangeIndex + 1) % dateRanges.length;
  dateButton.firstChild.textContent = `${dateRanges[dateRangeIndex]} `;
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    item.classList.add('active');
    sidebar.classList.remove('open');
  });
});
