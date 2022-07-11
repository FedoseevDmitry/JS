const itemName = 'Микроволновка';
const itemAmount = 3;
const itemCategory = 'Бытовая техника';
const itemPrice = 3000;

console.log('Название товара:', itemName);
console.log('Сумма товаров:', itemAmount * itemPrice);

{
  const itemNameUser = prompt('Введите название товара: ', 'Товар');
  const itemAmountUser = Number(prompt('Введите количество товара: ', 1));
  const itemCategoryUser = prompt('Введите категорию товара: ', 'Несортированный');
  const itemPriceUser = Number(prompt('Введите стоимость товара: ', 0));

  if (isNaN(itemPriceUser) || isNaN(itemAmountUser)) {
    alert('Вы ввели некорректные данные');
  } else {
    console.log(`Ваш товар: "${itemNameUser}" добавлен в категорию "${itemCategoryUser}"
    в количестве ${itemAmountUser} шт. по цене ${itemPriceUser} рублей.`);
  }
}