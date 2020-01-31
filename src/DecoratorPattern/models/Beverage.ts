export abstract class Beverage {
    description: string = "Unknown Beverage";
    static SMALL: number = 1;
    static LARGE: number = 2;
    static EXTREA_LARGE: number = 3;

    size: number = 0;

    getDescription(): string {
        return this.description;
    }

    setSize(size: number): void {
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }

    abstract cost(): number;
}