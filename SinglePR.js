// principios SOLID

/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Responsabilidad Única (Single Responsibility
 * Principle, SRP)" y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 *
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un sistema de gestión para una biblioteca. El sistema necesita
 * manejar diferentes aspectos como el registro de libros, la gestión de usuarios
 * y el procesamiento de préstamos de libros.
 * Requisitos:
 * 1. Registrar libros: El sistema debe permitir agregar nuevos libros con
 * información básica como título, autor y número de copias disponibles.
 * 2. Registrar usuarios: El sistema debe permitir agregar nuevos usuarios con
 * información básica como nombre, número de identificación y correo electrónico.
 * 3. Procesar préstamos de libros: El sistema debe permitir a los usuarios
 * tomar prestados y devolver libros.
 * Instrucciones:
 * 1. Diseña una clase que no cumple el SRP: Crea una clase Library que maneje
 * los tres aspectos mencionados anteriormente (registro de libros, registro de
 * usuarios y procesamiento de préstamos).
 * 2. Refactoriza el código: Separa las responsabilidades en diferentes clases
 * siguiendo el Principio de Responsabilidad Única.
 */

// ejemplo de uso

var Danrox = function () {
    this.nombre = "Danrox";
    this.edad = 20;
    this.color = "rojo";
    this.peso = 80;
    this.estado = "vivo";
    this.comer = function (comida) {
        this.peso += comida.calor;
        this.estado = "muerto";
        return "Comida: " + comida.nombre + " fue comida";
    }
    this.beber = function (bebida) {
        this.peso += bebida.calor;
        this.estado = "muerto";
        return "Bebida: " + bebida.nombre + " fue bebida";
    }
    this.comerBeber = function (comida, bebida) {
        this.peso += comida.calor + bebida.calor;
        this.estado = "muerto";
        return "Comida: " + comida.nombre + " y Bebida: " + bebida.nombre + " fue comida y bebida";
    }
}

function comida(nombre, calor) {
    this.nombre = nombre;
    this.calor = calor;
}

function bebida(nombre, calor) {
    this.nombre = nombre;
    this.calor = calor;
}

comida.prototype.comer = function (comida) {
    this.calor += comida.calor;
    return "Comida: " + comida.nombre + " fue comida";
}

bebida.prototype.beber = function (bebida) {
    this.calor += bebida.calor;
    return "Bebida: " + bebida.nombre + " fue bebida";
}

comida.prototype.comerBeber = function (comida, bebida) {
    this.calor += comida.calor + bebida.calor;
    return "Comida: " + comida.nombre + " y Bebida: " + bebida.nombre + " fue comida y bebida";
}

var danrox = new Danrox();

console.log(danrox.comer(new comida("manzana", 10)));
console.log(danrox.beber(new bebida("cerveza", 10)));
console.log(danrox.comerBeber(new comida("manzana", 10), new bebida("cerveza", 10)));


// manera incorrecta de implementar el principio SOLID

var Library = function () {
    this.libros = [];
    this.usuarios = [];
    this.prestamos = [];
    this.registrarLibro = function (libro) {
        this.libros.push(libro);
    }
    this.registrarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    }
    this.procesarPrestamo = function (prestamo) {
        this.prestamos.push(prestamo);
    }
}


Library.prototype.registrarLibro = function (libro) {
    this.libros.push(libro);
}

Library.prototype.registrarUsuario = function (usuario) {
    this.usuarios.push(usuario);
}

Library.prototype.procesarPrestamo = function (prestamo) {
    this.prestamos.push(prestamo);
}

var libro = function (titulo, autor, numeroCopias) {
    this.titulo = titulo;
    this.autor = autor;
    this.numeroCopias = numeroCopias;
}

var usuario = function (nombre, id, correo) {
    this.nombre = nombre;
    this.id = id;
    this.correo = correo;
}

var prestamo = function (libro, usuario) {
    this.libro = libro;
    this.usuario = usuario;
}

var library = new Library();

library.registrarLibro(new libro("El libro", "el autor", 10));
library.registrarUsuario(new usuario("el usuario", 123456, "el usuario@gmail.com"));
library.procesarPrestamo(new prestamo(library.libros[0], library.usuarios[0]));

// manera correcta de implementar el principio SOLID

var Library = function () {
    this.libros = [];
    this.usuarios = [];
    this.prestamos = [];
    this.registrarLibro = function (title, author, copies) {
        var libro = new libro(title, author, copies);
        this.libros.push(libro);
    }
    this.registrarUsuario = function (name, id, email) {
        var usuario = new usuario(name, id, email);
        this.usuarios.push(usuario);
    }
    this.procesarPrestamo = function (libro, usuario) {
        var prestamo = new prestamo(libro, usuario);
        this.prestamos.push(prestamo);
    }
}
Library.prototype.registrarLibro = function (libro) {
    this.libros.push(libro);
}
Library.prototype.registrarUsuario = function (usuario) {
    this.usuarios.push(usuario);
}
Library.prototype.procesarPrestamo = function (prestamo) {
    this.prestamos.push(prestamo);
}

var libro = function (titulo, autor, numeroCopias) {
    this.titulo = titulo;
    this.autor = autor;
    this.numeroCopias = numeroCopias;
}
var usuario = function (nombre, id, correo) {
    this.nombre = nombre;
    this.id = id;
    this.correo = correo;
}
var prestamo = function (libro, usuario) {
    this.libro = libro;
    this.usuario = usuario;
}

var library = new Library();

library.registrarLibro(new libro("El libro", "el autor", 10));
library.registrarUsuario(new usuario("el usuario", 123456, "el usuario@gmail.com"));
library.procesarPrestamo(new prestamo(library.libros[0], library.usuarios[0]));

// manera correcta de implementar el principio SOLID

class Book {
    constructor(title, author, copies) {
        this.title = title;
        this.author = author;
        this.copies = copies;
    }
}
class User {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
class Loan {
    constructor(book, user) {
        this.book = book;
        this.user = user;
    }
    loan = function (book, user) {
        this.book = book;
        this.user = user;
        if (this.book.copies > 0) {
            this.book.copies--;
        }
    }
    returnBook = function (book, user) {
        this.book = book;
        this.user = user;
        this.book.copies++;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.users = [];
        this.loans = [];
    }
    registerBook(title, author, copies) {
        var book = new Book(title, author, copies);
        this.books.push(book);
    }
    registerUser(name, id, email) {
        var user = new User(name, id, email);
        this.users.push(user);
    }
    processLoan(book, user) {
        var loan = new Loan(book, user);
        this.loans.push(loan);
    }
}

var library = new Library();

library.registerBook("El libro", "el autor", 10);
library.registerUser("el usuario", 123456, "el usuario@gmail.com");
library.processLoan(library.books[0], library.users[0]);