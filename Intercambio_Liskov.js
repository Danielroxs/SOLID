class Vehiculo {
    inicial(speed = 0) {
        this.speed = speed;
    }

    acelerar(incremento) {
        this.speed += incremento;
        console.log("El vehiculo acelera...");
    }
    frenar(decrement) {
        this.speed -= decrement;
        if (this.speed <= 0) {
            this.speed = 0;
        }
        console.log(" El vehiculo frena...");
    }
}

class Bicicleta extends Vehiculo {
    inicial(speed = 0) {
        super.inicial(speed);
        console.log(`Se inicializa la bicicleta en ${speed} km/h...`);
    }
    acelerar(incremento) {
        super.acelerar(incremento)
        console.log("La bicicleta acelera...");
    }
    frenar() {
        super.frenar();
        console.log(" La bicicleta frena...");
    }
}

class Automovil extends Vehiculo {
    inicial(speed = 0) {
        super.inicial(speed);
        console.log(`Se inicializa el automovil en ${speed} km/h...`);
    }

    acelerar(incremento) {
        super.acelerar(incremento);
        console.log(" El automovil acelera...");
    }
    frenar(decrement) {
        super.frenar(decrement);
        console.log(" El automovil frena...");
    }
}

class Motocicleta extends Vehiculo {
    inicial(speed = 0) {
        super.inicial(speed);
        console.log(`Se inicializa la motocicleta en ${speed} km/h...`);
    }

    acelerar(incremento) {
        super.acelerar(incremento);
        console.log("La motocicleta acelera...");
    }
    frenar(decrement) {
        super.frenar(decrement);
        console.log(" La motocicleta frena...");
    }
}

const bicicleta = new Bicicleta();
bicicleta.inicial(10);
bicicleta.acelerar(5);
bicicleta.frenar(2);

const automovil = new Automovil();
automovil.inicial(0);
automovil.acelerar(5);
automovil.frenar(2);

const motocicleta = new Motocicleta();
motocicleta.inicial(0);
motocicleta.acelerar(2);
motocicleta.frenar(1);  
