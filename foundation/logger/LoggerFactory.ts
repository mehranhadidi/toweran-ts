import {LoggerInterface} from "./LoggerInterface";
import {ConsoleLogger} from "./ConsoleLogger";

let logger: LoggerInterface;

export class LoggerFactory {
    public static getInstance(): LoggerInterface {
        if(!logger) {
            logger = new ConsoleLogger();
        }

        return logger;
    }
}
