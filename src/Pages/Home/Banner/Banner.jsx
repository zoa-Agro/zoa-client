import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from '../../../assets/images/plants.jpg'
import banner2 from '../../../assets/images/fish.jpg'
import banner3 from '../../../assets/images/birds.jpg'
import banner4 from '../../../assets/images/animal.jpg'

const Banner = () => {
  const bannerContent= <>  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  <div className="absolute inset-0  flex flex-col justify-center items-center w-2/3 md:w-1/2 mx-auto">
  </div></>
  return (
    <Carousel className="text-center" showStatus={0} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={1000} interval={10000}>
      <div
          className="relative bg-cover bg-center h-72 md:h-[80vh]"
        style={{
          backgroundImage: `url(
           ${banner1}
          )`,
        }}
      >
        {bannerContent}
       
      </div>
      <div
          className="relative bg-cover bg-center h-72 md:h-[80vh]"
        style={{
          backgroundImage: `url(${banner2})`,
        }}
      >
       {bannerContent}
      </div>
      <div
          className="relative bg-cover bg-center h-72 md:h-[80vh]"
        style={{
            backgroundImage: `url(${banner3})`,
        }}
      >
         {bannerContent}
      </div>

      <div
          className="relative bg-cover bg-center h-72 md:h-[80vh]"
        style={{
            backgroundImage: `url(${banner4})`,
        }}
      >
        {bannerContent}
      </div>
      
    </Carousel>
  );
};

export default Banner;
