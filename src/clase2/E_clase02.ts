// Diseño de la interfaz Comida
interface Comida {
  nombre: string;
  calorias: number;
  esVegana: boolean;
}

// Creación de los objetos que se ejecutan en la interfaz Comida
const pizza: Comida = {
  nombre: "Pizza",
  calorias: 200,
  esVegana: false,
};

const ensalada: Comida = {
  nombre: "Ensalada",
  calorias: 50,
  esVegana: true,
};

const hamburguesa: Comida = {
  nombre: "Hamburguesa",
  calorias: 350,
  esVegana: false,
};

// Diseño de la clase ComidaS
class ComidaS {

  public mostrarInfo(comida: Comida): void {
    const { nombre, calorias, esVegana } = comida;
    console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`);
  }

  public modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
  const nuevaComida: Comida = {
    nombre: comida.nombre,
    calorias: nuevasCalorias,
    esVegana: comida.esVegana
  };
  return nuevaComida;
}
}

// Diseño de la clase NotificadorComida
class NotificadorComida {

  constructor(private comidaS: ComidaS) {}

  public notificar(comida: Comida): void {
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