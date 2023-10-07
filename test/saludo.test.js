const saludo = require("../src/saludo")

test.skip("Gabriel", function () {

    expect(saludo("Gabriel")).toEqual("Hola Gabriel!");
});
test.skip("Benja", function () {

    expect(saludo("Benja")).toEqual("Hola Benja!");
});
test.skip("Juan", function () {

    expect(saludo("Juan")).toEqual("Hola Juan!");
});


test.skip("Maximiliano", function () {

    expect(saludo("Maximiliano")).toEqual("Hola Max!");
});

test.skip("juan", function () {

    expect(saludo("juan")).toEqual("Hola Juan!");
});

test.skip("PABLO", function () {

    expect(saludo("PABLO")).toEqual("Hola Pablo!");
});


test.skip("mArtHA", function () {

    expect(saludo("mArtHA")).toEqual("Hola Martha!");
});
test.skip("Fulano", function () {

    expect(saludo("")).toEqual("Hola Fulano!");
    
    expect(saludo("    ")).toEqual("Hola Fulano!");
    
    expect(saludo(null)).toEqual("Hola Fulano!");
});









