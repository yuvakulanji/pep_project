import { useState } from "react";

function CustomerDashboard({ cart, setCart, onOpenCart }) {
  const products = [
    // =====================================================
    // ELECTRONICS - 4 PRODUCTS
    // =====================================================

    {
      id: 1,
      name: "Samsung 55-inch 4K Smart LED TV",
      category: "Electronics",
      brand: "Samsung",
      price: 65990,
      mrp: 79990,
      discount: 23,
      rating: 4.4,
      reviews: 6942,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "LG 7 Kg Fully Automatic Washing Machine",
      category: "Electronics",
      brand: "LG",
      price: 26990,
      mrp: 32990,
      discount: 24,
      rating: 4.3,
      reviews: 4287,
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Lenovo IdeaPad Slim 3 Laptop",
      category: "Electronics",
      brand: "Lenovo",
      price: 52990,
      mrp: 64990,
      discount: 18,
      rating: 4.4,
      reviews: 3821,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "boAt Airdopes Wireless Earbuds",
      category: "Electronics",
      brand: "boAt",
      price: 1199,
      mrp: 2990,
      discount: 57,
      rating: 4.2,
      reviews: 12543,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&auto=format&fit=crop",
    },

    // =====================================================
    // FASHION - 4 PRODUCTS
    // =====================================================

    {
      id: 5,
      name: "Bata Men's Racing Shoes",
      category: "Fashion",
      brand: "Bata",
      price: 2799,
      mrp: 3999,
      discount: 40,
      rating: 4.3,
      reviews: 8421,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",
    },

    {
      id: 6,
      name: "Fastrack Analog Men's Watch",
      category: "Fashion",
      brand: "Fastrack",
      price: 2499,
      mrp: 3995,
      discount: 37,
      rating: 4.4,
      reviews: 5267,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop",
    },

    {
      id: 7,
      name: "Women's Printed Saree",
      category: "Fashion",
      brand: "Biba",
      price: 1299,
      mrp: 2499,
      discount: 48,
      rating: 4.3,
      reviews: 3678,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop",
    },

    {
      id: 8,
      name: "Lavie Women's Casual Handbag",
      category: "Fashion",
      brand: "Lavie",
      price: 1499,
      mrp: 2999,
      discount: 50,
      rating: 4.4,
      reviews: 6241,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop",
    },

    // =====================================================
    // KITCHEN - 4 PRODUCTS
    // =====================================================

    {
      id: 9,
      name: "Milton Silicone Bowl",
      category: "Kitchen",
      brand: "Milton",
      price: 189,
      mrp: 250,
      discount: 40,
      rating: 4.4,
      reviews: 3482,
      image:
        "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&auto=format&fit=crop",
    },

    {
      id: 10,
      name: "Professional Stainless Steel Knife Set",
      category: "Kitchen",
      brand: "Wonderchef",
      price: 299,
      mrp: 429,
      discount: 46,
      rating: 4.3,
      reviews: 2876,
      image:
        "https://imarku.net/cdn/shop/files/A16S-Knife-Block-Set-01.jpg?v=1776416790",
    },

    {
      id: 11,
      name: "Cello Kitchen Storage Container Set",
      category: "Kitchen",
      brand: "Cello",
      price: 359,
      mrp: 499,
      discount: 38,
      rating: 4.5,
      reviews: 5128,
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/a/6a11a008901372096221_6.jpg",
    },

    {
      id: 12,
      name: "Preethi Zodiac Mixer Grinder",
      category: "Kitchen",
      brand: "Preethi",
      price: 4299,
      mrp: 5999,
      discount: 28,
      rating: 4.4,
      reviews: 7634,
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop",
    },

    // =====================================================
    // TOYS - 4 PRODUCTS
    // =====================================================

    {
      id: 13,
      name: "Remote Control Racing Toy Car",
      category: "Toys",
      brand: "Hot Wheels",
      price: 999,
      mrp: 1299,
      discount: 33,
      rating: 4.5,
      reviews: 6287,
      image:
        "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&auto=format&fit=crop",
    },

    {
      id: 14,
      name: "Soft Premium Teddy Bear",
      category: "Toys",
      brand: "Stuffcool",
      price: 599,
      mrp: 999,
      discount: 30,
      rating: 4.6,
      reviews: 8241,
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop",
    },

    {
      id: 15,
      name: "Creative Building Blocks Set",
      category: "Toys",
      brand: "LEGO",
      price: 750,
      mrp: 1299,
      discount: 35,
      rating: 4.7,
      reviews: 9342,
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    },

    {
      id: 16,
      name: "Kids Toy",
      category: "Toys",
      brand: "Funskool",
      price: 899,
      mrp: 1399,
      discount: 36,
      rating: 4.4,
      reviews: 4218,
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop",
    },
  ];

  // =====================================================
  // STATES
  // =====================================================

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // =====================================================
  // SEARCH + CATEGORY FILTER
  // =====================================================

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // =====================================================
  // PRICE FORMAT
  // =====================================================

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // =====================================================
  // CATEGORY SELECTION
  // =====================================================

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  // =====================================================
  // ADD TO CART
  // =====================================================

  const addToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      product,
    ]);

    onOpenCart();
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="customer-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="customer-header">

        <div className="brand">

          <div className="brand-logo">
            RG
          </div>

          <div>
            <h2>ReturnGuard</h2>
          </div>

        </div>

        <div className="header-actions">

          <button
            className="header-button"
            onClick={onOpenCart}
          >
            🛒 Cart

            {cart.length > 0 && (
              <span className="cart-count">
                {cart.length}
              </span>
            )}

          </button>

          <button className="header-button">
            👤 Profile
          </button>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="customer-content">

        {/* =================================================
            WELCOME
        ================================================= */}

        <section className="welcome-section">

          <div>

            <h1>
              Welcome back!
            </h1>

            <p>
              Discover products and manage your orders easily.
            </p>

          </div>

          <div className="customer-badge">
            👤
          </div>

        </section>

        {/* =================================================
            SEARCH
        ================================================= */}

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search products, brands and categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        {/* =================================================
            CATEGORY
        ================================================= */}

        <section className="category-section">

          <h2>
            Shop by Category
          </h2>

          <div className="category-list">

            <button
              onClick={() => selectCategory("All")}
            >
              🛍️ All
            </button>

            <button
              onClick={() => selectCategory("Electronics")}
            >
              📱 Electronics
            </button>

            <button
              onClick={() => selectCategory("Fashion")}
            >
              👗 Fashion
            </button>

            <button
              onClick={() => selectCategory("Kitchen")}
            >
              🍳 Kitchen
            </button>

            <button
              onClick={() => selectCategory("Toys")}
            >
              🧸 Toys
            </button>

          </div>

        </section>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        <section className="products-section">

          <div className="section-header">

            <h2>
              {selectedCategory === "All"
                ? "Recommended Products"
                : `${selectedCategory} Products`}
            </h2>

            <button
              className="view-all"
              onClick={() => selectCategory("All")}
            >
              View All →
            </button>

          </div>

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <div className="product-grid">

            {filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (

                <div
                  className="product-card"
                  key={product.id}
                >

                  {/* IMAGE */}

                  <div className="product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />

                  </div>

                  {/* BRAND */}

                  <p className="product-brand">
                    {product.brand}
                  </p>

                  {/* NAME */}

                  <h3>
                    {product.name}
                  </h3>

                  {/* RATING */}

                  <div className="product-rating">

                    <span className="rating-box">
                      ⭐ {product.rating}
                    </span>

                    <span className="review-count">
                      ({product.reviews.toLocaleString("en-IN")})
                    </span>

                  </div>

                  {/* PRICE */}

                  <div className="product-price">

                    <span className="selling-price">
                      {formatPrice(product.price)}
                    </span>

                    <span className="mrp">
                      {formatPrice(product.mrp)}
                    </span>

                    <span className="discount">
                      {product.discount}% off
                    </span>

                  </div>

                  {/* ADD TO CART */}

                  <button
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>

              ))

            ) : (

              <div className="no-products">

                <h3>
                  No products found
                </h3>

                <p>
                  Try searching for another product,
                  brand or category.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default CustomerDashboard;