import React from 'react';
import Footer from './Footer';

const CallToSection = () => {
    return (
        <>
            <div className='bg-[#2d3436] border-b p-28  flex flex-col items-center justify-between'>
                <div>
                    <h1 className='text-white md:text-3xl'>Subscribe Our Newsletter</h1>
                </div>
                <div>
                    <form className='md:text-right'>
                        <input className='p-3 md:w-72' type="email" placeholder='Enter Email Address' />
                        <button className='bg-black p-3 text-white md:w-24' type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default CallToSection;
