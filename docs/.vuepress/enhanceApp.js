// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
export default () => {
  // hackish way to open FAQ item after page initialization
  const { hash } = location

  if (hash) {
    window.setTimeout(() => {
      const el = document.getElementById(hash.substr(1))
      const summary = el.parentNode
      if (el && summary && summary.tagName.toLowerCase() === 'summary') {
        const details = summary.parentNode
        if (details.tagName.toLowerCase() === 'details') {
          details.setAttribute('open', true)
          const { offsetTop } = details
          const top = offsetTop - 70 // subtract navbar height
          window.scrollTo({ top })
        }
      }
    }, 500)
  }
}
