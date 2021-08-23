import { UserSettingOptions } from "../enum";
import { IBankUser } from "../types";
import { BankOffice } from "./task_2";

export class UserSettingsModule {
    private _bankOffice: BankOffice;
    private _user: any;

    public set user(user: IBankUser) {
        this._user = user;
    }

    constructor(initialBankOffice: BankOffice) {
        this._bankOffice = initialBankOffice;
    }

    private changeUserName(newName: string): boolean {
        if (this._user) {
            this._user.name = newName;
            return true;
        }
        return false;
    }

    private changeUserSurname(newSurname: string): boolean {
        if (this._user) {
            this._user.surname = newSurname;
            return true;
        }
        return false;
    }

    private registerForUserNewCard(newCardId: string): any {
        if (!this._bankOffice.isCardTiedToUser(newCardId) && this._bankOffice.getCardById(newCardId)) {
            this._user.cards.push(this._bankOffice.getCardById(newCardId));
            return true;
        }
        return false;
    }
    public changeUserSettings(option: UserSettingOptions, argsForChangeFunction: string): boolean {
        if (option === 0) return this.changeUserName(argsForChangeFunction);
        else if (option === 1) return this.changeUserSurname(argsForChangeFunction);
        else if (option === 2) return this.registerForUserNewCard(argsForChangeFunction);
    }
}