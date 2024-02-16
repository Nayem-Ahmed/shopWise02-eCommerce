// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
import bimg from '../assets/bimg.png';
import img2 from '../assets/bimg2.png';

// import required modules
import { Parallax, Pagination, Navigation,Autoplay } from 'swiper/modules';

const Banner = () => {

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                autoplay={{ delay: 5000 }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundColor': ''
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className='bg-teal-500'>
                    <div className='flex items-center justify-between flex-col  md:flex-row'>
                        <div className="title" data-swiper-parallax="-300">
                            50% off in all products
                            <div className="subtitle  md:text-5xl font-bold my-3" data-swiper-parallax="-200">
                                Women Fashion
                            </div>
                            <button className='btn bg-red-500 mb-2 py-2 px-6 text-white' type='button'>Buy Now</button>
                        </div>
                        <img className='w-96' src={img2} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className='bg-[#81ecec]'>
                    <div className='flex items-center justify-between flex-col md:flex-row'>
                        <div className="title" data-swiper-parallax="-300">
                            50% off in all products
                            <div className="subtitle md:text-5xl font-bold my-3" data-swiper-parallax="-200">
                                Man Fashion
                            </div>
                            <button className='btn bg-red-500 py-2 px-6 mb-2 text-white' type='button'>Buy Now</button>
                        </div>
                        <img className='w-96' src={bimg} alt="" />
                    </div>

                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;