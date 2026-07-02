import ProductCard from "./ProductCard.jsx"

export default function ProductList({ searchQuery = "", selectedCategory = "All", products = [] }) {
  const loading = products.length === 0

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.product_category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="products" className="mx-auto w-full max-w-7xl scroll-mt-16 px-6 pb-16 pt-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#1a2e1a]">Our Products</h2>
      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 animate-pulse rounded-2xl bg-white shadow-md" />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-[#3a4a3a]">No products match your search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}