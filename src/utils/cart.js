export function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    console.error("خطا در دریافت سبد خرید:", error);

    return [];
  }
}

export function updateCartCount() {
  const cart = getCart();

  const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const cartCount = document.querySelector("#cart-count");

  if (cartCount) {
    cartCount.textContent = count;
  }
}
