
//Question 1

export interface User {
    name: string;
    age: number;
    occupation: string;
}



export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(`- ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

//Question 2


interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [

    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }


];

export function logPerson(user: Person) {
    console.log(` -${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

//Question 3 

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

//Question 4

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'user';
    name: string;
    age: number;
    role: string;
}

export function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

export function isAdmin(person: User): person is User {
    return person.type === 'user';
}


export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);


//Question 5

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin  {
    type: 'admin';
    name: string;
    age: number;
    occupation: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }

];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: Partial<Omit<User, 'type'>>): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, 'type'>)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

//Question 6

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];

export function filterPersons(persons: Person[], personType: 'user', criteria: Partial<Omit<User, 'type'>>): User[];
export function filterPersons(persons: Person[], personType: 'admin', criteria: Partial<Omit<Admin, 'type'>>): Admin[];
export function filterPersons(persons: Person[], personType: string, criteria: Partial<Person>): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = getObjectKeys(criteria);
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);


//Question 7

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
    return [v2, v1];
}

function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}

function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}

function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}

function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}

function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());


//Question 8



interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & {
    type: 'powerUser'
};

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);


//Question 9

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> =
    | { status: 'success'; data: T; }
    | { status: 'error'; error: string; };

export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
    callback({
        status: 'success',
        data: admins
    });
}

export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {
    callback({
        status: 'success',
        data: users
    });
}

export function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
    callback({
        status: 'success',
        data: Date.now()
    });
}

export function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

function startTheApp(callback: (error: Error | null) => void) {
    requestAdmins((adminsResponse) => {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        } else {
            return callback(new Error(adminsResponse.error));
        }

        console.log();

        requestUsers((usersResponse) => {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            } else {
                return callback(new Error(usersResponse.error));
            }

            console.log();

            requestCurrentServerTime((serverTimeResponse) => {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
                } else {
                    return callback(new Error(serverTimeResponse.error));
                }

                console.log();

                requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
                    } else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }

                    callback(null);
                });
            });
        });
    });
}

startTheApp((e: Error | null) => {
    console.log();
    if (e) {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
    } else {
        console.log('Success!');
    }
});



//Question 10


interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = (
    {
        status: 'success';
        data: T;
    } |
    {
        status: 'error';
        error: string;
    }
);

type CallbackBasedAsyncFunction<T> = (callback: (response: ApiResponse<T>) => void) => void;
type PromiseBasedAsyncFunction<T> = () => Promise<T>;

export function promisify<T>(fn: CallbackBasedAsyncFunction<T>): PromiseBasedAsyncFunction<T> {
    return () => new Promise<T>((resolve, reject) => {
        fn((response) => {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(new Error(response.error));
            }
        });
    });
}

type SourceObject<T> = {[K in keyof T]: CallbackBasedAsyncFunction<T[K]>};
type PromisifiedObject<T> = {[K in keyof T]: PromiseBasedAsyncFunction<T[K]>};

export function promisifyAll<T extends {[key: string]: any}>(obj: SourceObject<T>): PromisifiedObject<T> {
    const result: Partial<PromisifiedObject<T>> = {};
    for (const key of Object.keys(obj) as (keyof T)[]) {
        result[key] = promisify(obj[key]);
    }
    return result as PromisifiedObject<T>;
}

const oldApi = {
    requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};

export const api = promisifyAll(oldApi);

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

async function startTheApp() {
    console.log('Admins:');
    (await api.requestAdmins()).forEach(logPerson);
    console.log();

    console.log('Users:');
    (await api.requestUsers()).forEach(logPerson);
    console.log();

    console.log('Server time:');
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();

    console.log('Coffee machine queue length:');
    console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

startTheApp().then(
    () => {
        console.log('Success!');
    },
    (e: Error) => {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
    }
);

//Question 11

declare module 'str-utils' {
    type StrUtil = (input: string) => string;

    export const strReverse: StrUtil;
    export const strToLower: StrUtil;
    export const strToUpper: StrUtil;
    export const strRandomize: StrUtil;
    export const strInvertCase: StrUtil;
}

//Question 12

declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;

    type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
    export const getMaxIndex: GetIndex;
    export const getMinIndex: GetIndex;
    export const getMedianIndex: GetIndex;

    type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
    export const getMaxElement: GetElement;
    export const getMinElement: GetElement;
    export const getMedianElement: GetElement;

    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;
}


//Question 13

import 'date-wizard';

declare module 'date-wizard' {
    const pad: (ident: number) => string;

    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}

//Question 14

function toFunctional<T extends Function>(func: T): Function {
    const fullArgCount = func.length;
    function createSubFunction(curriedArgs: unknown[]) {
        return function(this: unknown) {
            const newCurriedArguments = curriedArgs.concat(Array.from(arguments));
            if (newCurriedArguments.length > fullArgCount) {
                throw new Error('Too many arguments');
            }
            if (newCurriedArguments.length === fullArgCount) {
                return func.apply(this, newCurriedArguments);
            }
            return createSubFunction(newCurriedArguments);
        };
    }
    return createSubFunction([]);
}

interface MapperFunc<I, O> {
    (): MapperFunc<I, O>;
    (input: I[]): O[];
}

interface MapFunc {
    (): MapFunc;
    <I, O>(mapper: (item: I) => O): MapperFunc<I, O>;
    <I, O>(mapper: (item: I) => O, input: I[]): O[];
}


export const map = toFunctional(<I, O>(fn: (arg: I) => O, input: I[]) => input.map(fn)) as MapFunc;


interface FiltererFunc<I> {
    (): FiltererFunc<I>;
    (input: I[]): I[];
}

interface FilterFunc {
    (): FilterFunc;
    <I>(filterer: (item: I) => boolean): FiltererFunc<I>;
    <I>(filterer: (item: I) => boolean, input: I[]): I[];
}


export const filter = toFunctional(<I>(fn: (item: I) => boolean, input: I[]) => input.filter(fn)) as FilterFunc;

interface ReducerInitialFunc<I, O> {
    (): ReducerInitialFunc<I, O>;
    (input: I[]): O;
}

interface ReducerFunc<I, O> {
    (): ReducerFunc<I, O>;
    (initialValue: O): ReducerInitialFunc<I, O>;
    (initialValue: O, input: I[]): O;
}

interface ReduceFunc {
    (): ReduceFunc;
    <I, O>(reducer: (acc: O, val: I) => O): ReducerFunc<I, O>;
    <I, O>(reducer: (acc: O, val: I) => O, initialValue: O): ReducerInitialFunc<I, O>;
    <I, O>(reducer: (acc: O, val: I) => O, initialValue: O, input: I[]): O;
}

export const reduce = toFunctional(
    <I, O>(reducer: (acc: O, item: I) => O, initialValue: O, input: I[]) => input.reduce(reducer, initialValue)
) as ReduceFunc;

interface ArithmeticArgFunc {
    (): ArithmeticArgFunc;
    (b: number): number;
}

interface ArithmeticFunc {
    (): ArithmeticFunc;
    (a: number): ArithmeticArgFunc;
    (a: number, b: number): number;
}


export const add = toFunctional((a: number, b: number) => a + b) as ArithmeticFunc;


export const subtract = toFunctional((a: number, b: number) => a - b) as ArithmeticFunc;

interface PropNameFunc<K extends string> {
    (): PropNameFunc<K>;
    <O extends {[key in K]: O[K]}>(obj: O): O[K];
}

interface PropFunc {
    (): PropFunc;
    <K extends string>(propName: K): PropNameFunc<K>;
    <O, K extends keyof O>(propName: K, obj: O): O[K];
}

const prop = toFunctional(<O, K extends keyof O>(obj: O, propName: K): O[K] => obj[propName]) as PropFunc;

type F<A extends unknown[], R> = (...args: A) => R;
type TR<I, O> = (arg: I) => O;

interface PipeFunc {
    (): PipeFunc;
    <A1 extends unknown[], R1>(f: F<A1, R1>): (...args: A1) => R1;
    <A1 extends unknown[], R1, R2>(f: F<A1, R1>, tr1: TR<R1, R2>): (...args: A1) => R2;
    <A1 extends unknown[], R1, R2, R3>(f: F<A1, R1>, tr1: TR<R1, R2>, tr2: TR<R2, R3>): (...args: A1) => R3;
    <A1 extends unknown[], R1, R2, R3, R4>(
        f: F<A1, R1>, tr1: TR<R1, R2>, tr2: TR<R2, R3>, tr3: TR<R3, R4>
    ): (...args: A1) => R4;
    <A1 extends unknown[], R1, R2, R3, R4, R5>(
        f: F<A1, R1>, tr1: TR<R1, R2>, tr2: TR<R2, R3>, tr3: TR<R3, R4>, tr4: TR<R4, R5>
    ): (...args: A1) => R5;
}



export const pipe: PipeFunc = function (...functions: Function[]) {
    if (arguments.length === 0) {
        return pipe;
    }
    return function subFunction() {
        let nextArguments = Array.from(arguments);
        let result;
        for (const func of functions) {
            result = func(...nextArguments);
            nextArguments = [result];
        }
        return result;
    };
};

//Question 15

/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

type ObjectWithNewProp<T, K extends string, V> = T & {[NK in K]: V};

export class ObjectManipulator<T> {
    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<ObjectWithNewProp<T, K, V>> {
        return new ObjectManipulator({...this.obj, [key]: value} as ObjectWithNewProp<T, K, V>);
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}




