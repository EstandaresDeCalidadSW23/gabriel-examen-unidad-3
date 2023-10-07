const saludo = require("../src/saludo")

test("Gabriel", function () {
   
    expect(saludo("Gabriel")).toEqual("Hola Gabriel!");
});

