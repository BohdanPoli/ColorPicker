import products from "./data.js";

const colorPickerOptions = [
  { label: "red", color: "#F44346" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = colorPickerOptions.map((element) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = element.label;
//   buttonEl.style.backgroundColor = element.color;
//   buttonEl.classList.add("color-picker__options");
//   return buttonEl;
// });

// Create the function

function createPickerOptions(options) {
  return options.map((element) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.textContent = element.label;
    buttonEl.style.backgroundColor = element.color;
    buttonEl.classList.add("color-picker__options");
    return buttonEl;
  });
}

const elementsColor = createPickerOptions(colorPickerOptions);

colorPickerContainerEl.append(...elementsColor);

// Create a product cards

// const product = {
//   name: "Машинка",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus pariatur.",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

/*
<article class="product">
<h2 class="product__name">Назва</h2>
<p class="product__descr">Опис</p>
<p class="product__price">Ціна:</p>
</article>; 
*/

const cardContainerEl = document.querySelector(".js-cards");

const makeProductCard = ({ name, description, price } = {}) => {
  const articleEl = document.createElement("article");
  articleEl.classList.add("product");

  const productNameEl = document.createElement("h2");
  productNameEl.textContent = name;
  productNameEl.classList.add("product__name");

  const productDescrEl = document.createElement("p");
  productDescrEl.textContent = description;
  productDescrEl.classList.add("product__descr");

  const productPriceEl = document.createElement("p");
  productPriceEl.textContent = `Ціна: ${price}`;
  productPriceEl.classList.add("product__price");

  articleEl.append(productNameEl, productDescrEl, productPriceEl);

  return articleEl;
};

const elementsCards = products.map(makeProductCard);
cardContainerEl.append(...elementsCards);
