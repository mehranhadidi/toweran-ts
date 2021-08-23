import {LoggerFactory} from "./LoggerFactory";

const logger = LoggerFactory.getInstance();

export function simpleLog() {
    return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor): void {

    }
}
