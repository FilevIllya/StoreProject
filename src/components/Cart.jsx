import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="mb-4 p-2 border-4 border-gray-500 rounded-lg"
            >
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Count: {product.quantity}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 my-2 rounded hover:bg-red-600"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <button
            className="bg-red-500 text-white px-4 py-2 my-2 rounded hover:bg-red-600"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
