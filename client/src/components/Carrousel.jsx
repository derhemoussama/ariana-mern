import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const CarouselData = [
  {
    id: 7,
    img: "/images/Carousel.imgs1.jpeg",
    subtitle: "Affection",
    title: "Découvrez nos produits",
    title2: "Enduring",
  },
  {
    id: 3,
    subtitle: "Affection",
    title: "Découvrez nos produits",
    title2: "Love",
    img: "/images/Carousel.img2.jpeg",
  },
  {
    id: 5,
    subtitle: "Shimmering",
    img: "/images/Carousel.img.jpeg",
    title: "Découvrez nos produits",
    title2: "Radiant",
  },
  
];
const Carrousel = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiper min-h-[576px] max-h-[776px]"
    >
      {CarouselData.map((prod) => (
        <SwiperSlide key={prod.id} className="relative">
          <img src={prod.img} alt={prod.subtitle} className="w-full" />
     <Link to={`/SingleProduct`}>
          <button className="text-2xl absolute top-1/2 left-24 -translate-y-1/2 border-2 border-white px-8 py-4 text-white hover:text-black hover:border-black transition-colors duration-300">
         {prod.title}
           </button>
     </Link>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
