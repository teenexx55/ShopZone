import { useCart } from "../context/CartContext.jsx"

export default function CartSlider({ isOpen, onClose }) {
  const { cart, totalPrice, addToCart, removeFromCart } = useCart()

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close cart"
          className="fixed inset-0 z-40 bg-black/30"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-[min(100vw,22rem)] flex-col bg-[#f7faf7] shadow-2xl transition-transform duration-300 sm:w-96 ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#152a21]/10 bg-[#152a21] px-6 py-4">
          <h2 className="text-lg font-bold text-white">Your Cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-lg text-white transition hover:bg-white/25"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5">
          {cart.length === 0 ? (
            <p className="mt-12 text-center text-sm text-gray-500">Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.product_name}
                className="flex items-center justify-between gap-3 rounded-full border border-[#152a21]/8 bg-white px-5 py-4 shadow-[0_4px_20px_-4px_rgba(21,42,33,0.18)]"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#1a2e1a]">
                    {item.product_name}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-[#2d5a3d]">
                    ${item.product_price}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 rounded-full bg-[#f0f5f1] px-2 py-1.5">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product_name)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#152a21] text-sm font-medium text-white transition hover:bg-[#1e3d2f]"
                  >
                    −
                  </button>
                  <span className="min-w-[1.25rem] text-center text-sm font-semibold text-[#1a2e1a]">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#152a21] text-sm font-medium text-white transition hover:bg-[#1e3d2f]"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#152a21]/10 bg-white px-6 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Total</span>
            <span className="text-xl font-bold text-[#1a2e1a]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-[#152a21] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(21,42,33,0.45)] transition hover:bg-[#1e3d2f]"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
