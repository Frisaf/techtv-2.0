import { DateTime } from "luxon";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);

	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("scripts")

	eleventyConfig.addFilter("formatDate", (dateObj, format = "d MMMM, yyyy") => {
		return DateTime.fromJSDate(dateObj).setLocale("sv").toFormat(format)
	})

	eleventyConfig.addFilter("itemLimit", (array, maximum) => {
    	return array.slice(0, maximum);
	});

	eleventyConfig.addFilter("randomLimit", (array, maximum, currentPage) => {
		const pageArr = array.filter((page) => page.url !== currentPage);

		pageArr.sort(() => {
			return 0.5 - Math.random();
		});

		return pageArr.slice(0, maximum);
	})

	eleventyConfig.addFilter("exclude", (arr, exclude) => arr.filter(el => el !== exclude))

	return {
		markdownTemplateEngine: "njk",
	}
};