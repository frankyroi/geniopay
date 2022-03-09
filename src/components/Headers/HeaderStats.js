import React from "react";

// components

import CardDashboardWallet from "components/Cards/CardDashboardWallet.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative">
        <div className="md:px-10 mx-auto w-full">
          <div>
          <h1 className="mb-4">Wallet</h1>
            {/* Card stats */}
            <div className="flex flex-wrap mb-20 items-center ">
              <div className="w-full lg:w-6/12 xl:w-3/12 mr-4">
                <CardDashboardWallet
                  statType="Personal account"
                  statAmount="$10,250.00"
                  statCurrency="USD"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="relative w-auto pl-4 flex-initial">
              <div className=
                  "text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 border bprder-black rounded-full ">
                <i className="fa fa-plus"></i>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
