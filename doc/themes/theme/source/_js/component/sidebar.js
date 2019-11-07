import stickySidebar from 'sticky-sidebar'

/**
 * Sticky sidebar
 */

const nav = new stickySidebar('.l-sidebar', {
  containerSelector: '.l-wrapper_inner',
  innerWrapperSelector: '.l-sidebar_inner',
  stickyClass: '_affixed',
})

const mediaQuery = matchMedia('(max-width: 61.9375em)')  // 991px
const mediaQueryHandler = mq => {
  if (mq.matches) {
    nav._isActive = false
    nav.destroy()
  } else {
    nav._isActive = true
    nav.initialize()
  }
}

mediaQueryHandler(mediaQuery)
mediaQuery.addListener(mediaQueryHandler)

/**
 * Accordion
 */

const navTitles = document.querySelectorAll('.p-nav_title')

Array.from(navTitles).forEach(node => {
  node.addEventListener('click', () => {
    navTitles.forEach(node => node.classList.remove('_active'))
    Array.from(document.querySelectorAll('.p-nav_item._active')).forEach(node => node.classList.remove('_active'))
    node.classList.add('_active')

    node.nextSibling.classList.toggle('_open')

    if (nav._isActive) {
      nav.updateSticky()
    }
  })
})