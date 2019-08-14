// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
const openDetails = hash => {
  const el = document.getElementById(hash.substr(1))

  if (el && el.tagName.toLowerCase() === 'details') {
    el.setAttribute('open', true)
    const { offsetTop } = el
    window.scrollTo({ top: offsetTop })
  }
}

const openVideo = embedEl => {
  const lazyAttr = 'data-src'
  const iframe = embedEl.querySelector(`iframe[${lazyAttr}]`)
  if (iframe) {
    const src = iframe.getAttribute(lazyAttr)
    console.log(src)
    iframe.setAttribute('src', src)
  }
}

export default () => {
  if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
    // initial page rendering
    document.addEventListener('DOMContentLoaded', () => {
      window.setTimeout(() => openDetails(location.hash), 500)
    })

    document.addEventListener('click', e => {
      // sidebar link clicks
      if (e.target.matches('.sidebar-link')) {
        openDetails(location.hash)
      }

      // youtube previews
      if (e.target.matches('.ytEmbed')) {
        openVideo(e.target)
      }
    })
  }
}
