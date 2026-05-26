import ProductList from './components/ProductList'
import Nav from './components/Nav.jsx'
import CartSlider from './components/CartSlider.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from "react"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://product-api-production-7fe9.up.railway.app/allproducts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products")
        return res.json()
      })
      .then((data) => setProducts(Array.isArray(data) ? data : []))
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
      <ProductList />
      <Footer />
      <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
export default App