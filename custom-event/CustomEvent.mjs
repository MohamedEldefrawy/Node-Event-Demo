import {EventEmitter} from 'events';

export class CustomEvent extends EventEmitter {
    printMessage(data) {
        console.log(data);
        this.emit("printMessage");
    }

    printWelcome(name) {
        console.log(name);
        this.emit("printWelcome");
    }
}