import '../Section1/Section1.css'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBagShopping, faHome, faUser,} from '@fortawesome/free-solid-svg-icons';
// import girl from '../Assets/girl-img-home.avif'


function Section1(){
  return (
    <div className='home-img'  >
     <nav class="navbar navbar-expand-lg bg ">
        <Link to='/'><div class="navbar-brand" href="#"></div></Link>
        <div class=" d-flex ">
        <div className='nav-cart'>
        <ul class="navbar-nav flex-row " >
        <li class="nav-item active " ><Link id='black' class="nav-link" to='/cart'> <div>$00.00</div></Link></li>
        <li class="nav-item active "><Link id='black' class="nav-link" to='/wishlist' ><Icon.SuitHeartFill  size="20" /></Link></li>
        <li class="nav-item active "><Link id='black' class="nav-link" to='/cart' ><Icon.BagFill  size="20" /></Link></li>
        <li class="nav-item active "><div className="nav-cart-count">0</div></li> 
        </ul>
        </div>
        <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0  ">
        <li class="nav-item active" id='person' ><Link class="nav-link" to='/login' ><Icon.PersonFill  size="25" /></Link></li> 
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/'>EVERYTHING</Link></li>
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/women'>WOMEN</Link></li>
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/men'>MEN</Link></li>  
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/accessories'>ACCESSORIES</Link></li>        
        </ul>
      
        <ul class="navbar-nav mb-lg-0" >
        <span class="navbar-nav mb-4 mb-lg-0">
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/about' >ABOUT</Link></li>
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/contact' >CONTACT US</Link></li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/cart'> <div>$00.00</div> </Link> </li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/wishlist' ><Icon.SuitHeartFill  size="20" /></Link></li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/cart' ><Icon.BagFill  size="20" /></Link></li>
        <li class="nav-item " id='hamhide' ><div className="nav-cart-count">0</div></li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/login' ><Icon.PersonFill  size="25" /></Link></li> 
        </span>
      </ul>
      </div>
</nav>
    <div className="container">
      <div className='banner'>
      <div className='rain'><h1>Raining Offers For  Hot Summer!</h1></div>
      <div className='offer'><p>25% Off On All Products</p></div>
      <div className="buttons">
      <button className="button1 " >SHOP NOW</button >
      <button className="button2" >FIND MORE</button>
      </div>
    </div>
    </div>
    </div>
   
   
   
  );
}
export default Section1;