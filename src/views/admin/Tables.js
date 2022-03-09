import React from "react";

// components

import CardDashboardWalletDetails from "components/Cards/CardDashboardWalletDetails.js";
import CardYourWallet from "components/Cards/CardYourWallet.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 xl:w-5/12 mb-12 xl:mb-0">
          <CardYourWallet />
        </div>
        <div className="w-full mb-12 px-4 xl:w-9/12 mb-12 xl:mb-0">
          <CardDashboardWalletDetails />
        </div>
      </div>
    </>
  );
}
