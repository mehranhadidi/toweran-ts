import {EventDispatcherInterface} from "./EventDispatcherInterface";
import {injectable} from "inversify";
import EventEmitter from "events";

@injectable()
export class Dispatcher implements EventDispatcherInterface {
    private dispatcher: EventEmitter = new EventEmitter();

    dispatch(event: string, message: string): void {
        this.dispatcher.emit(event, message)
    }
}
