const categories = [
  { name: "All", image: "https://res.cloudinary.com/dfvjud6r3/image/upload/v1783000498/WhatsApp_Image_2026-07-02_at_6.12.21_PM_c0hkzm.jpg" },
  { name: "Kitchen", image: "https://res.cloudinary.com/dfvjud6r3/image/upload/v1783000374/WhatsApp_Image_2026-07-02_at_6.12.17_PM_loo11j.jpg" },
  { name: "Electronics", image: "https://res.cloudinary.com/dfvjud6r3/image/upload/v1783001664/WhatsApp_Image_2026-07-02_at_6.12.22_PM_qal50n.jpg" },
  { name: "Beauty", image: "https://res.cloudinary.com/dfvjud6r3/image/upload/v1783003091/WhatsApp_Image_2026-07-02_at_6.12.27_PM_jxuz3f.jpg" },
  { name: "Clothing", image: "https://res.cloudinary.com/dfvjud6r3/image/upload/v1783003615/WhatsApp_Image_2026-07-02_at_6.12.33_PM-2_jttpgx.jpg" },
  { name: "Furniture", image: "https://res.cloudinary.com/dfvjud6r3/image/upload/v1783003702/WhatsApp_Image_2026-07-02_at_6.12.37_PM-4_p8xiet.jpg" }
]

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex justify-center gap-6 py-8 px-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat.name} 
          onClick={() => onSelectCategory(cat.name)}
          className="flex flex-col items-center gap-2" 
        >
          <div className={`w-16 h-16 rounded-full overflow-hidden shadow-md transition-all
            ${selectedCategory === cat.name ? "ring-4 ring-green-600 scale-110" : "hover:scale-105"}`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`text-sm font-medium ${selectedCategory === cat.name ? "text-green-700" : "text-gray-600"}`}>
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  )
}