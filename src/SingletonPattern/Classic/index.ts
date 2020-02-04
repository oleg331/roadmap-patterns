import { Singleton } from "./Singleton";
import { CoolerSingleton } from "./CoolerSingleton";
import { HotterSingleton } from "./HotterSingleton";

export const ExecuteClassicSingletonPattern = () => {
    let foo: Singleton = CoolerSingleton.getInstance();
    let bar: Singleton = HotterSingleton.getInstance();
    console.info(foo);
    console.info(bar);
}