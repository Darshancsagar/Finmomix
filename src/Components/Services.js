import React from "react";

const Services = () => {
  return (
    <div>
      <p className="text-2xl text-left text-bold text-white mb-5 mx-4 ">
        Fincomix seems to be a comprehensive platform for stock investors,
        providing a range of tools and features to aid in their investment
        decisions and portfolio management. Let's break down the main features:
      </p>
      <ul className="flex-wrap list-none text-white text-xl justify-center">
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-2 border-purple-600  rounded-lg m-3">
          <span className="text-bolder text-amber-500 text-2xl">
            Stock Screening:
          </span>
          Users can customize their own screens using various financial metrics.
          This feature allows investors to filter and identify stocks that meet
          specific criteria they are interested in, such as P/E ratio, dividend
          yield, market capitalization, etc.
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-2 border-purple-600  rounded-lg m-3">
          <span className="text-bolder text-amber-500 text-2xl">
            News and Analysis:
          </span>
          Fincomix offers news and analysis on individual stocks, sectors, and
          the overall market. This feature helps users stay updated with the
          latest developments that could impact their investments.
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-2 border-purple-600  rounded-lg m-3">
          <span className="text-bolder text-amber-500 text-2xl">
            Stock Alerts:
          </span>
          Investors can set up stock alerts to be notified when a specific stock
          reaches a certain price level. This feature is valuable for users who
          want to closely monitor the price movements of specific stocks.
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/8 p-2 border-2 border-purple-600  rounded-lg m-3">
          <span className="text-bolder text-amber-500 text-2xl">
            Portfolio Tracker:
          </span>
          Fincomix enables users to track the performance of their investment
          portfolio. It likely provides insights into overall portfolio gains or
          losses, individual stock performance, and other relevant metrics to
          help investors assess their investment strategies.
        </li>
        <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/8 p-2 border-2 border-purple-600  rounded-lg m-3">
          <span className="text-bolder text-amber-500 text-2xl">
            Real-Time Market Data:
          </span>
          The platform offers real-time market data, including up-to-date stock
          prices, quotes, and interactive charts. Having access to real-time
          data is crucial for making timely and informed investment decisions.
        </li>
      </ul>
      <p className="text-2xl text-left text-bold text-white mb-5 mx-4 ">
        Overall, Fincomix seems to provide a comprehensive suite of tools and
        information for investors to conduct research, analyze stocks, and
        manage their investment portfolios effectively. By combining stock
        screening, news, alerts, portfolio tracking, and real-time market data,
        it offers a one-stop solution for stock market enthusiasts.
      </p>
    </div>
  );
};

export default Services;
