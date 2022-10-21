export const setDataToLocalStore = (id) => {
  let newShoppingCart = {};
  const previousShoppingCart = localStorage.getItem("shopping-cart");
  previousShoppingCart && (newShoppingCart = JSON.parse(previousShoppingCart));
  const quantity = newShoppingCart[id];
  quantity ? (newShoppingCart[id] = quantity + 1) : (newShoppingCart[id] = 1);
  localStorage.setItem("shopping-cart", JSON.stringify(newShoppingCart));
  return newShoppingCart;
};
export const getDataFromLocalStore = () => {
  let currentShopping;
  const preShoppingCart = localStorage.getItem("shopping-cart");
  if (preShoppingCart) {
    currentShopping = JSON.parse(preShoppingCart);
  }
  return currentShopping;
};
