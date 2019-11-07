const button = document.querySelector('.s-menu')
const item = document.querySelector('.l-sidebar')

button.addEventListener('click', () => {
  if (item.classList.contains('_open')) {
    const transition = item.style.transition
    item.style.transition = ''

    requestAnimationFrame(() => {
      item.style.height = `${item.scrollHeight}px`
      item.style.transition = transition

      requestAnimationFrame(() => {
        item.style.height = ''
      })
    })
  } else {
    item.style.height = `${item.scrollHeight}px`

    item.addEventListener('transitionend', function end() {
      item.removeEventListener('transitionend', end)
      item.style.height = 'auto'
    })
  }

  item.classList.toggle('_open')
})