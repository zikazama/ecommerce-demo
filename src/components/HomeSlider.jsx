import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const HomeSlider = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div id="myCarousel" className={`carousel slide mb-6 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} data-bs-ride="carousel" style={{ width: "100%", marginTop: "100px" }}>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner" style={{ height: "500px" }}>
        <div className="carousel-item active">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop" 
            className="d-block w-100 h-100" 
            alt="Headphones"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Premium Headphones</h1>
              <p className="opacity-75">
                Experience crystal clear sound with our premium headphone collection.
              </p>
              <p>
                <a className={`btn btn-lg ${darkMode ? 'btn-outline-light' : 'btn-primary'}`} href="#">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop" 
            className="d-block w-100 h-100" 
            alt="Smart Watch"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Smart Watches</h1>
              <p>
                Stay connected with our collection of stylish and functional smart watches.
              </p>
              <p>
                <a className={`btn btn-lg ${darkMode ? 'btn-outline-light' : 'btn-primary'}`} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img 
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop" 
            className="d-block w-100 h-100" 
            alt="Smart Devices"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Smart Home Devices</h1>
              <p>
                Transform your home with our innovative smart home technology.
              </p>
              <p>
                <a className={`btn btn-lg ${darkMode ? 'btn-outline-light' : 'btn-primary'}`} href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeSlider;