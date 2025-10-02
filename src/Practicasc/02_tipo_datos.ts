// Lista de características que describen a Juan
let caracteristicas: string[] = ["alto", "inteligente"];

// Definición de la estructura para una persona
interface PersonaInterface {
    nombre: string; // Nombre de la persona
    edad: number;   // Edad de la persona
    caracteristicas?: string[]; // Características opcionales
}

// Creación del objeto para la persona Juan
const persona: PersonaInterface = {
    nombre: "Juan",
    edad: 40,
    caracteristicas: caracteristicas,
};

// Muestra el objeto de Juan en la consola
console.log({persona});
export {};