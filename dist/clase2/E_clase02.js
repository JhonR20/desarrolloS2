"use strict";
// Creación de los objetos que se ejecutan en la interfaz Comida
const pizza = {
    nombre: "Pizza",
    calorias: 200,
    esVegana: false,
};
const ensalada = {
    nombre: "Ensalada",
    calorias: 50,
    esVegana: true,
};
const hamburguesa = {
    nombre: "Hamburguesa",
    calorias: 350,
    esVegana: false,
};
// Diseño de la clase ComidaS
class ComidaS {
    mostrarInfo(comida) {
        const { nombre, calorias, esVegana } = comida;
        console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`);
    }
    modificarCalorias(comida, nuevasCalorias) {
        const nuevaComida = {
            nombre: comida.nombre,
            calorias: nuevasCalorias,
            esVegana: comida.esVegana
        };
        return nuevaComida;
    }
}
// Diseño de la clase NotificadorComida
class NotificadorComida {
    constructor(comidaS) {
        this.comidaS = comidaS;
    }
    notificar(comida) {
        console.log("\n Notificando comida...");
        this.comidaS.mostrarInfo(comida);
    }
}
// Pruebas
const comidaS = new ComidaS();
const notificadorComida = new NotificadorComida(comidaS);
// Notifica todas las comidas originales
notificadorComida.notificar(pizza);
notificadorComida.notificar(ensalada);
notificadorComida.notificar(hamburguesa);
// Modifica las calorías de la pizza y notifica la comida modificada
const pizzaModificada = comidaS.modificarCalorias(pizza, 350);
notificadorComida.notificar(pizzaModificada);
