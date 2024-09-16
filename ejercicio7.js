function sumarNumerosArray(arr) {
    return arr.reduce((acumulador, numero) => acumulador + numero, 0);
}
function promedioNumerosArray(arr) {
    const suma = arr.reduce((acumulador, numero) => acumulador + numero, 0);
    return arr.length > 0 ? suma / arr.length : 0;
}
function convertirStringsMayusculas(arr) {
    return arr.map(cadena => cadena.toUpperCase());
}
function filtrarNumerosPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}