const { randomSlug } = require("./index")

test("Generates random slug", () => {
    console.log(randomSlug())
    expect(randomSlug()).not.toBeUndefined()
})