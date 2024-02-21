import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';



const OurClient = () => {
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
                autoplay={{delay:3000}}
            >
                <SwiperSlide className='bg-[#FFF1F1] my-4'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold'>Our Client Say!</h1>
                        <p className='text-sm max-w-2xl my-4 text-gray-600 text-center mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                        <div className='flex max-w-60 mx-auto my-9 flex-col md:flex-row items-center'>
                            <img className='w-20 mx-auto' src="https://i.ibb.co/P5GVvLP/tastydaily-1145973067.jpg" alt="" />
                            <div>
                                <h1>Lissa Castro</h1>
                                <p className='text-red-500'>Designer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide className='bg-[#FFF1F1] my-4'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold text-center'>Our Client Say!</h1>
                        <p className='text-sm max-w-2xl my-4 text-gray-600 mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                        <div className='flex max-w-60 mx-auto my-9 flex-col md:flex-row items-center'>
                            <img className='w-20 mx-auto' src="https://i.ibb.co/dtwrgrh/product3.jpg" alt="" />
                            <div>
                                <h1>Alden Smith</h1>
                                <p className='text-red-500'>Designer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default OurClient;