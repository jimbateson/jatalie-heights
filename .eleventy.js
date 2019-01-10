const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
	'use strict';

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addPlugin(syntaxHighlightPlugin, {
		templateFormats: "md"
	});

	eleventyConfig.addPassthroughCopy("dist");
	eleventyConfig.addPassthroughCopy("assets/images");
	eleventyConfig.addPassthroughCopy("favicons");

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
