import React, { useState, useEffect } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch products and categories from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);

        // Fetch categories from the API
        const categoryResponse = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="shop-page">
      <div className="filter-container">
        <button className="filter-btn" onClick={toggleFilter}>
          {isFilterOpen ? "Hide Filter" : "Show Filter"}
        </button>
        <select
          className="category-select"
          onChange={handleCategoryChange}
          value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="shop-content">
        {/* Sidebar */}
        {isFilterOpen && (
          <div className="filter-sidebar">
            <h3>Filters</h3>
            <div className="filter-group">
              <label htmlFor="price-range">Price Range:</label>
              <select id="price-range">
                <option value="all">All</option>
                <option value="low">Under $20</option>
                <option value="medium">$20 - $50</option>
                <option value="high">Above $50</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="rating">Rating:</label>
              <select id="rating">
                <option value="all">All</option>
                <option value="4">4 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="2">2 Stars & Up</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="price-range">Range:</label>
              <select id="price-range">
                <option value="all">All</option>
                <option value="low">Under $20</option>
                <option value="medium">$20 - $50</option>
                <option value="high">Above $50</option>
              </select>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="shop-container">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@shop.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Shopping Street, Shop City</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
