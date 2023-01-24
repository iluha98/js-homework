const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
  
const data = await response.json(); // читаем ответ в формате JSON
  
console.log(data)

const fullName = []; // Создаем пустой массив в котором будут хранится наши данные

for(let i = 0; i < data.length; i++){   // У каждого элемента массива берем name и разделяем его
    const a = data[i].name.split(' ');
    if(a[0] === "Mrs." || a[0] === "Mr."){  // Задаем условие если есть приставка то пушим 2 и 3 элемент
        fullName.push({ firstName : a[1], lastName: a[2]})
    } else {                                               // Если нет приставки то пушим 1 и 2 элемент
        fullName.push({ firstName : a[0], lastName: a[1]})
    }
}
console.log(fullName);