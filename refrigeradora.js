
'use strict';

class Refrigeradora {
    constructor(limones, jamon, leche, frutas) {
        this.limones = limones;
        this.jamon = jamon;
        this.leche = leche;
        this.frutas = frutas;
        this.meat = []; // Inicializamos el array de carne
    }

    // Método para agregar carne a la refrigeradora
    addMeat(meatItem) {
        this.meat.push(meatItem);
        alert("Carne agregada a la refrigeradora");
    }

    // Método para obtener la cantidad de carne en la refrigeradora
    getMeatCount() {
        return this.meat.length;
    }

    // Método para alertar si la carne está presente en la refrigeradora
    alertMeatPresence() {
        if (this.meat.length > 0) {
            alert("¡Hay carne en la refrigeradora!");
        } else {
            alert("No hay carne en la refrigeradora.");
        }
    }
}

// Ejemplo de uso
const miRefrigeradora = new Refrigeradora(5, 2, 3, ['manzanas', 'peras', 'plátanos']);
miRefrigeradora.addMeat("Pollo");
miRefrigeradora.addMeat("Res");
alert("Cantidad de carne en la refrigeradora:", miRefrigeradora.getMeatCount());
miRefrigeradora.alertMeatPresence();
