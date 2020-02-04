import { Singleton } from "./Singleton";

export const ExecuteDoubleCheckedLockingSingletonPattern = () => {
    let foo: Singleton = Singleton.getInstance();
    console.info(foo);
}