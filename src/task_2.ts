import { IBankUser, ICard } from "../types";

export class BankOffice {
    private _users: Array<IBankUser>;
    private _cards: ICard[];

    constructor(users: IBankUser[], cards: ICard[]) {
        this._users = users;
        this._cards = cards;
    }

    public authorize(userId: string, cardId: string, cardPin: string): boolean {

        return this._users
            .filter(item => item.id === userId)
            .some(el => el.cards.some(obj => obj.id === cardId && obj.pin === cardPin));

    }

    public getCardById(cardId: string): ICard {
        let cardObj: ICard;
        this._cards.forEach(item => {
            if (item.id === cardId) {
                cardObj = item;
            }
        });
        return cardObj;
    }

    public isCardTiedToUser(cardId: string): boolean {
        return this._users.some(item => item.cards.some(el => el.id === cardId));
    }
}