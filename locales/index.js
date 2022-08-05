// @ts-check

const { readdirSync, readFileSync } = require("fs");

class Locales {
    constructor() {

        this.available = readdirSync("./locales", {
            withFileTypes: true
        }).filter(value => value.isDirectory()).map(value => value.name)

        this.languages = {}

        this.available.forEach(locale => {
            try {
                const adjectives = parse(locale, "adjectives")
                const nouns = parse(locale, "nouns")
                this.languages[locale] = {
                    adjectives,
                    nouns
                }
            } catch (error) { }
        })

    }
}

const parse = (
    /** @type {string} */ locale, 
    /** @type {string} */ type
    ) => JSON.parse(readFileSync(`./locales/${locale}/${type}.json`).toString())

module.exports = new Locales()