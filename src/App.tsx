import './App.css'
import { ShoppingCartSolidIcon } from '@fluentui/react-icons-mdl2';
import InstagramIcon from './assets/InstagramIcon';
import FacebookIcon from './assets/FacebookIcon';
import TwitterIcon from './assets/TwitterIcon';

function App() {
  //https://ventura-fluid-demo.squarespace.com/

  return (
    <>
      <header className="header">
          <nav className="navbar">
            <button className="nav-hamburger">
              <div className="nav-hamburger-1"></div>
              <div className="nav-hamburger-2"></div>
            </button>

            <div className="nav-logo">
              <span className="site-title">
                <a href="#">
                  Ventura
                </a>
              </span>
            </div>

            <div className="nav-links">
              <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="nav-socials-purchase-container">

              <div className="nav-socials">
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
              </div>

              <div className="nav-purchase-icon">
                <ShoppingCartSolidIcon style={{color: "#fff", fontSize:"1.5rem"}}/>
                <div className="nav-purchase-icon-count">
                  0
                </div>
              </div>
              
            </div>
          </nav>
        </header>
    </>
  )
}

export default App
