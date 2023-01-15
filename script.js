// Задание 1
// Создаем переменную типа данных массив.Записываем в массив элементы с помощью цикла.
let arr1 = [];
for(i = 1;i <= 100; i++){
    arr1.push( Math.round( Math.random() * 100 ))
}
//Создаем новую переменную в которой будет хранится новый массив
let arr2; 
//Создаем функцию которая фильтрует и сортирует значения массива arr1 и записывает значения в пременную arr2.
func1 = () => {
    arr2 = arr1.filter(el => el > 50).sort((a,b) => a - b);
}
func1(arr1);
console.log(arr2);

// Задание 2

let arr3 = [];  
let abc = "abcdefghijklmnopqrstuvwxyz";  
// Создаем функцию которая создает рандомную по длине строку 
function word (){  
    const a = [];  
    const len = Math.ceil(Math.random() * 10) 
    for(let i = 0;i < len; i++){  
        a.push(abc[Math.floor(Math.random() * abc.length)]);  
    }  
    return a.join(''); // Преобразовуем все элементы массива в одну строку 
}  
  
for(let i = 1;i <= 100;i++) { // Записываем 100 элементов массива рандомными строками 
    arr3.push(word());  
} 

const arr4 = arr3.sort().map(value => ({ value }));// Сортируем и создаем новый массив с объектами
console.log(arr4)

// Задание 3
// Сортируем наш массив по ключу старт тайм; Перебираем массив в коотором если выполняется условие мы изменяем значение энд тайм,
// если не выполняется мы возвращаем копию массива и добавляем в него объект с текущим элементом массива

const data = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
    { startTime: 6, endTime: 11 }
]

data.sort((a, b) => a.startTime > b.startTime ? 1 : -1)
    .reduce((acc, el) => {
    const lastInterval = acc[acc.length - 1]    // Создаем переменную и присваиваем ей значение последнего элемента массива,на первой итерации это пустой массив

    if (lastInterval && lastInterval.endTime <= el.endTime && el.startTime <= lastInterval.endTime) {   // На первой итерации не выполняется условие,
        lastInterval.endTime = el.endTime;                                                              // поэтому добавляем в новый массив наш текущий элемент
        return acc;                                                                                     // на последующих итерациях если выполняется условие,
    }                                                                                                   // мы изменяем значение последнего элемента массива
                                                                                                        // на текущее значение
    return [...acc, {...el}];
}, [])

