const button = document.querySelector('.l.header .button')
const nav = document.querySelector('.p.nav')

button.addEventListener('click', () => {
  nav.style.height = nav.style.height === '' || parseInt(nav.style.height) === 0 ? `${nav.scrollHeight}px` : 0
})