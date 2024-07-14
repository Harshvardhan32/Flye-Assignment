import React from 'react';
import FooterImage from '../assets/Group.png';

const Footer = () => {
    return (
        <div className='w-full bg-[#FF3147] py-16'>
            <div className='max-w-[1300px] w-11/12 mx-auto py-8'>
                <img src={FooterImage} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Footer;