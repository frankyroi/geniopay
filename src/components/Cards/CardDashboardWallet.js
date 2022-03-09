import React from "react";
import PropTypes from "prop-types";

export default function CardDashboardWallet({
    statType,
    statAmount,
    statCurrency,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-genioYellow rounded-xl mb-6 xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 font-bold text-xs">
                {statType}
              </h5>
              <p className="text-sm text-blueGray-400">
                <span className="whitespace-nowrap">{statCurrency}</span>
              </p>
              
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <img src={require("assets/img/flag_usd2.png").default}
                  className="h-12 w-auto bg-white rounded-full"
                  alt="...">
              </img>{" "}
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-16">
            <span className="font-semibold text-xl text-blueGray-700">
                {statAmount}
            </span>
          </p>
            
        </div>
      </div>
    </>
  );
}

CardDashboardWallet.defaultProps = {
    statType: "Personal account",
    statAmount: "350,897",
    statCurrency: "USD",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardDashboardWallet.propTypes = {
    statType: PropTypes.string,
    statAmount: PropTypes.string,
    statCurrency: PropTypes.string,
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
