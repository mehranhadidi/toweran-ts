import "reflect-metadata";
import {Application} from "../foundation/Application";
import {container} from "../src/container";
import path from "path";
const rootPath = path.resolve();

const application = new Application(
    container,
    rootPath
)
