import { setConfig, getConfig } from "../config";

setConfig('test', 't1');
console.log(getConfig('test'))