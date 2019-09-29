import stickySidebar from 'sticky-sidebar'

const nav = new stickySidebar('.p.nav', {
  containerSelector: '.l.wrapper > .container',
  innerWrapperSelector: '.inner',
  stickyClass: 'affixed',
  topSpacing: 20,
  bottomSpacing: 20,
  minWidth: 991,
})
const toc = new stickySidebar('.p.toc', {
  containerSelector: '.l.wrapper > .container',
  innerWrapperSelector: '.inner',
  stickyClass: 'affixed',
  minWidth: 1280,
})