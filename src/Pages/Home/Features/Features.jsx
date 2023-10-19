import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { GiWallet } from 'react-icons/gi';

const Features = () => {
    return (
        <marquee behavior="" loop="" direction="">
            <div className='flex md:grid grid-cols-3  gap-2 mt-8 md:mt-20  w-11/12 mx-auto'>
            <div className='flex gap-4  md:border-r-2 w-full '>
                <div className='text-7xl text-[#6bb42f] opacity-60'>
                    <FaShippingFast/>
                </div>
                <div>
                    <h2 className='text-2xl'>Fast Delivery</h2>
                    <p>Helps people to find everything authentic</p>
                </div>
            </div>
            <div className='flex gap-2  md:border-r-2 '>
                <div className='text-7xl text-[#6bb42f] opacity-60'>
                    <BiSupport/>
                </div>
                <div>
                    <h2 className='text-2xl'>24/7 Delicated Support</h2>
                    <p>Helps people to find everything authentic</p>
                </div>
            </div>
            <div className='flex gap-2  '>
                <div className='text-7xl text-[#6bb42f] opacity-60'>
                    <GiWallet/>
                </div>
                <div>
                    <h2 className='text-2xl'>Money Back</h2>
                    <p>Helps people to find everything authentic</p>
                </div>
            </div>
        </div>
        </marquee>
    );
};

export default Features;