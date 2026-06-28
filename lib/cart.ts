export type CartItem = {
  slug: string;
  variantId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

const CART_KEY = "sacrilege-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function save(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: CartItem) {
  const cart = getCart();

  const existing = cart.find(
    (i) => i.slug === item.slug && i.size === item.size
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(item);
  }

  save(cart);
  window.dispatchEvent(new Event("cart-updated"));
}

export function increaseQuantity(index: number) {
  const cart = getCart();
  cart[index].quantity++;
  save(cart);
  window.dispatchEvent(new Event("cart-updated"));
}

export function decreaseQuantity(index: number) {
  const cart = getCart();

  cart[index].quantity--;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  save(cart);
  window.dispatchEvent(new Event("cart-updated"));
}

export function removeItem(index: number) {
  const cart = getCart();
  cart.splice(index, 1);
  save(cart);
  window.dispatchEvent(new Event("cart-updated"));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}