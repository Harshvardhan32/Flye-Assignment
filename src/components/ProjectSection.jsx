import React, { useState } from 'react';
import Image1 from '../assets/pic1.avif';
import Image2 from '../assets/image.png';
import Image3 from '../assets/pic2.avif';

const ProjectSection = () => {

    const data = [
        {
            image: Image1,
            title: "Genderless Kei - Japan's Hot",
            description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        },
        {
            image: Image2,
            title: "Better Strategy & Quality",
            description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        },
        {
            image: Image3,
            title: "Genderless Kei - Japan's Hot",
            description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
        },
    ];

    const [index, setIndex] = useState(1);

    return (
        <div className='max-w-[1300px] w-11/12 py-16 mx-auto flex flex-col gap-y-16'>
            <div className='text-center flex flex-col gap-y-6'>
                <p className='text-3xl uppercase text-[#FF3147]'>Our Project</p>
                <h2 className='text-4xl font-medium uppercase'>Why We Are Best</h2>
            </div>

            <div className='max-h-full flex flex-row max-[820px]:flex-col-reverse max-[820px]:items-center gap-8'>
                <div className=''>
                    {data?.map((item, i) => {
                        if (i == index) {
                            return (
                                <img key={i} src={item.image} alt="" className='max-h-[500px] h-full aspect-auto' />
                            );
                        }
                    })}
                </div>

                <div className='bg-[#F6F6F6] rounded-sm flex flex-col transition-all duration-300'>
                    {data?.map((item, i) => (
                        <div key={i}
                            onClick={() => setIndex(i)}
                            className={`${index == i && "bg-[#FF3147] text-white"} cursor-pointer px-4 py-8 flex flex-col gap-y-4`}>
                            <p className='text-xl font-medium'>{item.title}</p>
                            <p className='text-md font-sans'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ProjectSection;