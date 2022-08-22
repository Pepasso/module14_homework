let rand = getRandom(100);

let promise = new Promise((resolve, reject) => {
  let randPromise = rand;
  setTimeout(() => {
    if (randPromise % 2 == 0) {
      resolve('result');
    } else {
      reject('error');
    }
  }, 3000);
});



promise.then(
  result => console.log('Завершено успешно. Сгенерированное число — ' + rand),
  error => console.log('Завершено с ошибкой. Сгенерированное число — ' + rand)
);

function getRandom(num) {
  return Math.floor(Math.random() * num);
}