// Дождь

const rain = Math.round(Math.random());

if (rain >= 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
};

// Баллы для поступления

const examMath = Number(prompt('Введите кол-во баллов по математике: ', 0));
const examRu = Number(prompt('Введите кол-во баллов по русскому языку ', 0));
const examInf = Number(prompt('Введите кол-во баллов по информатике: ', 0));

if (isNaN(examMath) || isNaN(examRu) || isNaN(examInf)) {
  alert('Вы ввели некорректные данные. Пожалуйста, указывайте числа.');
  } else if ((examMath + examRu + examInf) >= 265) {
    console.log(`Поздравляю, вы поступили на бюджет!`);
  } else {
    console.log(`Баллов по экзаменам не хватило для постуления на бюджет.`)
};

// Банкомат

const takeAtm = Number(prompt('Введите нужное количество: ', 0));

if (isNaN(takeAtm)) {
  alert('Вы ввели некорректные данные. Пожалуйста, указывайте числа.');
  } else if (takeAtm % 100 === 0) {
    console.log(`Вы можете снять сумму: ${takeAtm}!`);
  } else {
    console.log(`Банкомат выдает только суммы кратные 100.`)
};