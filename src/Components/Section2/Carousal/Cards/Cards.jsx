// import React from "react";
// import womenfashion from '../../../../Assets/women-fashion.jpg'
// import menfashion from '../../../../Assets/men-fashion.jpg'
// import heels from '../../../../Assets/heels.jpg'
import "../../Carousal/Cards/Cards.css"

// const Cards = () => {
//   const menuItem = [
//     {
//       text: "20% Off On Tank Tops",
//       subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
//       image:{womenfashion},
//     },
//     {
//       text: "title",
//       subtitle: "subtitle",
//       image:{menfashion},
//     },
//     {
//       text: "title",
//       subtitle: "subtitle",
//       image:{heels},
//     },
//     {
//       text: "title",
//       subtitle: "subtitle",
//       image:
//         ""
//     },
//   ];

//   return (
//     <div className="">
//       {/* Card */}

//       {menuItem.map(({ text, subtitle, image }, index) => {
//         return (
//           <div key={index} className="">
//             {/* Overlay */}
//             <div className="">
//               <p className="">{text} </p>
//               <p className="">{subtitle}</p>
//               <button className="">
//                 Shop Now
//               </button>
//             </div>
//             <img
//               className=""
//               src=""
//               alt="/"
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function App() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
//   return (
//     <div className='w-3/4 m-auto'>
//       <div className="mt-20">
//       <Slider {...settings}>
//         {data.map((d) => (
//           <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
//             <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
//               <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-4 p-4">
//               <p className="text-xl font-semibold">{d.name}</p>
//               <p className="text-center">{d.review}</p>
//               <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
      
//     </div>
//   );
// }

// const data = [
//   {
//     name: `John Morgan`,
//     img: `/students/John_Morgan.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Ellie Anderson`,
//     img: `/public/lpgo192.png`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Nia Adebayo`,
//     img: `/students/Nia_Adebayo.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Rigo Louie`,
//     img: `/students/Rigo_Louie.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: `/students/Mia_Williams.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
  
// ];

// export default App;


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import React from 'react'

export const Cards = () => {
  return (
    <div >
      
      <div className="women"> 
      <h4>20% Off On Tank Tops</h4> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button> Shop Now </button>
      
      </div>
      <div className="men">
      <h4>20% Off On Tank Tops</h4> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button> Shop Now </button>
      </div>
      
      <div className="heels">
      <h4>20% Off On Tank Tops</h4> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
      <button> Shop Now </button>
      </div>

    </div>
  )
}


