import {ServiceProvider} from "./ServiceProvider";
import { EventDispatcherInterface } from "../events/EventDispatcherInterface";
import {Dispatcher} from "../events/Dispatcher";
import {interfaces} from "inversify";

export class EventServiceProvider extends ServiceProvider {
    register() {
        this
            .container
            .bind('dispatcher')
            .to(Dispatcher)
            .inSingletonScope();

        this.container.get<EventDispatcherInterface>('dispatcher').dispatch('event.started', 'yey')
    }
}
