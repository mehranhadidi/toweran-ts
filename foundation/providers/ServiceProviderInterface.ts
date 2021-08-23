export interface ServiceProviderInterface {
    register(): void;
    boot(): void;
    getName(): string;
}
