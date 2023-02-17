// 1
function sum(arr) {
    return arr.flat(Infinity).reduce((a, b) => a + b, 0);
}

function mult(arr) {
    return arr.flat(Infinity).reduce((a, b) => a * b, 1);
}

function getResult(arr, callback) {
    callback(arr)
}


// 2

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

function compareUser(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const condition = compareFunction
                ? compareFunction(arr[i], arr[j]) > 0
                : arr[i].toString() > arr[j].toString();
            if (condition) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

users.sort(compareUser);
console.log(users);

// 3 

function each(myArr, callback) {
    callback(myArr)
}

function reversArr(myArr) {
    myArr.reverse()
    return myArr
}

function toNumberArr(myArr) {
    let newArr = [];
    for (let i = 0; i < myArr.length; i++) {
        myArr[i] = Number(myArr[i])
        if (isNaN(myArr[i]) == false) {
            newArr.push(myArr[i]);
        }
    }

    return newArr;
}

// 4

const dateTimer = () => {
    let myDate = new Date;
    console.log(myDate);
    const interval = setInterval(() => {
        myDate.setSeconds(myDate.getSeconds() + 3);
        console.log(myDate);
    }, 3000);


    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, 30000)
};

dateTimer();

// 5

function calling() {
    console.log('Звоню!')
};

const beeps = (callback) => {
    setTimeout(() => {
        let wait = 'Идут гудки...';
        callback(wait);
    }, 1000);
}

const talk = (beeps) => {
    console.log(beeps);
    console.log('Разговор');
}


let wait = beeps(talk);
calling();