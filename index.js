// @ts-check

const { languages, available } = require("./locales/index");

function generate (options = {
    locale: "en",
    delimiter: "-"
}) {
    const { locale, delimiter } = options
    const { adjectives, nouns } = languages[available.includes(locale) ? locale : "en"]
    return `${random(adjectives)}${delimiter}${random(nouns)}`
}

const random = (/** @type {string[]} */ words) => words[Math.floor(Math.random() * words.length)].toLocaleLowerCase()

module.exports.randomSlug = generate