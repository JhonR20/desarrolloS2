"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotales = calcularTotales;
// Objeto que representa un reproductor de audio
var reproductor = {
    volumen: 70,
    duracion: 15,
    titulo: "Melodía de ejemplo",
    info: {
        autor: "Juan",
        anio: 2023
    }
};
// Acceso directo a propiedades
var tituloCancion = reproductor.titulo;
console.log({ tituloCancion: tituloCancion });
var autorPrincipal = reproductor.info.autor;
console.log({ autorPrincipal: autorPrincipal });
// Desestructuración de objeto
var nombreTema = reproductor.titulo, tiempoReproduccion = reproductor.duracion;
console.log(nombreTema);
console.log(tiempoReproduccion);
// Desestructuración anidada (forma corta)
var autorTema = reproductor.info.autor;
console.log(autorTema);
// Desestructuración anidada (forma larga)
var info = reproductor.info;
var nombreAutor = info.autor;
console.log({ nombreAutor: nombreAutor });
// Ejemplo con arreglos
var verduras = ['zanahoria', 'brocoli', 'espinaca'];
console.log("Verduras: " + (verduras[1] || 'No hay verduras disponibles'));
// Desestructuración de arreglo con valor por defecto
var v1 = verduras[0], v2 = verduras[1], _a = verduras[2], v3 = _a === void 0 ? 'No hay más verduras' : _a;
console.log(v3);
var telefono = {
    descripcion: 'Samsung Galaxy',
    precio: 250,
};
var laptop = {
    descripcion: 'Lenovo ThinkPad',
    precio: 500,
};
// Carrito de compras y valores de impuestos/propina
var listaCompras = [telefono, laptop];
var valorImpuesto = 0.15;
var valorPropina = 0.08;
// Función para calcular totales usando desestructuración en parámetros
function calcularTotales(options) {
    var impuesto = options.impuesto, productos = options.productos, propina = options.propina;
    var totalGeneral = 0;
    productos.forEach(function (_a) {
        var precio = _a.precio;
        totalGeneral += precio;
    });
    return [totalGeneral, totalGeneral * impuesto, totalGeneral * propina];
}
// Ejemplo sin desestructuración en la llamada
var opcionesCompra = {
    impuesto: valorImpuesto,
    productos: listaCompras,
    propina: valorPropina,
};
var resultadoFinal = calcularTotales(opcionesCompra);
console.log('Total: ' + resultadoFinal[0]);
console.log('Total Impuesto: ' + resultadoFinal[1]);
console.log('Total Propina: ' + resultadoFinal[2]);
// Ejemplo con desestructuración en la llamada
var _b = calcularTotales({
    impuesto: valorImpuesto,
    productos: listaCompras,
    propina: valorPropina,
}), totalFinal = _b[0], totalImpuestoFinal = _b[1], totalPropinaFinal = _b[2];
console.log('Total: ' + totalFinal);
console.log('Total Impuesto: ' + totalImpuestoFinal);
console.log('Total Propina: ' + totalPropinaFinal);
