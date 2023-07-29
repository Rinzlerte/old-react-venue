import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../assets/img/Ariana1.jpg';
import slide2 from '../../assets/img/Ariana2.jpg';
import slide3 from '../../assets/img/Ariana3.jpg';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed:  500
    }
    return(
        <div className="carrousel_wrapper" 
            style={{ 
                height:`${window.innerHeight}px`,
                overflow: 'hidden',
            }}>
            <Slider {...settings}>
                <div style={{
                    width: `100%`,
                    height: `100%`,
                }}>
                    <div className="carrousel_image"
                    style={{
                        backgroundImage: `url(${slide1})`,
                        height:`${window.innerHeight}px`,
                        backgroundSize: 'cover'
                    }}></div>
                </div>
                <div style={{
                    width: `100%`,
                    height: `100%`,
                }}>
                    <div className="carrousel_image"
                    style={{
                        backgroundImage: `url(${slide2})`,
                        height:`${window.innerHeight}px`,
                        backgroundSize: 'cover'
                    }}></div>
                </div>
                <div style={{
                    width: `100%`,
                    height: `100%`,
                }}>
                    <div className="carrousel_image"
                    style={{
                        backgroundImage: `url(${slide3})`,
                        height:`${window.innerHeight}px`,
                        backgroundSize: 'cover'
                    }}></div>
                </div>
            </Slider>
        </div>
    );
}
export default Carrousel;