import {CustomEvent} from './custom-event/CustomEvent.mjs';


let customEvent = new CustomEvent();

customEvent.printMessage("Emitting printMessage");
customEvent.printWelcome("Emitting printWelcome");

customEvent.on('printMessage', function () {
    console.log("Listening to printMessage Custom event");
});
customEvent.on('printWelcome', () => {
    console.log("Listening to printWelcome Custom event");
})