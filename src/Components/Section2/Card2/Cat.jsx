import React from "react";
import Carousel from "react-elastic-carousel";
import "../Card2/Style.css"
import Card  from '../Card2/Card'
import logoipsum1 from '../.../../../../Assets/logoipsum1.png'
import logoipsum2 from '../.../../../../Assets/logoipsum2.png'
import logoipsum3 from '../.../../../../Assets/logoipsum3.png'
import logoipsum4 from '../.../../../../Assets/logoipsum4.png'


export default function Cat(){
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
  return (
    <>
    <div className="space" style={{width:"100%", height:"50px"}} ></div>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum1} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum2} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum3} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum4} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum1} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum2} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum3} alt="logo"  /> </Card>
          <Card> <img style={{height:"160%", width:"100%"}} src={logoipsum4} alt="logo"  /> </Card>
        </Carousel>
      </div>
    </>
  );
}

