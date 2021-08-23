import {LoggerInterface} from "./LoggerInterface";
import {injectable} from "inversify";

@injectable()
export class ConsoleLogger implements LoggerInterface {
    log(message: string): void {
        console.log(message);
    }
}
