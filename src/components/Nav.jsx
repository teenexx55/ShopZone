import { Menu, Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";

const navLinkClass =
  "cursor-pointer transition hover:text-white text-white/75";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ onCartClick, searchQuery, onSearchChange, products = [] }) {
  const { totalItems } = useCart();
  const [showResults, setShowResults] = useState(false);

  const filteredProducts = searchQuery.trim() 
    ? products.filter((product) =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#152a21]">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-6 py-2.5">
        <Menu className="h-4 w-4 text-white/80" />

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-base font-semibold tracking-tight text-white transition hover:text-white/90"
        >
          ShopZone
        </button>

        <ul className="ml-8 hidden items-center gap-8 text-sm md:flex">
          <li>
            <button type="button" onClick={() => scrollToSection("home")} className={navLinkClass}>
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className={navLinkClass}
            >
              Products
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("info")} className={navLinkClass}>
              Info
            </button>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            <input
              className="w-52 rounded-full border border-white/15 bg-white/10 py-1.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/25"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            
            {showResults && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-[#0f1f1b] border border-white/15 shadow-lg max-h-96 overflow-y-auto z-50">
                {filteredProducts.slice(0, 5).map((product) => (
                  <button
                    key={product.product_name}
                    type="button"
                    onClick={() => {
                      setShowResults(false);
                      onSearchChange("");
                    }}
                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/10 transition border-b border-white/5 last:border-b-0"
                  >
                    <div className="font-medium">{product.product_name}</div>
                    <div className="text-white/60 text-xs">₹{product.price}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onCartClick}
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-[#152a21]">
                {totalItems}
              </span>
            )}
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <User className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
