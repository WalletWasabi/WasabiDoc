// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
const openDetails = hash => {
  const el = document.getElementById(hash.substr(1))
  console.log(el)
  if (el && el.tagName.toLowerCase() === 'details') {
    el.setAttribute('open', true)
    const { offsetTop } = el
    window.scrollTo({ top: offsetTop })
  }
}

export default ({ router }) => {
  // initial page rendering
  document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => openDetails(location.hash), 500)
  })

  // sidebar link clicks
  document.addEventListener('click', e => {
    if (e.target.matches('.sidebar-link')) {
      openDetails(location.hash)
    }
  })
}
