// Función tradicional para sumar dos números
function sumarNumeros(a: number, b: number): number {
    return a + b;
}

const resultadoSuma = sumarNumeros(3, 2);

// Función flecha para sumar dos números
const sumarArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}

const resultadoArrow: number = sumarArrow(3, 2);
console.log({ resultadoSuma, resultadoArrow });

// Función para multiplicar, con parámetro opcional y valor por defecto
function multiplicarNumeros(principal: number, secundario?: number, base = 4): number {
    return principal * base;
}
const resultadoMultiplicacion: number = multiplicarNumeros(7);
console.log({ resultadoMultiplicacion });


// Interface para definir la estructura de un personaje
interface Personaje {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

// Función para aumentar la vida de un personaje
const aumentarVida = (personaje: Personaje, cantidad: number) => {
    personaje.vida += cantidad;
}

// Creación de un personaje
const personajeJuan: Personaje = {
    nombre: 'Juan',
    vida: 10,
    mostrarDetalle() {
        console.log(`Nombre -> ${this.nombre} Vida ${this.vida}`);
    }
}

console.log(personajeJuan);

// Aumenta la vida del personaje
aumentarVida(personajeJuan, 40);

console.log(personajeJuan);

// Muestra los detalles del personaje
personajeJuan.mostrarDetalle();

export {};