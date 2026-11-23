import { test } from '@playwright/test';

test('тестові дані для перевірки логіну', async () => {
  const testEmails = [
    'user@example.com',
    'qa.tester@tasteorama.com',
    'userexample.com',
    'user@',
    '',
  ];

  console.log('До push:', testEmails);

  testEmails.push('another@example.com');

  console.log('Після push:', testEmails);

  // let, бо лічильник буде змінюватися, а const не дозволяє перепризначення
  let checksPassed = 0;
});


test('перевірка кількості знайдених рецептів', async () => {
  const recipesFoundText = '12'; // імітація значення, зчитаного зі сторінки

  const recipesFound = Number(recipesFoundText);

  if (recipesFound === 0) {
    console.log('Результатів не знайдено');
  } else if (recipesFound === 12) {
    console.log('Знайдено очікувану кількість рецептів: 12');
  } else {
    console.log('Знайдено іншу кількість рецептів:', recipesFound);
  }

  const recipeAuthor = null;
  console.log('Автор:', recipeAuthor || 'Автор невідомий');
});


test('перебір email через continue і break', async () => {
  const testEmails = [
    'user@example.com',
    '',
    'qa.tester@tasteorama.com',
    'userexample.com',
    '',
    'user@',
    'another@example.com',
    'last@example.com',
  ];

  let checksPassed = 0;

  for (const email of testEmails) {
    if (email === '') {
      console.log('Порожнє значення, пропускаємо');
      continue;
    }

    if (email === 'another@example.com') {
      console.log('Знайдено email з Кроку 2:', email, '- зупиняємо цикл');
      break;
    }

    checksPassed++;
    console.log('Перевіряємо email:', email);
  }

  console.log('checksPassed:', checksPassed);
});

test('зменшення часу приготування через цикли', async () => {
  // Цикл while
  let cookingTime = 90;

  while (cookingTime >= 30) {
    console.log('while, поточний час приготування:', cookingTime);
    cookingTime -= 10; 
  }
  console.log('while завершено, значення:', cookingTime);

  // Цикл do...while
  let cookingTimeDo = 90;

  // while і do...while розійдуться, якщо стартове значення вже менше за 30 (наприклад, 20):
  // while не виконає тіло жодного разу, а do...while виконає один раз.
  do {
    console.log('do...while, поточний час приготування:', cookingTimeDo);
    cookingTimeDo -= 10; 
  } while (cookingTimeDo >= 30);
  console.log('do...while завершено, значення:', cookingTimeDo);
});