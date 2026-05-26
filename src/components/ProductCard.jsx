import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const cartItem = cart.find((item) => item.product_name === product.product_name);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-md">
      <p className="text-xs text-gray-400 uppercase mb-1">{product.product_category}</p>
      <h2 className="text-lg font-semibold mb-1">{product.product_name}</h2>
      <p className="text-sm text-gray-500 mb-3">{product.product_description}</p>
      <div className="flex items-center justify-between">
        <span className="text-green-600 font-bold text-lg">${product.product_price}</span>
        {cartItem ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeFromCart(product.product_name)}
              className="bg-black text-white px-3 py-1 rounded-xl"
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white px-3 py-1 rounded-xl"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white text-sm px-4 py-2 rounded-xl hover:bg-gray-800"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
