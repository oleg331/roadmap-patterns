import { Dough } from "../Ingredients/dough/Dough";
import { Sauce } from "../Ingredients/sauce/Sauce";
import { Veggies } from "../Ingredients/veggies/Veggies";
import { Cheese } from "../Ingredients/cheese/Cheese";
import { Pepperoni } from "../Ingredients/pepperoni/Pepperoni";
import { Clams } from "../Ingredients/clams/Clams";

export abstract class Pizza {
    name!: string;
    dough!: Dough;
    sauce!: Sauce;
    veggies!: Veggies[];
    cheese!: Cheese;
    pepperoni!: Pepperoni;
    clam!: Clams;

    public abstract prepare(): any;

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

    public setName(name: string) {
        this.name = name;
    }

    public toString(): string {
        let result = `
            ---- ${this.name} ----

        `;
        
        if (this.dough != null) {
            result.concat(this.dough.toString(), "\n");
        }
        if (this.sauce != null) {
            result.concat(this.sauce.toString(), "\n");
        }
        if (this.cheese != null) {
            result.concat(this.cheese.toString(), "\n");
        }
        if (this.veggies != null) {
            for (let i = 0; i < this.veggies.length; i++) {
                result.concat(this.veggies[i].toString());

                if (i < this.veggies.length - 1) {
                    result.concat(", ");
                }
            }
        }
        if (this.clam != null) {
            result.concat(this.clam.toString(), "\n");
        }
        if (this.pepperoni != null) {
            result.concat(this.pepperoni.toString(), "\n");
        }

        return result;
    }
}