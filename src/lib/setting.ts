import { SettingValue } from "./settingValue";

 class Setting {
    public key: string;
    public value: SettingValue;
 
    constructor(k: string, ov: SettingValue) {
        this.key = k;
        this.value = ov;
    }
}

export {Setting}