import { Duck, MallardDuck, ModelDuck } from "./models";
import { FlyRocketPowered } from "./behaviours/Fly";

export const ExecutePattern1 = () => {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.setFlyBehaviour(new FlyRocketPowered());
    model.performFly();
}