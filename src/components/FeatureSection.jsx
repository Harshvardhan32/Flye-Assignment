import React from 'react';
import Img1 from '../assets/1.svg';
import Img2 from '../assets/2.svg';
import Img3 from '../assets/3.svg';
import Img4 from '../assets/4.svg';

const FeatureSection = () => {


    const data = [
        {
            image: Img1,
            title: "Clarified Vision & Target",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi molestiae veniam!"
        },
        {
            image: Img2,
            title: "High Performance",
            description: "Lorem ipsum dolor sit amet consectetur elit. Atque modi molestiae veniam!"
        },
        {
            image: Img3,
            title: "Maintain Security",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi molestiae veniam!"
        },
        {
            image: Img4,
            title: "Better Strategy & Quality",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit. Atque modi molestiae veniam!"
        }
    ];

    return (
        <div className='max-w-[1300px] w-11/12 py-16 mx-auto flex flex-col gap-y-10 justify-between items-center'>
            <div className='text-center flex flex-col gap-y-6'>
                <p className='text-3xl uppercase text-[#FF3147]'>Why Choose Us</p>
                <h2 className='text-4xl font-medium uppercase'>Why We Are Best</h2>
            </div>
            <div className='w-full mx-auto flex flex-row flex-wrap gap-12 justify-center'>
                {data?.map((item, i) =>
                (<div key={i} className='max-w-[250px] flex flex-col gap-y-4'>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <p className='text-xl font-medium'>{item.title}</p>
                    <p className='text-md font-sans'>{item.description}</p>
                </div>)
                )}
            </div>
        </div>
    );
};

export default FeatureSection;