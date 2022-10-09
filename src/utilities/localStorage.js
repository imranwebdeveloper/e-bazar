export const setData = (id) => {
  let newShoppingCart = {};
  let totalProduct = 0;
  const previousShoppingCart = localStorage.getItem("shopping-cart");
  previousShoppingCart && (newShoppingCart = JSON.parse(previousShoppingCart));
  const quantity = newShoppingCart[id];
  quantity ? (newShoppingCart[id] = quantity + 1) : (newShoppingCart[id] = 1);
  localStorage.setItem("shopping-cart", JSON.stringify(newShoppingCart));
  for (const id in newShoppingCart) {
    totalProduct = newShoppingCart[id] + totalProduct;
  }
  localStorage.setItem("previous-cart", totalProduct);
  return totalProduct;
};
