import { IMoneyUnit, TCash } from "../types";

export class MoneyRepository {
    private _repository: IMoneyUnit[];
    constructor(initialRepository: IMoneyUnit[]) {
        this._repository = initialRepository;
    }

    public giveOutMoney(count: number, currency: number): boolean {
        let newArr: Array<TCash> = [];
        let i = 0;
        let creminder = count;

        while (i < this._repository.length) {
            let coincounter = 0;
            while (Number(this._repository[i].moneyInfo.denomination) <= creminder && this._repository[i].moneyInfo.currency === currency && this._repository[i].count !== 0) {
                creminder = creminder - Number(this._repository[i].moneyInfo.denomination);
                coincounter++;
                this._repository[i].count -= 1;
            }

            if (coincounter !== 0) {
                newArr.push({
                    count: coincounter,
                    denomination: this._repository[i].moneyInfo.denomination,
                    currency: this._repository[i].moneyInfo.currency
                })
            }
            i++;
        }
        console.log(newArr); //массив, который показывает какие купюры сняли и их количество 

        if (creminder == 0) { //если остаток 0 - пользовтель получил все деньги и купюр хватило 
            return true;
        } else { //если бабки снять не получилось, то мы возвращаем их обратно в _repository
            newArr.forEach(item => {
                this._repository.forEach(el => {
                    if (item.currency === el.moneyInfo.currency && item.denomination === el.moneyInfo.denomination) {
                        el.count += item.count
                    }
                })
            })
            return false;
        }
    }

    public takeMoney(moneyUnits: IMoneyUnit[]): boolean {

        let arrOfTakenMoney = moneyUnits.map(item => {
            return this._repository.some(el => {
                if (el.moneyInfo.currency === item.moneyInfo.currency && el.moneyInfo.denomination === item.moneyInfo.denomination) {
                    el.count += item.count;
                    return true;
                }
                return false;
            })
        })

        return arrOfTakenMoney.every(item => item === true);
    }
}