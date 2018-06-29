import './HW_10.scss'

// Задание 2
let user = {};
    user.name = "Вася";
    user.surname = "Петров";
    user.name = "Сергей";
delete user.name;
console.log();

// Задание 3

function isEmpty(obj) {

    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["true"] = "true";

alert( isEmpty(schedule) ); // false

// Задание 4

let salaries = {
    John: 400,
    Jack: 200,
    // test: 'asdasdasd'
};

let sum = 0;
for (let name in salaries) {
    sum += salaries[name];
}

alert( sum );

// Задание 5

let salaries1 = {
    John: 400,
    Jack: 200,
};

let max = 0;
let maxName = "";
for (let name in salaries1) {
    if (max < salaries1[name]) {
        max = salaries1[name];
        maxName = name;
    }
}

alert( maxName || "нет сотрудников" );

// Задание 6
