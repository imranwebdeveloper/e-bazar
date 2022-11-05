export const getDataFromLocalStore = () => {
  let currentShoppingCart = {};
  const preShoppingCart = localStorage.getItem("shopping-cart");
  if (preShoppingCart) {
    currentShoppingCart = JSON.parse(preShoppingCart);
  }
  return currentShoppingCart;
};

export const setDataToLocalStore = (product) => {
  let newShoppingCart = getDataFromLocalStore();
  let newProduct;
  const quantity = newShoppingCart[product.id];
  if (quantity) {
    newShoppingCart[product.id] = quantity + 1;
  } else {
    newShoppingCart[product.id] = 1;
    newProduct = product;
  }
  product.quantity = newShoppingCart[product.id];
  localStorage.setItem("shopping-cart", JSON.stringify(newShoppingCart));
  return newProduct;
};

export const removeDataToLocalStore = (id) => {
  let currentShoppingCart = getDataFromLocalStore();
  delete currentShoppingCart[id];
  localStorage.setItem("shopping-cart", JSON.stringify(currentShoppingCart));
};
