import {ServiceProviderInterface} from "./ServiceProviderInterface";
import {Application} from "../Application";
import {Container} from "inversify";

export class ServiceProvider implements ServiceProviderInterface {
    protected container: Container;

    constructor(protected app: Application) {
        this.container = app.getContainer()
    }

    boot(): void {
        //
    }

    register(): void {
        //
    }

    getName(): string {
        return this.constructor.name;
    }
}
