import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { Light } from "./Light";
import { LightOnCommand } from "./LightOnCommand";

export const ExecuteSimpleCommandPattern = () => {
    let remote: SimpleRemoteControl = new SimpleRemoteControl();
    let light: Light = new Light();
    let lightOn: LightOnCommand = new LightOnCommand(light);
    
    remote.setCommand(lightOn);
    remote.buttonWasPressed();
}