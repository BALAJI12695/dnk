
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../Components/Ham.css'

export const Ham = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg">
        <div class="container-fluid">
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
      
      <ul class="navbar-nav mt-3 mb-lg-0" >
        <span class="navbar-nav mb-4 mb-lg-0">
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/about' >ABOUT</Link></li>
        <li class="nav-item active" id='menu2' ><Link class="nav-link" to='/contact' ><p>CONTACT US</p></Link></li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/cart'> <div>$00.00</div> </Link> </li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/wishlist' ><Icon.SuitHeartFill  size="20" /></Link></li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/cart' ><Icon.BagFill  size="20" /></Link></li>
        <li class="nav-item " id='hamhide' ><div className="nav-cart-count">0</div></li>
        <li class="nav-item " id='hamhide' ><Link class="nav-link" to='/login' ><Icon.PersonFill  size="25" /></Link></li> 
        </span>
      </ul>
      </div>
    </div>
</nav>

</div>
    
  );
}

