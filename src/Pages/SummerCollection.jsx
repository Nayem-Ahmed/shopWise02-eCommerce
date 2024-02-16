import React, { useState } from 'react';
import summ from '../assets/summer.png'
import ReactiveButton from 'reactive-button';


const SummerCollection = () => {
    const [state, setState] = useState('idle');
    return (
        <div className='flex items-center bg-gray-200 my-10 px-5'>
            <div className='w-3/5'>
                <img className='w-96 relative ' src={summ} alt="" />
            </div>
            <div className='w-2/5'>
                <span className='text-red-500'>New season trends!</span>
                <h1 className='my-3 md:text-3xl font-semibold'>Best Summer Collection</h1>
                <h3 className='font-semibold md:text-xl'>Sale Get up to 50% Off</h3>
                <ReactiveButton className='mt-5'
                    buttonState={state}
                    onClick={() => {
                        setState('loading');
                        setTimeout(() => {
                            setState('success');
                        }, 2000);
                    }}
                />
            </div>
        </div>
    );
};

export default SummerCollection;