module.exports = {
  title: 'Wasabi Documentation',
  description: 'Wasabi is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.',

  themeConfig: {
    repo: 'zkSNACKs/WasabiDoc',
    editLinks: true,

    serviceWorker: {
      updatePopup: true
    },

    nav: [
      {
        text: 'Getting started',
        link: '/GettingStarted',
      },
      {
        text: 'Install',
        items: [
          {
            text: 'Package',
            link: '/InstallPackage'
          },
          {
            text: 'Build from source',
            link: '/BuildSource'
          },
          {
            text: 'Deterministic build',
            link: '/DeterministicBuild'
          }
        ]
      },
      {
        text: 'FAQ',
        link: '/FAQ/',
      }
    ],

    sidebar: 'auto'
  }
}
