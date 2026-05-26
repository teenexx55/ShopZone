export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer id="info" className="mt-auto bg-[#152a21] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:py-14">
        <div>
          <p className="text-lg font-semibold">🛍️ ShopZone</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Your one-stop shop for everyday essentials, curated picks, and great
            prices — delivered with care.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <button
                type="button"
                onClick={() => scrollTo("home")}
                className="transition hover:text-white"
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo("products")}
                className="transition hover:text-white"
              >
                Products
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo("info")}
                className="transition hover:text-white"
              >
                Contact & info
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>support@shopzone.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Mon – Sat, 9am – 6pm</li>
            <li>123 Market Street, Green City</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} ShopZone. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
