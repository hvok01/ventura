import './App.css'
import { ShoppingCartSolidIcon } from '@fluentui/react-icons-mdl2';
import InstagramIcon from './assets/InstagramIcon';
import FacebookIcon from './assets/FacebookIcon';
import TwitterIcon from './assets/TwitterIcon';
import { useLayoutEffect, useState, useRef } from 'react';
import gsap from 'gsap';

function App() {
  //https://ventura-fluid-demo.squarespace.com/
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();
  const lineOne = useRef(null)
  const lineTwo = useRef(null)
  const links = useRef(null)
  const logo = useRef(null)
  const cartCount = useRef(null)
  const socialLinks = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false});
      animation(tl)
      setTimeline(tl);
    });
    return () => ctx.revert();
  }, [])

  const animation = (tl: gsap.core.Timeline) => {

    tl?.to(links.current, {
      opacity: 1,
    }).to(lineOne.current, {
      rotate: "315",
      y: "4",
      backgroundColor: "#000"
    }, "<").to(lineTwo.current, {
      rotate: "405",
      y: "-8",
      backgroundColor: "#000"
    }, "<").to(logo.current, {
      color: "#000"
    }, "<").to(cartCount.current, {
      color: "#000"
    }, "<").to("#cartIcon", {
      color: "#000"
    }, "<").to(socialLinks.current, {
      opacity: 1,
    }, "<").reverse()
  }

  const handleNavBarClick = () => {

    timeline?.reversed() ? timeline?.play() : timeline?.reverse();

  }

  return (
    <>
      <header className="header">
          <nav className="navbar">
            <button className="nav-hamburger" onClick={handleNavBarClick}>
              <div className="nav-hamburger-1" ref={lineOne}></div>
              <div className="nav-hamburger-2" ref={lineTwo}></div>
            </button>

            <div className="nav-logo">
              <span className="site-title">
                <a href="#" ref={logo}>
                  Ventura
                </a>
              </span>
            </div>

            <div className="nav-links" ref={links}>
              <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Stockists</a></li>
              </ul>
            </div>

            <div className="nav-socials-purchase-container">

              <div className="nav-socials" ref={socialLinks}>
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
                <ShoppingCartSolidIcon style={{color: "#fff", fontSize:"1.5rem"}} id='cartIcon'/>
                <div className="nav-purchase-icon-count" ref={cartCount}>
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
