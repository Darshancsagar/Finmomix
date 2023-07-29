import React from "react";
import VideoAutoPlay from "./VideoAutoPlay";

const Home = () => {
  return (
    <>
      <div className="bg-zinc-950 mt-2 mb-1 text-left border-green-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg">
        {/* <h2 className="text-5xl text-bolder font-mono  text-center text-white underline uppercase animate-pulse bg-amber-900 shadow-2xl ">
          Fincomix
        </h2> */}
        <p className="text-2xl text-left text-bold text-white mb-5 mx-4">
          Fincomix is a stock analysis screening tool in India. It allows users
          to create custom screens based on variety of Financial metrics
          including market cap , PE ratio, etc.It provides market news, with
          real time data also offers variety of tools and resources to investors
          to make investment decisions.
        </p>
      </div>

      <div className="bg-zinc-950 mt-2 mb-9 text-center border-blue-800 border-2 rounded-2xl mx-9 shadow-blue-900 shadow-lg text-white items-center justify-center mx-9 ">
        <div className=" border-white-800 border-2 rounded-2xl mx-9 shadow-blue-900 shadow-lg text-white mt-5 p-5">
          <h3 className="text-bolder text-white text-4xl text-center mx-5 underline text-yellow-900 ">
            Features
          </h3>
          <p className="text-center text-2xl">
            Some of key features of Fincomix
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-6">
          <div className="bg-zinc-950 mt-2 p-5 mb-9 text-left border-blue-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg text-white text-center hover:rotate-3 max-w-lg">
            <h3 className="text-2xl text-bolder underline py-3 font-serif ">
              Stock screening
            </h3>
            <p className="text-xl ">
              Users can create custom screens based on variety of Financial
              metrics
            </p>
          </div>
          <div className="bg-zinc-950 mt-2 p-5 mb-9 text-left border-blue-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg text-white text-center hover:rotate-3  max-w-lg">
            <h3 className="text-2xl text-bolder underline py-3 font-serif">
              News and Analysis
            </h3>
            <p className="text-xl ">
              Fincomixx provides news and analysis on stocks sectors and market
              as a whole
            </p>
          </div>

          <div className="bg-zinc-950 mt-2 p-5 mb-9 text-left border-blue-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg text-white text-center hover:rotate-3  max-w-lg">
            <h3 className="text-2xl text-bolder underline py-3 font-serif">
              Stock Alerts
            </h3>
            <p className="text-xl ">
              users can setup stock alerts to notify when a stock reaches price
              to certain level
            </p>
          </div>

          <div className="bg-zinc-950 mt-2 p-5 mb-9 text-left border-blue-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg text-white text-center hover:rotate-3  max-w-lg">
            <h3 className="text-2xl text-bolder underline py-3 font-serif">
              Portfolio Tracker
            </h3>
            <p className="text-xl  ">
              Fincomix allows users to track there investment Portfolio and see
              thier stocks performance.
            </p>
          </div>

          <div className="bg-zinc-950 mt-2 p-5 mb-9 text-left border-blue-800 border-2 rounded-lg mx-9 shadow-blue-900 shadow-lg text-white text-center hover:rotate-3  max-w-lg">
            <h3 className="text-2xl text-bolder underline py-3 font-serif">
              RealTime market Data
            </h3>
            <p className="text-xl ">
              Fincomix provides investors with real time market data including
              stock prices, quotes and charts
            </p>
          </div>
        </div>
        <VideoAutoPlay />
      </div>
    </>
  );
};

export default Home;
