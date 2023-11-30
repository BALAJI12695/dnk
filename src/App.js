import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Components/Pages/Product';
import {ShopCategory} from './Components/Pages/ShopCategory';
import {Cart} from './Components/Pages/Cart';
import {LoginSignUp} from './Components/Pages/LoginSignUp';
import { Shop } from './Components/Pages/Shop';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import { WishList } from './Components/Pages/WishList';
import { Cards } from './Components/Section2/Card1/Cards';
import Imagecarousel from './Components/Section2/ProductSlider/Imagecarousel';
import { Section2 } from './Components/Section2/Section2';
import Section1 from './Components/Section1/Section1';
import { Nav } from './Components/Nav';



function App() {
  return (
    
  <div className='App' >


  <Router>
    
    {/* <Nav /> */}
    {/* <Navbar /> */}
    <Section1 />
    {/* <Imagecarousel />
    < Cards /> */}

    
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
