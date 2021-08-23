"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("../foundation/logger/Logger");
var Level_1 = require("../foundation/logger/Level");
// const app = new Application()
var logger = new Logger_1.Logger();
logger.log(Level_1.Level.INFO, 'hi');
