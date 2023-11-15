import '../Section1/Section1.css'
import brandlogo from '.././../Assets/Brand-logo.png'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBagShopping, faHome, faUser,} from '@fortawesome/free-solid-svg-icons';
// import girl from '../Assets/girl-img-home.avif'


function Section1(){
  return (
    <div className='home-img'>
    <div className="navbar">
        <div className="nav-left">
        <Link to='/'><a href="http://"> <img src={brandlogo} alt="Brand logo" /></a></Link>
            <span>
                <ul >
                <Link to='/'><a href="http://"><li>EVERYTHING</li></a></Link>
                <Link to='/women'><a href="http://"><li>WOMEN</li></a></Link>
                <Link to='/men'><a href="http://"><li>MEN</li></a></Link>
                <Link to='/accessories'> <a href="http://"><li>ACCESSORIES</li></a></Link>
                </ul>
            </span>
        </div>
        <div className="nav-right">
            <ul >
              <Link to='/about' ><a href="http://"><li>ABOUT</li></a></Link> 
              <Link to='/contact' ><a href="http://"><li><p>CONTACT US</p></li></a></Link>
                <a href="http://"> <li>$00.00</li></a>
              <Link to='/wishlist' ><a href="http://"><li> <span><Icon.SuitHeartFill className="align-top" size="20" /></span></li></a></Link>
              <Link to='/cart' ><a href="http://"><li> <span><Icon.BagFill className="align-top" size="20" /></span></li></a></Link>
                <a href="http://"><div className="nav-cart-count">0</div></a>
              <Link to='/login' ><a href="http://"><li> <span><Icon.PersonFill className="align-top" size="24" /></span></li></a></Link> 
            </ul>
        </div>
    </div>
    <div className="banner">
      <h1>Raining Offers For </h1>
      <h1>Hot Summer!</h1>
      <p>25% Off On All Products</p>
    <div className="buttons">
      <button className="button1 " >SHOP NOW</button >
      <button className="button2" >FIND MORE</button>
    </div>
    </div>
   </div>
   
  );
}
export default Section1;