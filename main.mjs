import {CustomEvent} from './custom-event/CustomEvent.mjs';


let customEvent = new CustomEvent();
customEvent.on('printMessage', function () {
    console.log("Listening to printMessage Custom event");
});


customEvent.on('printWelcome', () => {
    console.log("Listening to printWelcome Custom event");
});


customEvent.printWelcomeEmitter("printWelcome");
customEvent.printMessageEmitter("printMessage");