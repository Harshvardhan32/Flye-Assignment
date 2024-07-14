import React, { useState, useRef } from 'react';
import LazyLoad from 'react-lazyload';
import Image from '../assets/hero.png';
import useOnClickOutside from '../hooks/useClickOutSide';
import { IoMdCheckbox } from "react-icons/io";
import { IoMdSquareOutline } from "react-icons/io";
import toast from 'react-hot-toast';

const HeroSection = () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setOpen(false));

    const onSubmit = (event) => {
        if (!checked) {
            toast.error("Please accept terms and conditions");
            event.preventDefault();
            return;
        }
    };

    return (
        <div className='max-w-[1300px] w-11/12 py-16 mx-auto flex flex-row max-[700px]:flex-col gap-12 justify-between items-center'>
            <div className='max-w-[50%] max-[700px]:max-w-full flex flex-col gap-y-6 justify-start'>
                <p className='text-3xl uppercase text-[#FF3147]'>Award Winning</p>
                <h1 className='text-5xl font-medium uppercase'>Digital Marketing Agency</h1>
                <p className='text-md font-sans'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum.</p>
                <button onClick={() => setOpen(true)} className='py-3 px-6 w-fit bg-[#FF3147] uppercase text-white rounded-sm'>Contact Us</button>
            </div>
            <div className=''>
                <LazyLoad height={200} offset={100}>
                    <img src={Image} alt="Hero" className='max-w-[400px] w-full transition-opacity duration-500 opacity-100' />
                </LazyLoad>
            </div>
            {
                open &&
                <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-gray-950 bg-opacity-10 backdrop-blur-sm">
                    <div ref={ref} className="w-11/12 max-w-[400px] rounded-md border-2 border-gray-100 bg-white p-6 transition-opacity duration-300">
                        <p className='text-2xl text-gray-700 font-sans font-medium pb-10'>Talk to us</p>
                        <form
                            action="https://getform.io/f/bjjemmrb"
                            method="POST"
                            encType='multipart/form-data'
                            className='w-full flex flex-col gap-y-10'
                        >
                            <div className='flex flex-col gap-2 relative'>
                                <label
                                    htmlFor="work-email"
                                    className={`absolute transition-all duration-300 ${focusedField === 'work-email' ? 'opacity-100 -top-6' : 'opacity-0 top-1/2 transform -translate-y-1/2'} text-gray-400 text-sm font-medium`}
                                >
                                    Work email*
                                </label>
                                <input
                                    type="email"
                                    id='work-email'
                                    name='work-email'
                                    placeholder={focusedField === 'work-email' ? '' : 'Work email*'}
                                    className='w-full text-base font-medium py-1 outline-none border-b-[1.5px] border-gray-400 transition-all duration-300'
                                    onFocus={() => setFocusedField('work-email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                            </div>
                            <div className='flex flex-row gap-x-6 w-full'>
                                <div className='flex flex-col gap-2 relative'>
                                    <label
                                        htmlFor="first-name"
                                        className={`absolute transition-all duration-300 ${focusedField === 'first-name' ? 'opacity-100 -top-6' : 'opacity-0 top-1/2 transform -translate-y-1/2'} text-gray-400 text-sm font-medium`}
                                    >
                                        First name*
                                    </label>
                                    <input
                                        type="text"
                                        id='first-name'
                                        name='first-name'
                                        placeholder={focusedField === 'first-name' ? '' : 'First name*'}
                                        className='w-full text-base font-medium py-1 outline-none border-b-[1.5px] border-gray-400 transition-all duration-300'
                                        onFocus={() => setFocusedField('first-name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-2 relative'>
                                    <label
                                        htmlFor="last-name"
                                        className={`absolute transition-all duration-300 ${focusedField === 'last-name' ? 'opacity-100 -top-6' : 'opacity-0 top-1/2 transform -translate-y-1/2'} text-gray-400 text-sm font-medium`}
                                    >
                                        Last name*
                                    </label>
                                    <input
                                        type="text"
                                        id='last-name'
                                        name='last-name'
                                        placeholder={focusedField === 'last-name' ? '' : 'Last name*'}
                                        className='w-full text-base font-medium py-1 outline-none border-b-[1.5px] border-gray-400 transition-all duration-300'
                                        onFocus={() => setFocusedField('last-name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 items-start relative'>
                                <input
                                    type="checkbox"
                                    className='appearance-none'
                                />
                                {checked ?
                                    <IoMdCheckbox
                                        fontSize={34}
                                        fill='#FF3147'
                                        className='absolute -top-0 -left-2 transition-all duration-300'
                                        onClick={() => setChecked(false)}
                                    />
                                    :
                                    <IoMdSquareOutline
                                        fontSize={34}
                                        fill='#FF3147'
                                        className='absolute -top-0 -left-2 transition-all duration-300'
                                        onClick={() => setChecked(true)}
                                    />
                                }
                                <p className='font-sans text-gray-500 ml-10'>I agree to Fyle's terms and conditions, and provide consent to send me communication.</p>
                            </div>
                            <button
                                onClick={onSubmit}
                                className='bg-[#FF3366] text-white py-3 px-4 rounded-md w-full text-xl font-medium transition-all duration-300 hover:bg-[#ff668c]'>Contact Us</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default HeroSection;