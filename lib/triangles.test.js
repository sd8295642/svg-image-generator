const Triangle = require("./triangles")
describe("triangle", () => {
  test("renders a triangle with the given input", () => {
    const shape = new Triangle('blue', 'SVG', 'white')
    
    expect(shape.render()).toEqual(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>'
    )
  })
})
