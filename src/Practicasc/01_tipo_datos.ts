let usuarioNombre: string | boolean = 'Juan R';
// El operador "|" permite que la variable acepte más de un tipo de dato.

usuarioNombre = true;

let nivelPorcentaje: number | 'ALTO' = 20;
// También se puede limitar los valores posibles de la variable usando "|".

const Edad = 22;
// aniosEdad = 6; // Las constantes no pueden ser reasignadas, hacerlo genera un error de tipo.

console.log(usuarioNombre);
console.log({usuarioNombre, Edad});

/*
var preferencias: string = '';
var preferencias: string = 2;

let ejemploCadena:string = '';
let ejemploNumero:number = '';
*/

