// Clase que representa a una persona con nombre y dirección
export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = 'Sin direccion'
    ) {
    }
}

// Clase que representa a un trabajador con información adicional
export class Trabajador {
    constructor(
        public persona: Persona,
        public cargo: string,
        public empresa: string,
        public direccion: string
    ) {
        // Se pueden agregar validaciones aquí si es necesario
    }
}

// Creación de una instancia de Persona
const personaUno = new Persona('Juan', 'Calle 123');

// Creación de una instancia de Trabajador usando la persona creada
const trabajador: Trabajador = new Trabajador(personaUno, 'Dev', 'Unillanos', 'San Antonio');

// Muestra los datos del trabajador y la persona en consola
console.log(trabajador);
console.log(personaUno);