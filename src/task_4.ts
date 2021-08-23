import { Currency } from "../enum";
import { IMoneyUnit } from "../types";
import { MoneyRepository } from "./task_1";

export class CurrencyConverterModule {
    private _moneyRepository: MoneyRepository;
    public oneUSD: number;
    constructor(initialMoneyRepository: MoneyRepository) {
        this._moneyRepository = initialMoneyRepository;
        this.oneUSD = 70;
    }

    public convertMoneyUnits(fromCurrency: Currency, toCurrency: Currency, moneyUnits: IMoneyUnit[]): boolean {
        let amount = 0;
        let checkMoneyUnitCurrency = moneyUnits.every(item => item.moneyInfo.currency === fromCurrency);
        moneyUnits.forEach(el => amount += Number(el.count) * Number(el.moneyInfo.denomination));
        if (amount % this.oneUSD === 0 && toCurrency === 1 && checkMoneyUnitCurrency) {      
            return this._moneyRepository.giveOutMoney(amount / this.oneUSD, toCurrency);
        } else if (toCurrency === 0 && checkMoneyUnitCurrency) {
            return this._moneyRepository.giveOutMoney(amount * this.oneUSD, toCurrency);
        }
        return false;
    }
}