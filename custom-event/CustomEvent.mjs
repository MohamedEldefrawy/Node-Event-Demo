import {EventEmitter} from 'events';

export class CustomEvent extends EventEmitter {

    printMessageEmitter(data) {
        console.log(data);
        this.emit("printMessage");
    }


    printWelcomeEmitter(name) {
        console.log(name);
        this.emit("printWelcome");
    }
}