"use client";
import { createCart, addToCartShopify } from "@/lib/shopify";
import { useEffect, useState } from "react";
import {
  getCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  CartItem,
} from "@/lib/cart";

export default function CartDrawer() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  function refreshCart() {
    setCart(getCart());
  }
  
   useEffect(() => {
  refreshCart();

  const openCart = () => {
    refreshCart();
    setOpen(true);
  };

  window.addEventListener("open-cart", openCart);

  return () => {
    window.removeEventListener("open-cart", openCart);
  };
}, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
const FREE_SHIPPING = 100;

const remaining = Math.max(0, FREE_SHIPPING - subtotal);

const progress = Math.min(
  (subtotal / FREE_SHIPPING) * 100,
  100
);
return (
  <>
      {/* DRAWER */}
      {open && (
  <div className="fixed inset-0 z-50">
          <div
  className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
    open ? "opacity-100" : "opacity-0"
  }`}
  onClick={() => setOpen(false)}
/>

       <div
  className={`absolute right-0 top-0 h-full w-full max-w-md bg-black border-l border-white/10 transform transition-transform duration-300 ease-out flex flex-col ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>

            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
           <h2 className="text-xl font-light uppercase tracking-[0.2em]">
  YOUR BAG
</h2>

             <button
  onClick={() => setOpen(false)}
  className="uppercase text-xs tracking-[0.3em] text-zinc-400 hover:text-white transition-all duration-300"
>
  ← Continue Shopping
</button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              <>
            <div className="flex-1 overflow-y-auto px-6 pt-6">
                <div className="space-y-6">

                  {cart.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-white/10 pb-6"
                    >

                      <div className="flex gap-3 items-start">
                        <img
  src={item.image}
  alt={item.name}
  className="w-24 h-24 rounded-lg object-cover border border-white/10"
/>

                        <div className="flex-1">
                         <h3 className="text-[15px] font-medium uppercase tracking-[0.06em] leading-tight">{item.name}</h3>

<p className="text-zinc-500 text-xs mt-2 uppercase tracking-[0.15em]">
  Size: {item.size}
</p>

<p className="text-lg mt-3">
  ${item.price}
</p>
                        </div>
                      </div>

                      {/* QUANTITY CONTROLS */}
                      <div className="flex items-center justify-between mt-3 pl-[108px]">

                        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2 py-1">
                          <button
                            onClick={() => {
                              decreaseQuantity(i);
                              refreshCart();
                            }}
                           className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => {
                              increaseQuantity(i);
                              refreshCart();
                            }}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black rounded-full transition"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            removeItem(i);
                            refreshCart();
                          }}
                          className="uppercase text-xs tracking-[0.2em] text-gray-500 hover:text-white transition"
                        >
                          Remove
                        </button>

                      </div>

                    </div>
                  ))}

                </div>
<div className="mb-8">

  <p className="uppercase text-xs tracking-[0.3em] mb-4">
    FREE SHIPPING
  </p>

  {subtotal < FREE_SHIPPING ? (
    <>
      <p className="text-sm text-gray-300 mb-3">
        You're
        <span className="font-semibold text-white">
          {" "}
          ${remaining.toFixed(2)}
        </span>{" "}
        away from <span className="uppercase">FREE SHIPPING</span>
      </p>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-700 ease-out"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </>
  ) : (
    <>
      <p className="rounded-full border border-white py-3 text-center uppercase tracking-[0.3em] text-sm">
        ✓ FREE SHIPPING UNLOCKED
      </p>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-white"
          style={{ width: "100%" }}
        />
      </div>
    </>
  )}

</div>
                {/* FOOTER */}
                <div className="mt-10 border-t border-white/10 pt-6">
               <div className="flex items-center justify-between mb-8 text-lg">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                 <button
  onClick={async () => {
  if (cart.length === 0) return;

  try {
    const first = cart[0];

    const shopifyCart = await createCart(
  first.variantId,
  first.quantity
);

    for (let i = 1; i < cart.length; i++) {
      await addToCartShopify(
        shopifyCart.id,
        cart[i].variantId,
        cart[i].quantity
      );
    }

    console.log("Checkout URL:", shopifyCart.checkoutUrl);

window.location.href = shopifyCart.checkoutUrl;
  } catch (err) {
    console.error(err);
    alert("Checkout failed.");
  }
}}
 className="w-full h-14 rounded-full bg-white text-black uppercase tracking-[0.35em] text-sm font-medium transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98]"
>
  Checkout
</button>

          </div>

          </div>
        </>
      )}

      </div>
    </div>
  )}
  </>
);
}