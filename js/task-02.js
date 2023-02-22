const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

ingredients.forEach(i => {
  const item = document.createElement("li");
  item.textContent = i;
  item.classList.add("item");
  list.append(item);
});