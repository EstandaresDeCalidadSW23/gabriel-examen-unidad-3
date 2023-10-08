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

test("Maximiliano", function () {
  expect(saludo("Maximiliano")).toEqual("Hola Max!");
});

//Prueba de Kiko
test("Federico", function () {
  expect(saludo("Federico")).toEqual("Hola Kiko!");
});

test("juan", function () {
  expect(saludo("juan")).toEqual("Hola Juan!");
});

test("PABLO", function () {
  expect(saludo("PABLO")).toEqual("Hola Pablo!");
});

test("mArtHA", function () {
  expect(saludo("mArtHA")).toEqual("Hola Martha!");
});

test("Fulano", function () {
  expect(saludo("")).toEqual("Hola Fulano!");
  expect(saludo("    ")).toEqual("Hola Fulano!");
  expect(saludo(null)).toEqual("Hola Fulano!");
});
