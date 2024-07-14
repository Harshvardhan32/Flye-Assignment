import React from 'react';

const FeedbackSection = () => {
    return (
        <div className='max-w-[1300px] w-11/12 py-16 mx-auto flex flex-col gap-y-10 justify-between items-center'>
            <div className='text-center flex flex-col gap-y-6'>
                <p className='text-3xl uppercase text-[#FF3147]'>Client's Feedback</p>
                <h2 className='text-4xl font-medium uppercase'>People Say's About Us !</h2>
            </div>
            <div className='max-w-[580px] flex flex-col gap-y-6'>
                <p className='font-lg'>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                <p className='text-gray-400'><span className='text-[#FF3147] font-medium'>JANNAT TUMPA</span> - COO, AMERIMAR ENTERPRISES, INC.</p>
            </div>
        </div>
    );
};

export default FeedbackSection;