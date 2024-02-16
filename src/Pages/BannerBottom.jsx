import React from 'react';
import bg from '../assets/b.jpg'
import bg2 from '../assets/b2.jpg'

const BannerBottom = () => {
    return (
        <div className='flex gap-4 flex-col md:flex-row p-5'>
            <div className='md:w-1/2' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', padding: '100px', backgroundSize: 'cover' }}>
                <div className='text-right'>
                    <p className='text-xl'>Super Sale</p>
                    <h1 className='md:text-3xl font-bold my-3'>New Collection</h1>
                    <button className='hover:text-red-500 '>Shop Now</button>
                </div>
            </div>
            <div className='md:w-1/2' style={{ backgroundImage: `url(${bg2})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', padding: '100px', backgroundSize: 'cover' }}>
                <div className='text-right'>
                    <p className='text-xl'>New Season</p>
                    <h1 className='md:text-3xl font-bold my-3'>Sale 40% Off</h1>
                    <button className='hover:text-red-500 '>Shop Now</button>
                </div>
            </div>

        </div>
    );
};

export default BannerBottom;