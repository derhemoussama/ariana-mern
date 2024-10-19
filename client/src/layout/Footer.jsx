import React from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="flex justify-between  h-72 pr-14">
        <div>
          <img src="/ariana.png" alt="" className="w-96 " />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold italic my-5">ARIANA</h1>
          <Link
            to={Home}
            className="hover:text-gray-500 text-xl font-extralight italic"
          >
            Notre Politique de vente
          </Link>
          <Link
            to={"#"}
            className="hover:text-gray-500 text-xl font-extralight italic"
          >
            Nos Moyens de paiement (CMI)
          </Link>
          <Link
            to={"#"}
            className="hover:text-gray-500 text-xl font-extralight italic"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 mt-5">
            <h1>NOS CERTIFICATIONS</h1>
            <Link to={"#"}>
              <div>
                <img
                  src="/images/img12.jpeg"
                  alt="Certification 2"
                  className="img-fluid"
                  style={{ maxHeight: "80px" }}
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
  <h1>RÉSEAUX SOCIAUX</h1>
  <div className="flex gap-4">
    <Link to="https://www.https://www.tiktok.com/@theariana_official.com" target="_blank">
      <img src="/tik-tok-1-54x54.png" alt="Tiktok" className="w-16 h-16" />
    </Link>
    <Link to="https://www.instagram.com/arianacosmetiqueofficiel/" target="_blank">
      <img src="/instagram-1-54x54.png" alt="Instagram" className="w-16 h-16" />
    </Link>
    <Link to="https://www.youtube.com" target="_blank">
      <img src="/youtube-1-54x54.png" alt="YouTube" className="w-16 h-16" />
    </Link>
  </div>
</div>


        </div>
      </div>
      <Divider className="mt-0" />
      <p className="text-center pb-5 italic">
        Ariana © Copyright 2024 - All rights reserved. Created by "Media
        Experts."
      </p>
    </footer>
  );
};

export default Footer;
