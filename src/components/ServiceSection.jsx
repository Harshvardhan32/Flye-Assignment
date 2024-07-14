import React from 'react';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './ImageSlider';

const ServiceSection = () => {

    const images = [Image1, Image2, Image3, Image2];

    return (
        <div className='w-full bg-[#FAFAFA] py-16'>
            <div className='max-w-[1300px] w-11/12 mx-auto flex flex-row max-[700px]:flex-col gap-12 justify-between items-center'>
                <div className='max-w-[50%] max-[700px]:max-w-full max-[700px]:text-center w-full flex flex-col gap-y-6'>
                    <p className='text-3xl uppercase text-[#FF3147]'>What We Do</p>
                    <h2 className='text-4xl font-medium uppercase'>Services Provide For You</h2>
                </div>
                <div className='max-w-[50%] max-[700px]:max-w-full w-full'>
                    <p className='text-md font-sans'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum.</p>
                </div>
            </div>
            <div className='max-w-[1300px] w-11/12 py-16 mx-auto'>
                <ImageSlider images={images} />
            </div>
        </div>
    );
};

export default ServiceSection;