import { Setting } from "./setting";
import { SettingValue } from "./settingValue";

console.log("vcc");


export class Example {
    public title: string;
    public id: number;
    private _setting: Setting;
 
    constructor(s: Setting) {
        this._setting = s;
    }
}

let c = new SettingValue("asa", "ere")
let s = new Setting("dsdse", c)

let v = new Example(s)
