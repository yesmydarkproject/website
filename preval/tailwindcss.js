// @preval
// https://www.codingfeline.com/2021/04/28/tailwindcss-babel-preval/
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../tailwind.config");

const config = resolveConfig(tailwindConfig);

/**
 * @type {Record<"sm" | "md" | "lg" | "xl" | "2xl", string>}
 */
const screens = config.theme.screens;

module.exports = {
  screens,
};
