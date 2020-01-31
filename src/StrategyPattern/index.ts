import { Duck, MallardDuck, ModelDuck } from "./models";
import { FlyRocketPowered } from "./behaviours/Fly/FlyRocketPowered";

export const ExecuteStrategyPattern = () => {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.setFlyBehaviour(new FlyRocketPowered());
    model.performFly();
}