/*
//1 Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
//2 Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
//3 Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
//4 Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
//5 Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
//6 Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
*/
//1
interface unionIndexSignature {
    [key: string]: number | string;
}

//2
interface indexFunction {
    [key: string]: (...args: any[]) => any;
}

//3
interface arrayLike <T> {
    [index: number]: T;
}

//4
interface namedObject {
    name: string;
    [key: string]: any;
}

//5
interface basicIndexSignature {
    [key: string]: any;
}
interface extendedIndexSignature extends basicIndexSignature {
    specificProperty: string;
}

//6
interface indexUnion {
    [key: string]: number | string;
}
function checkValues(obj: indexUnion, criterion: 'number' | 'string'): boolean {
    for (const key in obj) {
        if (typeof obj[key] !== criterion) {
            return false;
        }
    }
    return true;
}

/*
const obj: indexUnion = { a: 10, b: 'hometask', c: 7 };
console.log(checkValues(obj, 'number'));
console.log(checkValues(obj, 'string'));
*/
