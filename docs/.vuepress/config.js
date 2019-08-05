const customBlock = require('markdown-it-custom-block')
const youtubeEmbed = path => `<div class="ytEmbed"><iframe src="https://www.youtube-nocookie.com/embed/${path}" frameborder="0" allow="autoplay;encrypted-media;picture-in-picture" allowfullscreen></iframe></div>`

module.exports = {
  title: "Wasabi",
  description: "Wasabi is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display:700&display=swap" }]
  ],
  plugins: [
    "@vuepress/back-to-top",
    ["container", {
      type: "details",
      before: title => `<details><summary>${title}</summary>`,
      after: '</details>'
    }],
  ],
  markdown: {
    extendMarkdown (md) {
      md.use(customBlock, {
        youtube (arg) {
          const [id, start] = arg.split(',')
          const path = start ? `${id}?start=${start}` : id
          return youtubeEmbed(path)
        },
        youtubePlaylist (arg) {
          const [id, index = 1] = arg.split(',')
          const path = `videoseries?list=${id}&index=${index}`
          return youtubeEmbed(path)
        }
      })
    }
  },
  themeConfig: {
    logo: "/Logo_without_text.png",
    displayAllHeaders: false,
    sidebarDepth: 0,
    repo: "zkSNACKs/WasabiDoc",
    docsDir: "docs",
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: "Why Wasabi",
        link: "/why-wasabi/"
      },
      {
        text: "Using Wasabi",
        link: "/using-wasabi/"
      },
      {
        text: "Building Wasabi",
        link: "/building-wasabi/"
      },
      {
        text: "FAQ",
        link: "/FAQ/"
      }
    ],
    sidebar: {
      "/why-wasabi/": [
        {
          title: "Why Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/why-wasabi/WhyPrivacyImportant.md",
            "/why-wasabi/BitcoinPrivacy.md",
            "/why-wasabi/10Commandments.md"
          ]
        }
      ],
      "/using-wasabi/": [
        {
          title: "Using Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/InstallPackage.md",
            "/using-wasabi/BuildSource.md",
            "/using-wasabi/DeterministicBuild.md",
            "/using-wasabi/AddressReuse.md",
            "/using-wasabi/NetworkLevelPrivacy.md",
            "/using-wasabi/BIP.md",
            "/using-wasabi/PasswordFinder.md",
            "/using-wasabi/PayToEndPoint.md"
          ]
        }
      ],
      "/building-wasabi/": [
        {
          title: "Building Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/building-wasabi/TechnicalOverview.md",
            "/building-wasabi/ContributionChecklist.md",
            "/building-wasabi/Dojo.md",
            "/building-wasabi/ToDo.md",
            "/building-wasabi/CodingConventions.md",
            "/building-wasabi/DemoGuide.md",
            "/building-wasabi/ContributionGame.md",
            "/building-wasabi/Security.md",
            "/building-wasabi/CodeCoverage.md",
            "/building-wasabi/ManualTesting.md",
            "/building-wasabi/HardwareWalletTestingGuide.md",
            "/building-wasabi/HowToDebug.md",
            "/building-wasabi/Ports.md",
            "/building-wasabi/LICENSE.md"
          ]
        }
      ],
      "/FAQ/": [
        {
          title: "FAQ",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/FAQ/FAQ-Introduction.md",
            "/FAQ/FAQ-Installation.md",
            "/FAQ/FAQ-UseWasabi.md",
            "/FAQ/FAQ-GeneralBitcoinPrivacy.md",
            "/FAQ/FAQ-Contribution.md"
          ]
        }
      ]
    }
  }
}
