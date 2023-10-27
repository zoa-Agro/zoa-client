import React from 'react';

const PageBanner = ({name,previousPage,currentPage}) => {
    return (
        <div className="p-5 shadow border mb-10 bg-white">
          <img
          className="object-cover object-center w-full h-52"
            src="https://img.freepik.com/free-photo/elevated-view-yellow-goldenrods-solidago-gigantea-limonium-flowers-wooden-backdrop_23-2148066403.jpg?w=900&t=st=1698314898~exp=1698315498~hmac=f583fd34c015d7ac8da7851020eda666e5943a0964402bb3d8e0e1fb3c7571d0"
            alt="Plants and Seeds"
          />
          <div className="flex justify-between p-5 items-center  ">
            <h3 className="text-3xl font-bold ">
              {name? name : "Shop"}
            </h3>
            <h4 className="font-medium "><span className='text-gray-400'>{previousPage} {'>'}</span> {currentPage}</h4>
          </div>
        </div>
    );
};

export default PageBanner;