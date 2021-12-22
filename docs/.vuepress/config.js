const { resolve } = require('path')
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

const themeColor = "#211b24"

module.exports = {
  title: "Wasabi Docs",
  description: "An archive of knowledge about Wasabi Wallet, an open-source, non-custodial and privacy-focused Bitcoin wallet for desktop.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: themeColor }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display:700&display=swap" }],
    ["meta", { name: "msapplication-TileColor", content: themeColor }],
    ["meta", { name: "theme-color", content: themeColor }],
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
          return `<details id="${slug}"><summary><a href="#${slug}" aria-hidden="true" class="header-anchor">#</a> <h4>${title}</h4></summary>`
        } else if (token.type === 'container_details_close') {
          return '</details>'
        }
      }
    }]
  ],
  chainWebpack (config) {
    return config.module
      .rule('md')
      .test(/\.md$/)
      .use(resolve(__dirname, './variables'))
        .loader(resolve(__dirname, './variables'))
        .end()
  },
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
    searchPlaceholder: 'Search the docs...',
    displayAllHeaders: false,
    sidebarDepth: 0,
    repo: "zkSNACKs/WasabiDoc",
    docsDir: "docs",
    editLinks: true,
    lastUpdated: 'Last Updated',
    algolia: {
      indexName: 'wasabiwallet',
      apiKey: 'c9d9b7688e0f9e6d0ed534655321a424',
      // See https://www.algolia.com/doc/api-reference/api-parameters/
      algoliaOptions: {
        hitsPerPage: 25
      },
      // See https://community.algolia.com/docsearch/behavior.html#autocompleteoptions
      autocompleteOptions: {
        openOnFocus: true
      }
    },
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
      },
      {
        text: "Glossary",
        link: "/glossary/"
      }
    ],

    sidebar: {
      "/why-wasabi/": [
        {
          title: "Why Privacy",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/why-wasabi/WhyPrivacyImportant.md",
            "/why-wasabi/WhyFinancialPrivacy.md",
            "/why-wasabi/LegalConcern.md"
          ]
        },
        {
          title: "Privacy in Bitcoin",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/why-wasabi/Coins.md",
            "/why-wasabi/AddressReuse.md",
            "/why-wasabi/TransactionGraph.md",
            "/why-wasabi/NetworkLevelPrivacy.md",
            "/why-wasabi/TransactionSurveillanceCompanies.md"
          ]
        }
      ],

      "/using-wasabi/": [
        {
          title: "Introducing Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/ELI5.md",
            "/using-wasabi/10Commandments.md"
          ]
        },
        {
          title: "Installing Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/InstallPackage.md",
            "/using-wasabi/BuildSource.md"
          ]
        },
        {
          title: "Using Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/WalletGeneration.md",
            "/using-wasabi/WalletLoad.md",
            "/using-wasabi/Receive.md",
            "/using-wasabi/CoinJoin.md",
            "/using-wasabi/Send.md",
            "/using-wasabi/ColdWasabi.md",
            "/using-wasabi/BitcoinFullNode.md"
          ]
        },
        {
          title: "Best Practices",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/PasswordBestPractices.md",
            "/using-wasabi/BackupBestPractices.md",
            "/using-wasabi/ChangeCoins.md"
          ]
        },
        {
          title: "Restoring Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/WalletRecovery.md",
            "/using-wasabi/RestoreElectrum.md",
            "/using-wasabi/PasswordFinder.md"
          ]
        },
        {
          title: "Advanced Installing Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/DeterministicBuild.md",
            "/using-wasabi/WasabiSetupVM.md",
            "/using-wasabi/WasabiSetupWhonix.md"
          ]
        },
        {
          title: "Advanced Using Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/using-wasabi/Daemon.md",
            "/using-wasabi/RPC.md",
            "/using-wasabi/PrivacyMode.md",
            "/using-wasabi/PayJoin.md",
            "/using-wasabi/Testnet.md",
            "/using-wasabi/LockScreen.md",
            "/using-wasabi/BIPs.md",
            "/using-wasabi/IndustryStandards.md"
          ]
        }
      ],

      "/building-wasabi/": [
        {
          title: "Contributing to Wasabi",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/building-wasabi/TechnicalOverview.md",
            "/building-wasabi/ContributionChecklist.md",
            "/building-wasabi/ContributionGame.md"
          ]
        },
        {
          title: "Advanced",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/building-wasabi/Security.md",
            "/building-wasabi/LICENSE.md",
            "/building-wasabi/Credits.md"
          ]
        },
        {
          title: "Research",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/building-wasabi/WasabiResearchClub.md"
          ]
        }
      ],

      "/FAQ/": [
        {
          title: "Frequently Asked Questions",
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
      ],

      "/glossary/": [
        {
          title: "Glossary",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/glossary/Glossary-GeneralBitcoin.md",
            "/glossary/Glossary-PrivacyWasabi.md"
          ]
        }
      ]
    }
  }
}
