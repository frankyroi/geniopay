import React from "react";
import PropTypes from "prop-types";

export default function CardWallet({
    walletPoints,
    walletBalance,
    statIconName,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-genioPay2 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
            <div className="flex flex-wrap mb-3">
                <img className="mr-1" src={require("assets/img/wallet.png").default} alt="..."></img>
                <div className="relative w-full pl-2 max-w-full flex-grow flex-1">
                <h5 className="text-white font-bold text-xs">
                    Wallet Balance
                </h5>
                <span className="font-semibold text-l text-white">
                    {walletBalance}
                </span>
                </div>
                <div className="relative w-auto flex-initial">
                    <div className="text-white text-center inline-flex items-center justify-center shadow-lg rounded-full black">
                        <i className={statIconName}></i>
                    </div>
                </div>
            </div>

            <hr className="mb-2 border-b-1 border-blueGray-300" />
            <div className="flex flex-wrap mb-5">
                <img className="mr-1" src={require("assets/img/points.png").default} alt="..."></img>
                <div className="relative w-full pl-2 max-w-full flex-grow flex-1">
                <h5 className="text-white font-bold text-xs">
                    Awarded Points
                </h5>
                <span className="font-semibold text-l text-white">
                    {walletPoints}
                </span>
                </div>
                
            </div>
            <hr className="mb-2 border-b-1 border-blueGray-300" />

            <div className="text-center">
                <button className="bg-genioLightRed active:bg-lightBlue-600 text-white font-bold hover:shadow-md shadow text-s px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    Pay-In
                </button>
                <button className="bg-white active:bg-lightBlue-600 text-genio-green font-bold hover:shadow-md shadow text-s px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    Pay-Out
                </button>
            </div>
            
        </div>
      </div>
    </>
  );
}

CardWallet.defaultProps = {
    walletBalance: "$15,001.00",
    walletPoints: "35",
//   statSubtitle: "Traffic",
//   statTitle: "$15,001.00",
//   statArrow: "up",
//   statPercent: "3.48",
//   statPercentColor: "text-emerald-500",
//   statDescripiron: "Since last month",
//   statIconName: "far fa-chart-bar",
//   statIconColor: "bg-red-500",
};

CardWallet.propTypes = {
    walletBalance: PropTypes.string,
    walletPoints: PropTypes.string,
    statIconName: PropTypes.string,
};
