import React from 'react';

import useAuth from '../../hooks/useAuth';


const DashboardHome = () => {
    
    const { user } = useAuth();
    
    return (
        <div>
            <h2 className='text-4xl font-semibold'> Welcome <span className='text-[#6bb42f]'>{user?.displayName}</span></h2>
        </div>
    );
};

export default DashboardHome;