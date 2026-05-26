import { useState, useEffect } from "react"
import ProductCard from "./ProductCard.jsx"

export default function ProductList({ searchQuery = "" }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://product-api-production-7fe9.up.railway.app/allproducts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products")
        return res.json()
      })
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="products" className="mx-auto w-full max-w-7xl scroll-mt-16 px-6 pb-16 pt-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#1a2e1a]">Our Products</h2>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-2xl bg-white shadow-md"
            />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-[#3a4a3a]">{products.length === 0 ? "No products to show right now." : "No products match your search."}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.product_name} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
