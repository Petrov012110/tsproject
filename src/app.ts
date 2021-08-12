function DecorateRu(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnValue = originalMethod.apply(this, args)
        return `результат сложения ${this.a} + ${this.b} = ${returnValue}`
    }
}

function DecorateEn(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnValue = originalMethod.apply(this, args)
        return `result of the addition operation ${this.a} + ${this.b} = ${returnValue}`
    }
}

class Calculator {
    protected a: number = 0;
    protected b: number = 1;

    constructor(a: number, b: number) {
        if (!!a) {
            this.a = a;
        }
        if (!!b) {
            this.b = b;
        }
    }

    // @DecorateRu
    @DecorateEn
    public exec(): string {
        return (this.a + this.b).toString();
    }
}

function validateEmail(email: string): boolean {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function decorator(target: Object, propertyKey: string): any {

    let _val = this[propertyKey]
    let getter = function (): string {
        return _val;
    };

    // сеттер
    let setter = function (newVal: string): void {
        try {
            if (validateEmail(newVal)) {
                _val = newVal;
            } else {
                throw new Error('not valid')
            }
        } catch (e) {
            console.log("Error: " + e.message);

        }
    };
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}




class Example {
    @decorator
    public email: string = "";
}

let exampleInstance = new Example();