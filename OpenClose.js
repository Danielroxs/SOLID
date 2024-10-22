/*
 * EJERCICIO:
 * Explora el "Principio SOLID Abierto-Cerrado (Open-Close Principle, OCP)"
 * y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 *
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla una calculadora que necesita realizar diversas operaciones matemáticas.
 * Requisitos:
 * - Debes diseñar un sistema que permita agregar nuevas operaciones utilizando el OCP.
 * Instrucciones:
 * 1. Implementa las operaciones de suma, resta, multiplicación y división.
 * 2. Comprueba que el sistema funciona.
 * 3. Agrega una quinta operación para calcular potencias.
 * 4. Comprueba que se cumple el OCP.
 */

// Interfaz de operación
class Operacion {
    operar(a, b) {
        throw new Error('El método operar debe ser implementado');
    }
}

// Operaciones específicas
class Suma extends Operacion {
    operar(a, b) {
        return a + b;
    }
}

class Resta extends Operacion {
    operar(a, b) {
        return a - b;
    }
}

class Multiplicacion extends Operacion {
    operar(a, b) {
        return a * b;
    }
}

class Division extends Operacion {
    operar(a, b) {
        if (b === 0) throw new Error('No se puede dividir entre cero');
        return a / b;
    }
}

// Nueva operación: Potencia (agregada sin modificar la calculadora original)
class Potencia extends Operacion {
    operar(a, b) {
        return Math.pow(a, b);
    }
}

// Calculadora que utiliza el OCP
class Calculadora {
    constructor() {
        this.operaciones = {};
    }

    agregarOperacion(nombre, operacion) {
        this.operaciones[nombre] = operacion;
    }

    operar(operacion, a, b) {
        if (!this.operaciones[operacion]) {
            throw new Error(`Operación "${operacion}" no está soportada`);
        }
        return this.operaciones[operacion].operar(a, b);
    }
}

// Uso de la calculadora correcta
const calculadora = new Calculadora();
calculadora.agregarOperacion('suma', new Suma());
calculadora.agregarOperacion('resta', new Resta());
calculadora.agregarOperacion('multiplicacion', new Multiplicacion());
calculadora.agregarOperacion('division', new Division());
calculadora.agregarOperacion('potencia', new Potencia());

console.log(calculadora.operar('suma', 5, 3));           // 8
console.log(calculadora.operar('resta', 5, 3));          // 2
console.log(calculadora.operar('multiplicacion', 5, 3)); // 15
console.log(calculadora.operar('division', 6, 3));       // 2
console.log(calculadora.operar('potencia', 2, 3));       // 8
