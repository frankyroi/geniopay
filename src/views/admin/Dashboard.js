import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import CardQuickLinks from "components/Cards/CardQuickLinks.js";

export default function Dashboard() {
  return (
    <>
    <div className="bg-white m-4 p-4 rounded-xl">
    <HeaderStats />
      <div className="px-4 mb-6">
      <h2>Quick Links</h2>
      <p>Your frequently used actions for easy access.</p>
      </div>

      <div className="flex flex-wrap mb-20">
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="new_wallet.png"
            statName="Add new Wallet"
          />
        </div>
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="new_card.png"
            statName="Add new Card"
          />
        </div>
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="balance_exchange.png"
            statName="Balance Exchange"
          />
        </div>
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="transfer_to_account.png"
            statName="Transfer to Account"
          />
        </div>
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="generate_voucher.png"
            statName="Generate Voucher"
          />
        </div>
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="mobile_money.png"
            statName="Mobile Money"
          />
        </div>
        <div className="w-full xl:w-2/12 xl:mb-0 px-2">
          <CardQuickLinks 
            statIcon="payment_link.png"
            statName="Payment Link"
          />
        </div>
        
      </div>
    


      <div className="container mx-auto px-4 mb-6">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
              Activity
              <a href="/" className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1 pl-10">
                Month <i className="fa fa-chevron-down"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12">
            <ul className="flex flex-wrap list-none md:justify-end justify-center">
              
              <li>
                <a href="/"
                  className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3">
                  View Transaction History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
      
    </div>
      
    </>
  );
}
