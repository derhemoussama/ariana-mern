import React from "react";
import Carrousel from "../components/Carrousel";
import SectionTitles from "../components/SectionTitles";
import SingleProduct from "../components/SingleProduct";
import Button from "../components/Button";
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/img5.jpeg",
  "/images/img3.jpeg",
  "/images/img8.jpeg",
  "/images/img10.jpeg",
  "/images/img13.jpeg",
  "/images/img6.jpeg"
];

const Home = () => {
  return (
    <main>
      {/* Carrousel */}
      <div className="p-24">
        <Carrousel />
      </div>

      {/* section */}
      <div className="p-16">
        <SectionTitles title={"Qualité Premium"} />
        <div className="flex mt-16">
          <img src="/images/shampoing.png" alt="image1" className="w-1/2" />
          <div className="bg-[#FFEEE4] w-1/2 flex flex-col justify-center items-center p-14 gap-16">
            <h1 className="text-4xl">NOTRE LABORATOIRE​</h1>
            <p className="font-thin text-lg">
              Notre gamme pour les cheveux sont le fruit d'une expertise
              méticuleuse et d'une passion profonde pour la beauté naturelle.
              Chaque produit est formulé pour offrir des résultats
              exceptionnels, supérieur et premium tout en respectant la santé de
              votre peau et de vos cheveux.
            </p>
            <Link to={`/SingleProduct`}>
                     <Button title={"EXPLORER NOTRE GAMME"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <SectionTitles title={"Notre Bestseller"} />
        <h1 className="text-3xl text-center my-8">Le botox capillaire</h1>
        <video
          src="https://ariana.ma/wp-content/uploads/2024/05/Ariana.mp4"
          muted
          autoPlay
          controls
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* Notre Produits est: */}
      <div className="my-5 px-36">
        <SectionTitles title={"Notre produit est :"} />
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-96"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img src={image} alt={`Image ${index + 1}`} className="w-64" />
              <p className="text-center text-4xl italic">Cruelty free</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Home;
