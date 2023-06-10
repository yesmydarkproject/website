// @preval
// https://www.codingfeline.com/2021/04/28/tailwindcss-babel-preval/
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../../../tailwind.config");

const config = resolveConfig(tailwindConfig);

module.exports = {
  screens: config.theme.screens,
};
