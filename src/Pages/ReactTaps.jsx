import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CiShoppingCart } from "react-icons/ci";
import 'react-tabs/style/react-tabs.css';
import p1 from '../assets/product1.jpg'
import p2 from '../assets/product2.jpg'
import p3 from '../assets/product3.jpg'
import p4 from '../assets/product4.jpg'
import './tabs.css'

const ReactTaps = () => {
    return (
        <div className='p-6'>
            <h1 className='text-center text-2xl font-bold'>Exclusive Products</h1>
            <Tabs>
                <TabList className='font-bold border-none uppercase items-center text-center justify-center grid grid-cols-2 md:grid-cols-4 my-10 p-5'>
                    <Tab className='border-none bg-none hover:cursor-pointer'>New Arrival</Tab>
                    <Tab className='border-none bg-none hover:cursor-pointer'>Feature</Tab>
                    <Tab className='border-none bg-none hover:cursor-pointer'>Best Sellers</Tab>
                    <Tab className='border-none bg-none hover:cursor-pointer'>Special Offers</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-4'>
                        <div class="container mx-auto px-4 py-8">
                            <div class="max-w-sm mx-auto  bg-white rounded-lg shadow-md overflow-hidden">
                                <div className='card-hover2'>
                                    <img class="w-60 mx-auto object-cover object-center" src={p1} alt="Card Image" />

                                    <div class="global-item-icon absolute bottom-0 right-0 left-0 m-auto">
                                        <ul className='text-center p-0'>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="p-6">
                                    <h2 class="text-md font-semibold text-gray-800">Blue Dress For Woman</h2>
                                    <p class="mt-2 text-red-600 font-semibold">$ 45.00</p>
                                    <div class="mt-4">
                                        <span class="text-gray-600">Author:</span>
                                        <span class="text-blue-500">John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container mx-auto px-4 py-8">
                            <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                                <div className='card-hover2'>
                                    <img class="w-60 mx-auto object-cover object-center" src={p2} alt="Card Image" />

                                    <div class="global-item-icon absolute bottom-0 right-0 left-0 m-auto">
                                        <ul className='text-center p-0'>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                        </ul>
                                    </div>

                                </div>

                                <div class="p-6">
                                    <h2 class="text-md font-semibold text-gray-800">Woman Full Sliv Dress</h2>
                                    <p class="mt-2 text-red-600 font-semibold">$ 45.00</p>
                                    <div class="mt-4">
                                        <span class="text-gray-600">Author:</span>
                                        <span class="text-blue-500">John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container mx-auto px-4 py-8">
                            <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                                <div className='card-hover2'>
                                    <img class="w-60 mx-auto object-cover object-center" src={p3} alt="Card Image" />

                                    <div class="global-item-icon absolute bottom-0 right-0 left-0 m-auto">
                                        <ul className='text-center p-0'>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full hover:text-red-500'></CiShoppingCart></li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="p-6">
                                    <h2 class="text-md font-semibold text-gray-800">Light Blue Shirt</h2>
                                    <p class="mt-2 text-red-600 font-semibold">$ 45.00</p>
                                    <div class="mt-4">
                                        <span class="text-gray-600">Author:</span>
                                        <span class="text-blue-500">John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container mx-auto px-4 py-8">
                            <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                                <div className='card-hover2'>
                                    <img class="w-60 mx-auto object-cover object-center" src={p4} alt="Card Image" />

                                    <div class="global-item-icon absolute bottom-0 right-0 left-0 m-auto">
                                        <ul className='text-center p-0'>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full'></CiShoppingCart></li>
                                            <li className='inline-block transition ease-in-out translate-y-8 opacity-0 h-10'><CiShoppingCart className='a  mr-3 rounded-full'></CiShoppingCart></li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="p-6">
                                    <h2 class="text-md font-semibold text-gray-800">Lether Gray Tuxedo</h2>
                                    <p class="mt-2 text-red-600 font-semibold">$ 45.00</p>
                                    <div class="mt-4">
                                        <span class="text-gray-600">Author:</span>
                                        <span class="text-blue-500">John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ullam similique dolore. Unde minus esse praesentium voluptatibus accusantium expedita at.</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ullam similique dolore. Unde minus esse praesentium voluptatibus accusantium expedita at.</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTaps;