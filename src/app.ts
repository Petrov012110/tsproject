import { Currency } from "../enum";
import { MoneyRepository } from "./task_1";
import { BankOffice } from "./task_2";
import { BankTerminal } from "./task_5";

let arrOfMoney = [
    {
        moneyInfo: {
            denomination: "1000",
            currency: Currency.RUB
        },
        count: 10
    },
    {
        moneyInfo: {
            denomination: "500",
            currency: Currency.RUB
        },
        count: 100
    },
    {
        moneyInfo: {
            denomination: "200",
            currency: Currency.RUB
        },
        count: 15
    },
    {
        moneyInfo: {
            denomination: "100",
            currency: Currency.USD
        },
        count: 20
    },
    {
        moneyInfo: {
            denomination: "100",
            currency: Currency.RUB
        },
        count: 15
    },
    {
        moneyInfo: {
            denomination: "50",
            currency: Currency.USD
        },
        count: 15
    },
    {
        moneyInfo: {
            denomination: "50",
            currency: Currency.RUB
        },
        count: 50
    },
    {
        moneyInfo: {
            denomination: "10",
            currency: Currency.USD
        },
        count: 30
    },
    {
        moneyInfo: {
            denomination: "10",
            currency: Currency.RUB
        },
        count: 100
    },
    {
        moneyInfo: {
            denomination: "5",
            currency: Currency.USD
        },
        count: 30
    },
    {
        moneyInfo: {
            denomination: "1",
            currency: Currency.USD
        },
        count: 15
    }

]
let cards = [
    {
        id: "0",
        balance: 10000,
        currency: Currency.RUB,
        pin: "0000"
    },
    {
        id: "1",
        balance: 1000,
        currency: Currency.RUB,
        pin: "0001"
    },
    {
        id: "2",
        balance: 8000,
        currency: Currency.RUB,
        pin: "0002"
    },
    {
        id: "3",
        balance: 35000,
        currency: Currency.RUB,
        pin: "0003"
    },
    {
        id: "4",
        balance: 70000,
        currency: Currency.RUB,
        pin: "0004"
    },
    {
        id: "5",
        balance: 2000,
        currency: Currency.USD,
        pin: "0005"
    },
    {
        id: "6",
        balance: 5000,
        currency: Currency.USD,
        pin: "0006"
    },
    {
        id: "7",
        balance: 500,
        currency: Currency.USD,
        pin: "0007"
    },
    {
        id: "8",
        balance: 500,
        currency: Currency.USD,
        pin: "0008"
    },
    {
        id: "9",
        balance: 1500,
        currency: Currency.USD,
        pin: "0009"
    },
    {
        id: "10",
        balance: 7500,
        currency: Currency.USD,
        pin: "0010"
    },
]
let users = [
    {
        id: "1",
        name: "Grisha",
        surname: "Petrov",
        cards: [
            cards[7],
            cards[0]
        ]
    },
    {
        id: "2",
        name: "Alex",
        surname: "Melik",
        cards: [
            cards[6]
        ]
    },
    {
        id: "3",
        name: "Artem",
        surname: "Kojevnikov",
        cards: [
            cards[1]
        ]
    },
    {
        id: "4",
        name: "Grisha",
        surname: "Balagov",
        cards: [
            cards[2]
        ]
    },
    {
        id: "5",
        name: "Sveta",
        surname: "Milavina",
        cards: [
            cards[4],
            cards[5],
        ]
    },
    {
        id: "6",
        name: "Masha",
        surname: "Hudina",
        cards: [

        ]
    },
    {
        id: "7",
        name: "Hana",
        surname: "Look",
        cards: [

        ]
    },
]
let cash = [
    {
        moneyInfo: {
            denomination: "1000",
            currency: 0
        },
        count: 1
    },
    {
        moneyInfo: {
            denomination: "200",
            currency: 0
        },
        count: 1
    }
]
let card1 = {
    id: "1",
    balance: 1000,
    currency: Currency.RUB,
    pin: "0000"
}

let moneyRepo = new MoneyRepository(arrOfMoney);
let office = new BankOffice(users, cards);
let bank = new BankTerminal(office, moneyRepo);


bank.authorizeUser(users[2], card1, "0000");
bank.changeAuthorizedUserSettings(0, "Ykov");
bank.convertMoneyUnits(0, 1, cash);
bank.giveOutUsersMoney(500, 0);
bank.takeUsersMoney(cash)
console.log(bank);
