function analizaPalabras(palabras) {

    for (const [i, palabra] of palabras.entries()) {
        console.log("######################")
        console.log(`Palabra ${i + 1}: ${palabra}`);
        console.log(`Nº de caracteres: ${palabra.length}`);

        const letras = palabra.split("").reduce((acc, value) => acc + "-" + value);
        console.log(`Deletreo: ${letras}`);

        if (palabra.length % 2 === 0) {
            console.log("La palabra es par y no empieza por mayúscula");
        } else {
            console.log("La palabra es impar y empieza por mayúscula");
        }
        if (palabra.includes("ble")) {
            console.log("La palabra contiene 'ble'");
        } else {
            console.log("La palabra no contiene 'ble'");
        }
    }
};