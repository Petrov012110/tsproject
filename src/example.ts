import Setting  from "./setting";

export default class Example {
    public title: string;
    public id: number;
    private _setting: Setting;
 
    constructor(s: Setting) {
        this._setting = s;
    }
}