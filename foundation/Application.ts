import {Container} from "inversify";
import {EventServiceProvider} from "./providers/EventServiceProvider";
import {ServiceProviderInterface} from "./providers/ServiceProviderInterface";
import {container} from "../src/container";

export class Application {

    private serviceProviders: Map<string, ServiceProviderInterface> = new Map<string, ServiceProviderInterface>();
    private loadedServiceProviders: string[] = []
    private bootedServiceProviders: string[] = []
    private booted = false;

    constructor(
        private container: Container,
        private rootPath?: string|null
    ) {
        this.registerBindings();

        this.registerBaseServiceProviders();
    }

    private registerBindings() {
        // do whatever you need to bind before booting up
    }

    private registerBaseServiceProviders() {
        this.register(new EventServiceProvider(this));
    }

    private register(provider: ServiceProviderInterface): void {
        if(this.providerRegistered(provider)) {
            return;
        }

        this.registerProvider(provider)

        // if the application is already booted, boot the provider
        if(this.booted) {
            this.bootProvider(provider);
        }
    }

    private providerRegistered(provider: ServiceProviderInterface): boolean {
        return this.serviceProviders.has(provider.getName());
    }

    private bootProvider(provider: ServiceProviderInterface) {
        const providerName = provider.getName();

        if(this.bootedServiceProviders.includes(providerName)) {
            return;
        }

        provider.boot();

        this.bootedServiceProviders.push(providerName);
    }

    private registerProvider(provider: ServiceProviderInterface) {
        const providerName = provider.getName();

        // register as a known service provider
        this.serviceProviders.set(providerName, provider);

        // register provider
        provider.register();

        // mark the provider as loaded
        this.loadedServiceProviders.push(providerName);
    }

    public getContainer(): Container {
        return this.container;
    }

    public get(name: never): never {
        return this.container.get(name);
    }

    public set(name: string, concrete: any): void {
        container.bind(name).to(concrete)
    }
}
