"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Función tradicional para sumar dos números
function sumarNumeros(a, b) {
    return a + b;
}
var resultadoSuma = sumarNumeros(3, 2);
// Función flecha para sumar dos números
var sumarArrow = function (num1, num2) {
    return num1 + num2;
};
var resultadoArrow = sumarArrow(3, 2);
console.log({ resultadoSuma: resultadoSuma, resultadoArrow: resultadoArrow });
// Función para multiplicar, con parámetro opcional y valor por defecto
function multiplicarNumeros(principal, secundario, base) {
    if (base === void 0) { base = 4; }
    return principal * base;
}
var resultadoMultiplicacion = multiplicarNumeros(7);
console.log({ resultadoMultiplicacion: resultadoMultiplicacion });
// Función para aumentar la vida de un personaje
var aumentarVida = function (personaje, cantidad) {
    personaje.vida += cantidad;
};
// Creación de un personaje
var personajeJuan = {
    nombre: 'Juan',
    vida: 20,
    mostrarDetalle: function () {
        console.log("Nombre -> ".concat(this.nombre, " Vida ").concat(this.vida));
    }
};
console.log(personajeJuan);
// Aumenta la vida del personaje
aumentarVida(personajeJuan, 30);
console.log(personajeJuan);
// Muestra los detalles del personaje
personajeJuan.mostrarDetalle();
