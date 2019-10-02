import stickySidebar from 'sticky-sidebar'

let nav = new stickySidebar('.p.nav', {
  containerSelector: '.l.wrapper > .container',
  innerWrapperSelector: '.inner',
  stickyClass: 'affixed',
  topSpacing: 20,
  bottomSpacing: 20,
})
const toc = new stickySidebar('.p.toc', {
  containerSelector: '.l.wrapper > .container',
  innerWrapperSelector: '.inner',
  stickyClass: 'affixed',
  minWidth: 1280,
})

const mediaQuery = matchMedia('(max-width: 61.9375em)')  // 991px
const mediaQueryHandler = mq => {
  if (mq.matches) {
    nav.destroy()
  } else {
    nav.initialize()
  }
}

mediaQueryHandler(mediaQuery)
mediaQuery.addListener(mediaQueryHandler)