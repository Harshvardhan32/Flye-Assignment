import React from 'react';
import Logo1 from '../assets/heart.svg';
import Logo2 from '../assets/clock.svg';
import Logo3 from '../assets/Path 4402.svg';
import Logo4 from '../assets/Path 4406.svg';
import { FaCheck } from "react-icons/fa6";

const CompanyGrowthSection = () => {

    const growthData = [
        {
            logo: Logo1,
            data: "199+",
            description: "Satisfied Customers"
        },
        {
            logo: Logo2,
            data: "1591+",
            description: "Days Of Operation"
        },
        {
            logo: Logo3,
            data: "283+",
            description: "Complete Project"
        },
        {
            logo: Logo4,
            data: "75+",
            description: "Win Awards"
        },
    ];

    return (
        <div className='w-full bg-[#FAFAFA] py-16 transition-all duration-300'>
            <div className='max-w-[1300px] w-11/12 mx-auto flex flex-col gap-y-10'>
                <div className='text-center flex flex-col gap-y-6'>
                    <p className='text-3xl uppercase text-[#FF3147]'>Experts Growths</p>
                    <h2 className='text-4xl font-medium uppercase'>Our Company Growth</h2>
                </div>
                <div className='w-full mx-auto flex flex-row flex-wrap gap-12 justify-center items-center'>
                    {
                        growthData?.map((data, i) => (
                            <div key={i} className='w-[250px] bg-white hover:shadow-xl rounded-md py-4 px-6 text-center flex flex-col gap-y-2 transition-all duration-200'>
                                <div className='w-full flex justify-center relative'>
                                    <img src={data.logo} alt="" className='w-[18%]' />
                                    {i == 2 && <FaCheck fontSize={32} fill='#FF3147' className='absolute left-[50%] -translate-x-[10px] -translate-y-1' />}
                                </div>
                                <p className='text-4xl'>{data.data}</p>
                                <p className='text-xl'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CompanyGrowthSection;