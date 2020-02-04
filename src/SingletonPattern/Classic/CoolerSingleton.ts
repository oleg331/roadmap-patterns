/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Singleton } from "./Singleton";

export class CoolerSingleton extends Singleton {
    static uniqueInstance: Singleton;

    constructor() {
        super();
    }
}