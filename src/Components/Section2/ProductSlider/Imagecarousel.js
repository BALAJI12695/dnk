import React, { useRef, useState, useEffect } from 'react';
import Mycard from './Mycard.js';
import './Imagecarousel.css';
import clientlogo1 from '../../../Assets/client-logo-1.png'
import clientlogo2 from '../../../Assets/client-logo-2.png'
import clientlogo3 from '../../../Assets/client-logo-3.png'
import clientlogo4 from '../../../Assets/client-logo-4.png'
import clientlogo5 from '../../../Assets/client-logo-5.png'


const Imagecarousel = () => {
    const boxRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = 10;

    const btnpressprev = () => {
        const width = boxRef.current.clientWidth;
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
        boxRef.current.scrollLeft -= width;
        setCurrentIndex(prevIndex);
    };

    const btnpressnext = () => {
        const width = boxRef.current.clientWidth;
        const nextIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
        boxRef.current.scrollLeft += width;
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            btnpressnext();
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]);

    return (
        <div className="product-carousel">
            <div className="arrow-btns">
                <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                </button>
                <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                </button>
            </div>

            <div className="product-container" ref={boxRef}>
                {Array.from({ length: totalSlides * 2 }, (_, index) => (
                    <Mycard key={index} 
                    cardno={(index % totalSlides) + 1} 
                    imageUrl={
                        index % 5 === 0
                            ? clientlogo1
                            : index % 5 === 1
                            ? clientlogo2
                            : index % 5 === 2
                            ? clientlogo3
                            : index % 5 === 3
                            ? clientlogo4
                            : clientlogo5
                    }/>
                    
                ))}
            </div>
        </div>
    );
};

export default Imagecarousel;
