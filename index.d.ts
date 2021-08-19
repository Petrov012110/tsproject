
declare var Custom: {user: User}
declare class User {
    name: string;
    age: number;
    constructor(name: string, age: number);
    upAgeByYear(): void;
}

