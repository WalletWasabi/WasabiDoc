import resolve from 'path'
import defaultTheme from '@vuepress/theme-default'
import slugify from '@vuepress/shared-utils'
import searchPlugin from '@vuepress/plugin-search'
import palettePlugin from '@vuepress/plugin-palette'

const themeColor = "#211b24"

export default {
    title: "Wasabi Docs",
    description: "An archive of knowledge about Wasabi Wallet, an open-source, non-custodial and privacy-focused Bitcoin wallet for desktop.",
    extendsMarkdown: (md) => {

        const render = md.renderer.render;

        const variables = {
            currentVersion: '2.0.5',
            dotnetVersion: '8.0',
            zksnacksPublicKeyFingerprint: '6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E'
        }

        md.renderer.render = (...args) => {
            // Render markdown.
            const html = render.call(md, ...args);
            // Replace variables.
            let modifiedHtml = Object.keys(variables)
                .reduce((result, variable) => result.replaceAll('${'+ variable +'}', variables[variable]), html);

            return modifiedHtml;
        };
    },
    theme: defaultTheme({
        logo: "/Logo_without_text_dark.png",
        logoDark: "/Logo_without_text.png",
        docsRepo: 'https://github.com/zkSNACKs/WasabiDoc',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinks: true,
        contributors: false,
        colorMode: 'dark',
        //lastUpdated: 'Last Updated',
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
        head: [
            ["link", {
                rel: "icon",
                href: "/favicon.ico"
            }],
            ["link", {
                rel: "apple-touch-icon",
                href: "/apple-touch-icon.png",
                sizes: "180x180"
            }],
            ["link", {
                rel: "manifest",
                href: "/site.webmanifest"
            }],
            ["link", {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: themeColor
            }],
            ["link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display:700&display=swap"
            }],
            ["meta", {
                name: "msapplication-TileColor",
                content: themeColor
            }],
            ["meta", {
                name: "theme-color",
                content: themeColor
            }],
        ],
        navbar: [{
            text: "Getting Started",
            link: "/getting-started/"
        }, {
            text: "Why Wasabi",
            link: "/why-wasabi/"
        }, {
            text: "Using Wasabi",
            link: "/using-wasabi/"
        }, {
            text: "Building Wasabi",
            link: "/building-wasabi/"
        }, {
            text: "FAQ",
            link: "/FAQ/"
        }, {
            text: "Glossary",
            link: "/glossary/"
        }],
        sidebar: {
            "/why-wasabi/": [{
                text: "Why Privacy",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/why-wasabi/WhyPrivacyImportant.md",
                    "/why-wasabi/WhyFinancialPrivacy.md",
                    "/why-wasabi/LegalConcern.md"
                ]
            }, {
                text: "Privacy in Bitcoin",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/why-wasabi/Coins.md",
                    "/why-wasabi/AddressReuse.md",
                    "/why-wasabi/TransactionGraph.md",
                    "/why-wasabi/NetworkLevelPrivacy.md",
                    "/why-wasabi/TransactionSurveillanceCompanies.md"
                ]
            }],

            "/using-wasabi/": [{
                text: "Introducing Wasabi",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/using-wasabi/ELI5.md"
                ]
            }, {
                text: "Installing Wasabi",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/using-wasabi/InstallPackage.md",
                ]
            }, {
                text: "Using Wasabi",
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
            }, {
                text: "Best Practices",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/using-wasabi/PasswordBestPractices.md",
                    "/using-wasabi/BackupBestPractices.md",
                    "/using-wasabi/ChangeCoins.md"
                ]
            }, {
                text: "Restoring Wasabi",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/using-wasabi/WalletRecovery.md",
                    "/using-wasabi/RestoreElectrum.md",
                    "/using-wasabi/PasswordFinder.md"
                ]
            }, {
                text: "Advanced Installing Wasabi",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/using-wasabi/BuildSource.md",
                    "/using-wasabi/DeterministicBuild.md",
                    "/using-wasabi/WasabiSetupVM.md"
                ]
            }, {
                text: "Advanced Using Wasabi",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/using-wasabi/StartupParameters.md",
                    "/using-wasabi/Daemon.md",
                    "/using-wasabi/RPC.md",
		    "/using-wasabi/DiscreetMode.md",
                    "/using-wasabi/PayJoin.md",
                    "/using-wasabi/Testnet.md",
                    "/using-wasabi/BIPs.md"
                ]
            }],

            "/building-wasabi/": [{
                text: "Contributing to Wasabi",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/building-wasabi/ContributionChecklist.md"
                ]
            }, {
                text: "Advanced",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/building-wasabi/Security.md",
                    "/building-wasabi/LICENSE.md"
                ]
            }],

            "/FAQ/": [{
                text: "Frequently Asked Questions",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/FAQ/FAQ-Introduction.md",
                    "/FAQ/FAQ-Installation.md",
                    "/FAQ/FAQ-UseWasabi.md",
                    "/FAQ/FAQ-GeneralBitcoinPrivacy.md",
                    "/FAQ/FAQ-Contribution.md"
                ]
            }],

            "/glossary/": [{
                text: "Glossary",
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    "/glossary/Glossary-GeneralBitcoin.md",
                    "/glossary/Glossary-PrivacyWasabi.md"
                ]
            }]
        },
    }),
    plugins: [
        "@vuepress/back-to-top", ["container", {
            type: "details",
            render(tokens, idx) {
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
        }],
        searchPlugin({
            // getExtraFields: (page) => page.frontmatter.tags,
            maxSuggestions: 15,
            hotKeys: ['s', '/'],
            locales: {
                '/': {
                    placeholder: 'Search...',
                }
            }
        }),
        palettePlugin({
          preset: 'sass'
        })
    ]
}