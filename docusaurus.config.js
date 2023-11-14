// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// themes: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Javascript Job',
	tagline: 'JS Interview',
	url: 'https://job.js.org',
	baseUrl: '/',
	trailingSlash: true,
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
					path: './interview',
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/izemil/job/edit/master/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				gtag: {
					trackingID: 'G-STTJ9HV6X9',
					anonymizeIP: true,
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
						href: '/interview',
						position: 'left',
						label: 'Interview',
					},
					{
						href: '/algorithms',
						position: 'left',
						label: 'Algorithms',
					},

					{
						href: 'https://github.com/iZemil/job/discussions/1',
						label: 'Contribute',
						position: 'right',
					},
					{
						href: 'https://github.com/iZemil/job/',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Questions',
						items: [
							{
								label: 'Javascript',
								to: '/questions/javascript/',
							},
							{
								label: 'Typescript',
								to: '/questions/typescript/',
							},
							{
								label: 'Frontend',
								to: '/questions/frontend/',
							},
							{
								label: 'ReactJS',
								to: '/questions/reactjs/',
							},
							{
								label: 'NodeJS',
								to: '/questions/nodejs/',
							},
						],
					},
					{
						title: 'Tech Tasks',
						items: [
							{
								label: 'Easy',
								to: '/category/easy-tasks/',
							},
							{
								label: 'Medium',
								to: '/category/medium-tasks/',
							},
							{
								label: 'Hard',
								to: '/category/hard-tasks/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} job.js.org built by zemil 🐝`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			metadata: [{ property: 'og:image', content: 'https://job.js.org/img/logo.png' }],
		}),
	themes: ['@docusaurus/theme-live-codeblock'],
	headTags: [
		{
			tagName: 'script',
			attributes: {
				async: true,
				src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6539612495903206',
				crossorigin: 'anonymous',
			},
		},
	],
	scripts: [],
};

// docs: https://docusaurus.io/docs
module.exports = config;
