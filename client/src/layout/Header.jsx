import React, { useState } from "react";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Badge, Divider } from "antd";
import { links } from "./Links";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative">
      <div className="px-24">
        <div className="flex justify-between items-center">
          <MenuOutlined className="text-2xl text-primary" onClick={toggleSidebar} />

          <Link to="/">
            <img src="/ariana.png" alt="logo" className="w-80" />
          </Link>

          <div className="flex items-center justify-between gap-6">
            <Link to="/Auth/login">
              <UserOutlined className="text-2xl text-[#a1897a]" />
            </Link>
            <SearchOutlined className="text-2xl text-[#a1897a]" />

            <Badge
              count={1}
              offset={[10, 13]}
              className="text-[#a1897a]"
              style={{
                backgroundColor: "#a1897a",
              }}
            >
              <ShoppingOutlined className="text-2xl text-[#a1897a]" />
            </Badge>
          </div>
        </div>
        <Divider />
        <div className="flex items-center justify-center gap-12 font-semibold ">
          {links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="capitalize hover:text-primary font-skeina"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {sidebarVisible && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 shadow-lg h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <Link to="/" onClick={toggleSidebar}>
                  <img src="/ariana.png" alt="logo" className="w-40" />
                </Link>
                <CloseOutlined className="text-2xl text-primary" onClick={toggleSidebar} />
              </div>
              <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="capitalize text-lg hover:text-primary"
                    onClick={toggleSidebar}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Divider className="mt-0" />
              <p className="text-center pb-5 italic">
                Ariana © Copyright 2024 - All rights reserved. Created by "Media Experts."
              </p>
            </div>
          </div>
          <div
            className="flex-1 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
