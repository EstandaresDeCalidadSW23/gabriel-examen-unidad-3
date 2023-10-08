const saludo = require("../src/saludo");

test("Gabriel", function () {

    expect(saludo("Gabriel")).toEqual("Hola Gabriel!");
});

test("Benja", function () {

    expect(saludo("Benja")).toEqual("Hola Benja!");
});

test("Juan", function () {

    expect(saludo("Juan")).toEqual("Hola Juan!");
});

test("Mximiliano Prueba", function () {

    expect(saludo("Maximiliano")).toEqual("Hola Max!");
});

// Prueba de Maximiliano agregado de otra manera
test("Maximiliano prueba", function () {
    const name = "Maximiliano";

    const result = saludo(name);

    expect(result).toEqual("Hola Max!");
});

test.skip("Maximiliano", function () {

    expect(saludo("Maximiliano")).toLowercase("Hola Max!");
});

//Prueba de Kiko
test("Prueba de Federico", function () {
    expect(saludo("Federico")).toEqual("Hola Kiko!");
});

test("juan", function () {

    expect(saludo("juan")).toLowercase("Hola Juan!");
});

test("PABLO", function () {

    expect(saludo("PABLO")).toLowercase("Hola Pablo!");
});

test("mArtHA", function () {

    expect(saludo("mArtHA")).toLowercase("Hola Martha!");
});

test("Fulano", function () {

    expect(saludo("")).toEqual("Hola Fulano!");
    
    expect(saludo("    ")).toEqual("Hola Fulano!");
    
    expect(saludo(null)).toEqual("Hola Fulano!");
});