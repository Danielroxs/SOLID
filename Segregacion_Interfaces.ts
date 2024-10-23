// Definimos varias interfaces que representan funcionalidades específicas

interface ImpresoraBlancoNegro {
    imprimirBN(): void;
}

interface ImpresoraColor {
    imprimirColor(): void;
}

interface Escaner {
    escanear(): void;
}

interface Fax {
    enviarFax(): void;
}

// Impresora que solo puede imprimir en blanco y negro
class ImpresoraBN implements ImpresoraBlancoNegro {
    imprimirBN() {
        console.log("Imprimiendo en blanco y negro...");
    }
}

// Impresora que solo puede imprimir a color
class ImpresoraAColor implements ImpresoraColor {
    imprimirColor() {
        console.log("Imprimiendo a color...");
    }
}

// Impresora multifuncional que implementa varias interfaces
class ImpresoraMultifuncional implements ImpresoraBlancoNegro, ImpresoraColor, Escaner, Fax {
    imprimirBN() {
        console.log("Imprimiendo en blanco y negro...");
    }
    imprimirColor() {
        console.log("Imprimiendo a color...");
    }
    escanear() {
        console.log("Escaneando...");
    }
    enviarFax() {
        console.log("Enviando fax...");
    }
}

// Probando las diferentes impresoras
const impresoraBN = new ImpresoraBN();
impresoraBN.imprimirBN(); // Imprime en blanco y negro

const impresoraColor = new ImpresoraAColor();
impresoraColor.imprimirColor(); // Imprime a color

const multifuncional = new ImpresoraMultifuncional();
multifuncional.imprimirBN(); // Imprime en blanco y negro
multifuncional.imprimirColor(); // Imprime a color
multifuncional.escanear(); // Escanea
multifuncional.enviarFax(); // Envia fax
