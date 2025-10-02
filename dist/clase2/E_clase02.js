"use strict";
// 2. Creación de objetos que implementan la interfaz Comida
const pizza = {
    nombre: "Pizza",
    calorias: 800,
    esVegana: false,
};
const ensalada = {
    nombre: "Ensalada",
    calorias: 150,
    esVegana: true,
};
const hamburguesa = {
    nombre: "Hamburguesa",
    calorias: 600,
    esVegana: false,
};
// 3. Implementación de la clase ComidaService
class ComidaService {
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
// 4. Implementación de la clase NotificadorComida
class NotificadorComida {
    constructor(comidaService) {
        this.comidaService = comidaService;
    }
    notificar(comida) {
        console.log("\nNotificando comida...");
        this.comidaService.mostrarInfo(comida);
    }
}
// 5. Prueba del sistema
const comidaService = new ComidaService();
const notificadorComida = new NotificadorComida(comidaService);
// Notifica todas las comidas originales
notificadorComida.notificar(pizza);
notificadorComida.notificar(ensalada);
notificadorComida.notificar(hamburguesa);
// Modifica las calorías de la pizza y notifica la comida modificada
const pizzaModificada = comidaService.modificarCalorias(pizza, 500);
notificadorComida.notificar(pizzaModificada);
