import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import HomeHeader from "../components/HomeHeader";
import HomeSlider from "../components/HomeSlider";
import { Link } from "react-router-dom";

const HomeLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HomeHeader />
      <div className={darkMode ? "dark-mode" : ""} style={{marginTop: "100px"}}>
        <div
          className="theme-toggle"
          style={{
            top: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          {/* <button
            onClick={toggleDarkMode}
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button> */}
        </div>
        <main>
          <HomeSlider />
          {loading ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>Loading products...</div>
          ) : (
            <div style={{ padding: '20px' }}>
              <h2>Products</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {products.map(product => (
              <Link to={"/detail/"+product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                    <img 
                      src={product.thumbnail} 
                      alt={product.title}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }}
                    />
                    <h3 style={{ margin: '8px 0' }}>{product.title}</h3>
                    <p style={{ fontSize: '14px', color: '#666', flex: '1' }}>{product.description}</p>
                    <div style={{ marginTop: '10px' }}>
                      <p><strong>Price:</strong> ${product.price}</p>
                      <p><strong>Category:</strong> {product.category}</p>
                      <p><strong>Rating:</strong> {product.rating}/5</p>
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            </div>
          )}
          {children}
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
