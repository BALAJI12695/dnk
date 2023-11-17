import React, { useRef, useState, useEffect } from 'react';
import Mycard from './Mycard.js';
import './Imagecarousel.css';

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
                    <Mycard key={index} cardno={(index % totalSlides) + 1} />
                ))}
            </div>
        </div>
    );
};

export default Imagecarousel;
