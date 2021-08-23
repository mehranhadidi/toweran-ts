import {Container} from "inversify";
import {LoggerInterface} from "../foundation/logger/LoggerInterface";
import {ConsoleLogger} from "../foundation/logger/ConsoleLogger";

const container: Container = new Container();

container.bind<LoggerInterface>('logger').to(ConsoleLogger).inSingletonScope()

export { container }
