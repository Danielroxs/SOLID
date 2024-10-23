// Interfaz mediante una clase abstracta o definición
class Notification {
    send(message) {
        throw new Error("This method must be overridden");
    }
}

// Implementaciones específicas de la interfaz Notification
class EmailNotification extends Notification {
    send(message) {
        console.log("Enviando Email: " + message);
    }
}

class PushNotification extends Notification {
    send(message) {
        console.log("Enviando Push Notification: " + message);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log("Enviando SMS: " + message);
    }
}

// Sistema de notificaciones que depende de la abstracción (Notification)
class NotificationService {
    constructor(notification) {
        this.notification = notification;
    }

    sendNotification(message) {
        this.notification.send(message);
    }
}

// Ejemplo de uso, cumpliendo el principio DIP
const emailNotification = new EmailNotification();
const pushNotification = new PushNotification();
const smsNotification = new SMSNotification();

const emailService = new NotificationService(emailNotification);
const pushService = new NotificationService(pushNotification);
const smsService = new NotificationService(smsNotification);

emailService.sendNotification("¡Tienes un nuevo correo!");
pushService.sendNotification("¡Nueva notificación PUSH!");
smsService.sendNotification("¡Tienes un nuevo SMS!");
