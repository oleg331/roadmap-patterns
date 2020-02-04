export class Singleton {
    static uniqueInstance: Singleton;

    public static getInstance(): Singleton {
        if (Singleton.uniqueInstance == null) {
            Singleton.uniqueInstance = new Singleton();
        }
        return Singleton.uniqueInstance;
    }
}