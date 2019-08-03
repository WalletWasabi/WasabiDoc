module.exports = {
  title: "Wasabi Documentation",
  description: "Wasabi is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  plugins: [
    "@vuepress/back-to-top"
  ],
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
        link: "/why-wasabi/WhyPrivacyImportant.md"
      },
      {
        text: "Using Wasabi",
        link: "/using-wasabi/InstallPackage.md"
      },
      {
        text: "Building Wasabi",
        link: "/building-wasabi/TechnicalOverview.md"
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
            "/using-wasabi/ClientDeployment.md",
	    "/using-wasabi/BackendDeployment.md",
	    "/using-wasabi/AddressReuse.md",
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
            "/building-wasabi/Ports.md"
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
