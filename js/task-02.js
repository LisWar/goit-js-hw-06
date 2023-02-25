const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientArr = ingredients.map(i => {
  const li = document.createElement('li');
  li.textContent = i;
  li.classList.add('item');
  return li;
});

list.append(...ingredientArr);