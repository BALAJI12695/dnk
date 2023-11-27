import './App.css';
// import './../src/Components/Head/Head'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Section1 from './Components/Section1/Section1';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Components/Pages/Product';
import {ShopCategory} from './Components/Pages/ShopCategory';
import {Cart} from './Components/Pages/Cart';
import {LoginSignUp} from './Components/Pages/LoginSignUp';
import { Shop } from './Components/Pages/Shop';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import { WishList } from './Components/Pages/WishList';
import { Section2 } from './Components/Section2/Section2';
import Cat from './Components/Section2/Card2/Cat';
import Car from './Components/Section2/Card3/Car';
import { Cards } from './Components/Section2/Card1/Cards';
import Caroline from './Components/Section2/Carousal/Caroline';
import PartnersSlider from './Components/Section2/Carousal/Caroline';
import Kerosal from './Components/Section2/Kerosal/Kerosal';
import Imagecarousel from './Components/Section2/ProductSlider/Imagecarousel';
import { Button } from 'bootstrap';
import { Nav } from './Components/Navbar/Nav';
import { Hamburgermenu } from './Components/Hamburgermenu';
import { FeaturedProduct } from './Components/Section3/FeaturedProduct';
import { Ham } from './Components/Ham';




function App() {
  return (
    
  <div className='App' >


  <Router>
    {/* <Ham /> */}
  {/* <Hamburgermenu /> */}
  {/* <Nav /> */}
    {/* <Navbar /> */}
    <Section1 />
    {/* < Cat />
    < Car />
    <Kerosal /> */}
    {/* <Imagecarousel />
    < Cards /> */}
    {/* <Caroline /> */}
 {/* <FeaturedProduct /> */}
    
    <Routes>
    <Route path='/' element={<Shop />} />
    <Route path='/men' element={<ShopCategory Category="men" />} />
    <Route path='/women' element={<ShopCategory Category="women" />} />
    <Route path='/accessories' element={ <ShopCategory Category="Accessories" /> } /> 
    <Route path='/about' element={ < About /> } /> 
    <Route path='/contact' element={ < Contact  /> } /> 
    <Route path='/product' element={ <Product /> } /> 
      <Route path='/productId' element={ <Product /> } /> 
    <Route />
    <Route path='/wishlist' element={<WishList />} /> 
    <Route path='/cart' element={<Cart />} /> 
    <Route path='/login' element={<LoginSignUp />} /> 
    </Routes>
  </Router>

</div>
    
  );
}

export default App;
