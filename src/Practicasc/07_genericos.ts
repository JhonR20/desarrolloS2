// {
//     estado: boolean;
//     mensaje: string;
//     codigoEstado: number;
//     resultado: [personas] 
// }

// personas = {
//     nombre: string;
//     apellido: string;
//     anios: number;
// }

// condiciones = {
//     categoria: string;
//     identificador: number;
// }

function mostrarDato<T>(valor: T): T {
    return valor;
}

interface Animal {
    especie: string;
    sexo: string;
    anios: number;
}

const perro: Animal = {
    especie: "perro",
    sexo: "macho",
    anios: 7
}

let texto: string = mostrarDato("Mateo");
let esValido: boolean = mostrarDato(false);
let cantidad: number = mostrarDato(12);
let objetoAnimal: Animal = mostrarDato(perro);

console.log(texto.toLowerCase());
console.log(esValido);
console.log(cantidad + 3);
console.log(objetoAnimal);