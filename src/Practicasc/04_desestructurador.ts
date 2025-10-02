// Interfaces para definir la estructura de los objetos
interface InfoCancion {
    autor: string;
    anio: number;
}

interface PlayerAudio {
    volumen: number;
    duracion: number;
    titulo: string;
    info: InfoCancion;
}

// Objeto que representa un reproductor de audio
const reproductor: PlayerAudio = {
    volumen: 70,
    duracion: 15,
    titulo: "Cancion de ejemplo",
    info: {
        autor: "Juan",
        anio: 2023
    }
}

// Acceso directo a propiedades
const tituloCancion = reproductor.titulo;
console.log({ tituloCancion });

const autorPrincipal = reproductor.info.autor;
console.log({ autorPrincipal });

// Desestructuración de objeto
const { titulo: nombreTema, duracion: tiempoReproduccion } = reproductor;
console.log(nombreTema);
console.log(tiempoReproduccion);

// Desestructuración anidada (forma corta)
const { info: { autor: autorTema } } = reproductor;
console.log(autorTema);

// Desestructuración anidada (forma larga)
const { info } = reproductor;
const { autor: nombreAutor } = info;
console.log({ nombreAutor });

// Ejemplo con arreglos
const verduras: string[] = ['zanahoria', 'brocoli', 'espinaca'];
console.log("Verduras: " + (verduras[1] || 'No hay verduras disponibles'));

// Desestructuración de arreglo con valor por defecto
const [v1, v2, v3 = 'No hay más verduras'] = verduras;
console.log(v3);

// Interfaces y objetos para productos
export interface Articulo {
    descripcion: string;
    precio: number;
}

const telefono: Articulo = {
    descripcion: 'Samsung Galaxy',
    precio: 250,
}

const laptop: Articulo = {
    descripcion: 'Lenovo ThinkPad',
    precio: 500,
}

// Carrito de compras y valores de impuestos/propina
const listaCompras: Articulo[] = [telefono, laptop];
const valorImpuesto: number = 0.15;
const valorPropina: number = 0.08;

// Interface para opciones de cálculo
interface CalculoOpciones {
    impuesto: number;
    productos: Articulo[];
    propina: number;
}

// Función para calcular totales usando desestructuración en parámetros
export function calcularTotales(options: CalculoOpciones): [number, number, number] {
    const { impuesto, productos, propina } = options;
    let totalGeneral = 0;
    productos.forEach(({ precio }) => {
        totalGeneral += precio;
    });
    return [totalGeneral, totalGeneral * impuesto, totalGeneral * propina];
}

// Ejemplo sin desestructuración en la llamada
const opcionesCompra: CalculoOpciones = {
    impuesto: valorImpuesto,
    productos: listaCompras,
    propina: valorPropina,
};
const resultadoFinal: number[] = calcularTotales(opcionesCompra);

console.log('Total: ' + resultadoFinal[0]);
console.log('Total Impuesto: ' + resultadoFinal[1]);
console.log('Total Propina: ' + resultadoFinal[2]);

// Ejemplo con desestructuración en la llamada
const [totalFinal, totalImpuestoFinal, totalPropinaFinal] = calcularTotales({
    impuesto: valorImpuesto,
    productos: listaCompras,
    propina: valorPropina,
});
console.log('Total: ' + totalFinal);
console.log('Total Impuesto: ' + totalImpuestoFinal);
console.log('Total Propina: ' + totalPropinaFinal);