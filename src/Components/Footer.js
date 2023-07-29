import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-8 border-green-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-around">
          <div class="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
            <h3 class="text-lg font-bold">Fincomix</h3>
            <p class="mt-2">
              Fincomix is a stock analysis screening tool in India. It allows
              users to create custom screens based on variety of Financial
              metrics including market cap , PE ratio, etc.It provides market
              news, with real time data also offers variety of tools and
              resources to investors to make investment decisions.
            </p>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0 m-3">
            <h4 class="text-lg font-bold m-3">Services</h4>
            <ul class="mt-2">
              <li>Stock market updates</li>
              <li>
                <a href="#">Finance and Educatioin</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-4 border-gray-600" />
        <div class="text-center"></div>
        <p class="mt-4 text-sm text-gray-500 text-center">
          &copy; 2023 Fincomix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
