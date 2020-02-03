export abstract class Pizza {
    public name!: string;
    public dough!: string;
    public sauce!: string;

    public toppings: Array<any> = [];

    public prepare() {
        console.info("Preparing " + this.name);
        console.info("Tossing dough...");
        console.info("Adding sauce...");
        console.info("Adding toppings: ");

        for (let i = 0; i < this.toppings.length; i++) {
            console.info("   " + this.toppings[i]);
        }
    }

    public bake() {
        console.info("Bake for 25 minutes at 350");
    }

    public cut() {
        console.info("Cutting the pizza into diagonal slices");
    }

    public box() {
        console.info("Place pizza in official PizzaStore box");
    }

    public getName(): string {
        return this.name;
    }

    public toString(): string {
        let display = `
            ---- ${this.name} ----
            ${this.dough}
            ${this.sauce}
        `;

        for (let i: number = 0; i < this.toppings.length; i++) {
            display.concat(this.toppings[i] + '\n');
        }

        return display;
    }
}