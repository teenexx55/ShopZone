import ProductList from './components/ProductList'
import Nav from './components/Nav.jsx'
import CartSlider from './components/CartSlider.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import { useState, useEffect } from "react"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    fetch("https://product-api-production-7fe9.up.railway.app/allproducts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products")
        return res.json()
      })
      .then((data) => {
      console.log("Products received:", data);
      setProducts(Array.isArray(data) ? data : []);
})
      .catch(() => setProducts([]))
  }, [])

  return (
    <div className="page-bg flex min-h-screen flex-col">
      <Nav
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        products={products}
      />
      <Hero />
      <CategoryFilter
        products={products}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        products={products}
      />
      <Footer />
      <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default App