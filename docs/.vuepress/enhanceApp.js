// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
const openDetails = (timeout = 150) => {
  setTimeout(() => { // wait for hash to change after link click
    const { hash } = location
    if (hash && hash.length) {
      setTimeout(() => {
        const el = document.getElementById(hash.substr(1))
        if (el && el.tagName.toLowerCase() === 'details') {
          el.setAttribute('open', true)
          const { offsetTop } = el
          window.scrollTo({ top: offsetTop })
        }
      }, timeout)
    }
  }, 150)
}

const openVideo = embedEl => {
  const lazyAttr = 'data-src'
  const iframe = embedEl.querySelector(`iframe[${lazyAttr}]`)
  if (iframe) {
    const src = iframe.getAttribute(lazyAttr)
    iframe.setAttribute('src', src)
  }
}

export default ({ router }) => {
  if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
    router.onReady(() => {
      const { app } = router

      // initial page rendering
      app.$once('hook:mounted', () => openDetails(500))

      document.addEventListener('click', e => {
        // faq details
        if (e.target.matches('.sidebar-link,.header-anchor,[class*="algolia"]')) {
          openDetails()
        }

        // youtube previews
        if (e.target.matches('.ytEmbed')) {
          openVideo(e.target)
        }
      })
    })
  }
}
