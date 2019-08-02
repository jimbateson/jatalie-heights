const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = function(eleventyConfig) {
	'use strict';

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addFilter('dateFilter', dateFilter);
	eleventyConfig.addFilter('markdownFilter', markdownFilter);
	eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

	eleventyConfig.addPlugin(syntaxHighlightPlugin, {
		templateFormats: "md"
	});

	templateFormats: ["html", "md", "njk"];

	eleventyConfig.addPassthroughCopy("dist");
	eleventyConfig.addPassthroughCopy("assets/images");
	eleventyConfig.addPassthroughCopy("favicons");
	eleventyConfig.addPassthroughCopy("sw.js");

	/* Responsive image shortcode for large header images (homepage, walks, list, single walks) */
	/* Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars) */
	eleventyConfig.addShortcode("heroImage", function (mobileUrl, tabletUrl, desktopUrl, largeDesktopUrl, imageAlt) {
		return `<picture class="banner-hero">
					<source srcset="${largeDesktopUrl}" media="(min-width: 1220px)">
					<source srcset="${desktopUrl}" media="(min-width: 1024px)">
					<source srcset="${tabletUrl}" media="(min-width: 768px)">
					<img src="${mobileUrl}" alt="${imageAlt}">
				</picture>`;
	});

	/* Markdown */
	// let markdownIt = require("markdown-it");
	// let markdownItAnchor = require("markdown-it-anchor");
	// let options = {
	// 	html: true,
	// 	breaks: true,
	// 	linkify: true
	// };
	// let opts = {
	// 	permalink: true,
	// 	slugify: function(s) {
	// 		return encodeURIComponent(String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, '').trim().toLowerCase().replace(/\s+/g, '-'));
	// 	},
	// 	permalinkClass: "direct-link",
	// 	permalinkSymbol: "#",
	// 	level: [1,2,3,4]
	// };

	// eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));
};
