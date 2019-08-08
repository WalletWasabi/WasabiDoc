// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
export default () => {
  // hackish way to open FAQ item after page initialization
  const { hash } = location

  if (hash) {
    window.setTimeout(() => {
      const el = document.getElementById(hash.substr(1))

      if (el && el.tagName.toLowerCase() === 'details') {
        el.setAttribute('open', true)
        const { offsetTop } = el
        const top = offsetTop - 70 // subtract navbar height
        window.scrollTo({ top })
      }
    }, 500)
  }
}
