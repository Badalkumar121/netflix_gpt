import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full justify-center items-center bg-black text-white">
      <p className="p-3 flex justify-center items-center text-center">
        Badal Kumar &copy; {new Date().getFullYear()} 
      </p>
    </div>
  );
};

export default Footer;