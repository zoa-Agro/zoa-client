import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <div className='text-center my-20 space-y-4'>
            <h2 className='text-red-600 text-5xl'>Payment Failed</h2>
            <Link to={'/checkout'} className='btn bg-[#6bb42f]'>Please Try Again</Link>
        </div>
    );
};

export default PaymentFail;