"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario1 = {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana@eexample.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogota",
        pais: "colombia"
    },
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }
};
console.log(usuario1.saludar());
