import { Articulo, calcularTotales } from "./04_desestructurador";

// Lista de artículos seleccionados para la compra
const listaArticulos: Articulo[] = [
    {
        descripcion: 'Iphone 15',
        precio: 120,              
    },
    {
        descripcion: 'MSI Raider',
        precio: 350,             
    }
]

// Calcula el total, el impuesto y la propina usando la función importada
const [montoTotal, montoImpuesto, montoPropina] = calcularTotales({
    impuesto: 0.18,          
    productos: listaArticulos,
    propina: 0.10,          
})

// Muestra los resultados finales en consola
console.log('Monto Total:', montoTotal);
console.log('Monto por Impuesto:', montoImpuesto);
console.log('Monto por Propina:', montoPropina);