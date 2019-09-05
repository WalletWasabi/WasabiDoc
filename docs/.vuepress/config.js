const { slugify } = require('@vuepress/shared-utils')
const customBlock = require('markdown-it-custom-block')

const youtubeEmbed = (id, path) => `
  <div class="ytEmbed" data-id="${id}" style="background-image:url(https://img.youtube.com/vi/${id}/hqdefault.jpg);">
    <iframe
      title="YouTube ${id}"
      data-src="https://www.youtube-nocookie.com/embed/${path}&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0"
      frameborder="0"
      allow="autoplay;encrypted-media;picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>`

module.exports = {
  title: "Wasabi",
  description: "This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display:700&display=swap" }]
  ],
  plugins: [
    "@vuepress/back-to-top",
    ["container", {
      type: "details",
      render (tokens, idx) {
        const token = tokens[idx]
        // turn details headline into summary
        if (token.type === 'container_details_open') {
          const next = tokens[idx + 1]
          const match = token.info.trim().match(/^details\s+(.*)$/)
          let title = match && match[1]
          if (next.type === 'heading_open' && !title) {
            const headContent = tokens[idx + 2]
            const headClose = tokens[idx + 3]
            // hide headline and its contents
            next.hidden = headClose.hidden = headContent.hidden = true
            headContent.children = []
            // extract title
            title = headContent.content || ''
          } else {
            title = ''
          }
          const slug = slugify(title)
          return `<details id="${slug}"><summary><a href="#${slug}" aria-hidden="true" class="header-anchor">#</a> ${title}</summary>`
        } else if (token.type === 'container_details_close') {
          return '</details>'
        }
      }
    }]
  ],
  markdown: {
    extendMarkdown (md) {
      md.use(customBlock, {
        youtube (arg) {
          const [id, start] = arg.split(',')
          const path = start ? `${id}?start=${start}` : `${id}?`
          return youtubeEmbed(id, path)
        },
        youtubePlaylist (arg) {
          const [id, video] = arg.split(',')
          const path = `${video || ''}?listType=playlist&list=${id}`
          return youtubeEmbed(video || id, path)
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
            "/why-wasabi/10Commandments.md",
            "/why-wasabi/TransactionSurveillanceCompanies.md"
          ]
        }
      ],
      "/using-wasabi/": [
        {
          title: "Installing Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/InstallPackage.md",
            "/using-wasabi/BuildSource.md",
            "/using-wasabi/DeterministicBuild.md",
          ]
        },
	{
          title: "Using Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/WalletGeneration.md",
            "/using-wasabi/PasswordFinder.md",
            "/using-wasabi/Daemon.md",
            "/using-wasabi/BIP.md",
          ]
        },
	{
          title: "Privacy Best Practices",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/AddressReuse.md",
            "/using-wasabi/LostPassword.md",
            "/using-wasabi/NetworkLevelPrivacy.md",
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
