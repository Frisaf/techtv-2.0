import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("scripts")

	eleventyConfig.addFilter("formatDate", (dateObj, format = "d MMMM, yyyy") => {
		return DateTime.fromJSDate(dateObj).setLocale("sv").toFormat(format)
	})

	eleventyConfig.addFilter("itemLimit", function(array, maximum) {
    	return array.slice(0, maximum);
	});

	return {
		markdownTemplateEngine: "njk",
	}
};