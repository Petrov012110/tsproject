import * as process from "./lib"
// // import 'reflect-metadata';


let b = new process.SettingValue("p2", "p1")
console.log(b);
console.log("dsdd");



// function DecorateRu(target: Object, method: string, descriptor: PropertyDescriptor) {
//     let originalMethod = descriptor.value;
//     descriptor.value = function (...args) {
//         let returnValue = originalMethod.apply(this, args)
//         return `результат сложения ${this.a} + ${this.b} = ${returnValue}`
//     }
// }

// function DecorateEn(target: Object, method: string, descriptor: PropertyDescriptor) {
//     let originalMethod = descriptor.value;
//     descriptor.value = function (...args) {
//         let returnValue = originalMethod.apply(this, args)
//         return `result of the addition operation ${this.a} + ${this.b} = ${returnValue}`
//     }
// }

// class Calculator {
//     protected a: number = 0;
//     protected b: number = 1;

//     constructor(a: number, b: number) {
//         if (!!a) {
//             this.a = a;
//         }
//         if (!!b) {
//             this.b = b;
//         }
//     }

//     // @DecorateRu
//     // @DecorateEn
//     // public exec(): string {
//     //     return (this.a + this.b).toString();
//     // }
// }

// function validateEmail(email: string): boolean {
//     let re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// function decorator(target: Object, propertyKey: string): any {

//     let _val = this[propertyKey]
//     let getter = function (): string {
//         return _val;
//     };

//     // сеттер
//     let setter = function (newVal: string): void {
//         try {
//             if (validateEmail(newVal)) {
//                 _val = newVal;
//             } else {
//                 throw new Error('not valid')
//             }
//         } catch (e) {
//             console.log("Error: " + e.message);

//         }
//     };
//     if (delete this[propertyKey]) {
//         Object.defineProperty(target, propertyKey, {
//             get: getter,
//             set: setter
//         });
//     }
// }




// // class Example {
// //     @decorator
// //     public email: string = "";
// // }

// // let exampleInstance = new Example();






// abstract class Control<T> {
//     public name: string = "";

//     protected value: T;
//     /**взять значение из контрола */
//     public abstract getValue(): T;
//     /**установить значение в контрол */
//     public abstract setValue(val: T): void;
// }
// /**Класс описывает TextBox контрол */
// class TextBox extends Control<string> {
//     public getValue(): string {
//         return this.value
//     }
//     public setValue(val: string): void {
//         this.value = val
//     }
// }
// /**value контрола selectBox */
// class SelectItem {
//     public value: string;
//     public id: number;
// }

// /**Класс описывает SelectBox контрол */
// class SelectBox extends Control<SelectItem> {
//     public getValue(): SelectItem {
//         return this.value
//     }
//     public setValue(val: SelectItem): void {
//         this.value = val 
//     }
// }

// class Container {
//     public instance: Control<any>;
//     public type: string;
// }

// /**Фабрика которая отвечает за создание экземпляров контролов */
// class FactoryControl {
//     /**Список соотношений тип - инстанс типа */
//     private _collection: Array<Container>;

//     constructor() {
//         this._collection = [];
//     }

//     public register<T extends typeof SelectBox>(type: T) {
//         if(!this.existType(typeof type)) {
//             this._collection.push({instance: type, type: typeof type})
//         }
//     }

//     public getInstance<T extends typeof SelectBox>(type: T): Control<T> {
//         return this._collection.find(item => item.instance === type.prototype).instance
//     }

//     private existType(type: string): boolean {
//         return this._collection.filter(g => g.type === type).length > 0;
//     }
// }

// const factory = new FactoryControl();
// factory.register(SelectBox);

// const selectBoxInstance = factory.getInstance(SelectBox);

// // selectBoxInstance.setValue("sdfsdf") // компилятор TS не пропускает
// // selectBoxInstance.setValue(new SelectItem()) // компилятор TS пропускает



// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }

// const x = {
//     manufacturer: "Toyota",
//     m: "Camry",
//     year: 2014,
// };

// console.log(getProperty(x, "m"));

// function validate(_ValueExample: typeof ValueExample1, arg: string): any {
//     // _ValueExample[arg]
//     console.log(_ValueExample.prototype.id);

//     return function (target: Object, propKey: string) {
//         let val = target[propKey]
//         const getter = () => {
//             return val
//         }
//         const setter = (value) => {
//             let newClass = new _ValueExample( arg, value)
//             console.log(newClass);


//             console.log(typeof value);

//             val = value
//         }
//         Object.defineProperty(target, propKey, {
//             get: getter,
//             set: setter
//         });

//         // let newClass = new _ValueExample();
//         // newClass.id
//         // let propType = Reflect.getMetadata("design:type", target, propKey);
//         // console.log(propType);

//     }
// }
// class ValueExample1 {
//     public value: string;
//     public id: number;
//     public constructor(value?: string, id?: number) {
//         this.value = value;
//         this.id = id;
//     }
// }
// class ValueExample2 {
//     public undefinedProp: undefined;
//     public booleanProp: boolean;
//     public constructor(undefinedProp?: undefined, booleanProp?: boolean) {
//         this.undefinedProp = undefinedProp;
//         this.booleanProp = booleanProp;
//     }
// }
// class Example {
//     @validate(ValueExample1, "id")
//     public propValueExample1: any;

//     // @validate(ValueExample2, "booleanProp")
//     public propValueExample2: any;
// }

// let ex = new Example();

// ex.propValueExample1 = "s"
// console.log(Custom.user);
// Custom.user.upAgeByYear();

// let setValue = new SettingValue("p1", "p2")

// let set = new Setting("key", setValue)

// let example = new Example(set)

// console.log(example);

// interface IUser {
//     name: string;
//     id: number;
// }

// class HttpError extends Error {
//     public response: Response;

//     constructor(response: Response) {
//         super(`${response.status} for ${response.url}`);
//         this.response = response;
//     }
// }

// const req = async (url: string) => {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         return await response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }

// const getGitHub = async () => {
//     let name = prompt("Введите логин на GitHub?", "");
//     try {
//         let user = await req(`https://api.github.com/users/${name}`);
//         document.write(`Полное имя: ${user.name}, уникальный номер: ${user.id}.`);
//     } catch(err) {
//         if (err instanceof HttpError && err.response.status == 404) {
//             document.write("Такого пользователя не существует.");
//         } else {
//             throw err;
//         }
//     }
// }

// getGitHub();