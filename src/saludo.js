function saludo(nombre) {
  if (!nombre || !nombre.trim()) {
    return "Hola Fulano!";
  }
  // Condicional para Maximiliano, retornando las 3 primeras letras
  if (nombre.length >= 10) {
    return "Hola " + nombre.slice(0, 3) + "!";
  }
  if (nombre === "Federico") {
    return "Hola Kiko!";
  }
  return (
    "Hola " + nombre[0].toUpperCase() + nombre.slice(1).toLowerCase() + "!"
  );
}

module.exports = saludo;
