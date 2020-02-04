import { RemoteControl } from "./RemoteControl";
import { Light } from "./Light/Light";
import { TV } from "./TV/TV";
import { Stereo } from "./Stereo/Stereo";
import { Hottub } from "./Hottube/Hottub";
import { LightOnCommand } from "./Light/Light/LightOnCommand";
import { LightOffCommand } from "./Light/Light/LightOffCommand";
import { StereoOnCommand } from "./Stereo/StereoOnCommand";
import { StereoOffCommand } from "./Stereo/StereoOffCommand";
import { TVOnCommand } from "./TV/TVOnCommand";
import { TVOffCommand } from "./TV/TVOffCommand";
import { HottubOnCommand } from "./Hottube/HottubOnCommand";
import { HottubOffCommand } from "./Hottube/HottubOffCommand";
import { Command } from "./Command";
import { MacroCommand } from "./MacroCommand";

export const ExecuteRemoteWithPartyModeCommandPattern = () => {
    let remoteControl: RemoteControl = new RemoteControl();
    let light: Light = new Light("Living Room");
    let tv: TV = new TV("Living Room");
    let stereo: Stereo = new Stereo("Living Room");
    let hottub: Hottub = new Hottub();
    let lightOn: LightOnCommand = new LightOnCommand(light);
    let lightOff: LightOffCommand = new LightOffCommand(light);
    let stereoOn: StereoOnCommand = new StereoOnCommand(stereo);
    let stereoOff: StereoOffCommand = new StereoOffCommand(stereo);
    let tvOn: TVOnCommand = new TVOnCommand(tv);
    let tvOff: TVOffCommand = new TVOffCommand(tv);
    let hottubOn: HottubOnCommand = new HottubOnCommand(hottub);
    let hottubOff: HottubOffCommand = new HottubOffCommand(hottub);
    let partyOn: Command[] = [lightOn, stereoOn, tvOn, hottubOn];
    let partyOff: Command[] = [lightOff, stereoOff, tvOff, hottubOff];
    let partyOnMacro: MacroCommand = new MacroCommand(partyOn);
    let partyOffMacro: MacroCommand = new MacroCommand(partyOff);
    
    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);
    console.info(remoteControl);
    console.info("--- Pushing Macro On---");
    remoteControl.onButtonWasPushed(0);
    console.info("--- Pushing Macro Off---");
    remoteControl.offButtonWasPushed(0);
}