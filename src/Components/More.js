import React from "react";
import image from "../Assests/webdesigngif.gif";

const More = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p className="bg-gray-800 text-white py-8 border-green-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg">
          {" "}
          We are developing our website soon you will get more updates.....
        </p>
        <img src={image} alt="Web Design GIF" />
      </div>
    </div>
  );
};

export default More;
