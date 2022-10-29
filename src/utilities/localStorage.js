export const getDataFromLocalStore = () => {
  let currentShopping = {};
  const preShoppingCart = localStorage.getItem("shopping-cart");
  if (preShoppingCart) {
    currentShopping = JSON.parse(preShoppingCart);
  }
  return currentShopping;
};

export const setDataToLocalStore = (product) => {
  let newShoppingCart = getDataFromLocalStore();
  const quantity = newShoppingCart[product.id];
  quantity
    ? (newShoppingCart[product.id] = quantity + 1)
    : (newShoppingCart[product.id] = 1);
  localStorage.setItem("shopping-cart", JSON.stringify(newShoppingCart));
  return Object.keys(newShoppingCart).length;
};
