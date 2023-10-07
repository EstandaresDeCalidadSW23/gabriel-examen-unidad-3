const saludo = require("../src/saludo")

test("Gabriel", function () {

    expect(saludo("Gabriel")).toEqual("Hola Gabriel!");
});
test("Benja", function () {

    expect(saludo("Benja")).toEqual("Hola Benja!");
});
test("Juan", function () {

    expect(saludo("Juan")).toEqual("Hola Juan!");
});
test("Federico", function () {

    expect(saludo("Kiko")).toEqual("Hola Kiko!");
});

test("Maximiliano", function () {

    expect(saludo("Max")).toEqual("Hola Max!");
});

test("juan", function () {

    expect(saludo("Juan")).toEqual("Hola Juan!");
});

test("PABLO", function () {

    expect(saludo("Pablo")).toEqual("Hola Pablo!");
});


test("mArtHA", function () {

    expect(saludo("Martha")).toEqual("Hola Martha!");
});
test("Fulano", function () {

    expect(saludo("Fulano")).toEqual("Hola Fulano!");
});









