import React, { useState } from 'react';
import Slider from 'react-slick';
import PlainImg from '../assets/plain-img.png';
import Logo from '../assets/icon.svg';
import { MdArrowRightAlt } from "react-icons/md";

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        padding: 10
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='p-3 relative transition-all duration-300'
                        onMouseEnter={() => { setCurrentImage(image); setCurrentIndex(index); }}
                        onMouseLeave={() => { setCurrentImage(null); setCurrentIndex(null); }}
                    >
                        <img src={currentImage && currentIndex == index ? PlainImg : image} alt="Slide Image" className={`rounded-md ${currentImage && ''}`}

                        />
                        {(currentImage && currentIndex == index) &&
                            <div className='absolute w-11/12 mx-auto text-white px-4 py-5 flex flex-col justify-center gap-y-4 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
                                <div className='flex justify-center'>
                                    <img src={Logo} alt="" className='max-w-[50px] w-full' />
                                </div>
                                <p className='text-2xl text-center uppercase'>Web Development</p>
                                <p className='font-sans text-sm max-[1023px]:pr-10'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                                <div className='flex justify-center'>
                                    <a href="https://www.fylehq.com/" target='_blank' className='text-center uppercase py-2 px-3 rounded-sm flex flex-row items-center gap-2 bg-white text-[#FF3147]'>
                                        Read More <MdArrowRightAlt fontSize={24} />
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;