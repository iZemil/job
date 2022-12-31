// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// themes: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Javascript Job',
	tagline: 'JS Interview',
	url: 'https://izemil.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'izemil', // Usually your GitHub org/user name.
	projectName: 'job', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'interview',
					routeBasePath: 'interview',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/izemil/job/edit/master/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Job',
				logo: {
					alt: 'JS Site Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'getting-started',
						position: 'left',
						label: 'Interview',
					},
					{
						href: 'https://github.com/iZemil/job',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Tutorial',
				// 				to: '/docs/intro',
				// 			},
				// 		],
				// 	},
				// ],
				copyright: `Copyright © ${new Date().getFullYear()} job.js.org built by zemil 🐝`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

// docs: https://docusaurus.io/docs
module.exports = config;
