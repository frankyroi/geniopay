/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import CardWallet from "components/Cards/CardWallet.js";

import CardRefer from "components/Cards/CardRefer.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-genioPay flex flex-wrap items-center justify-between relative md:w-316 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}>
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            {/* GenioPay */}
            <img src={require("assets/img/geniopay_logo.png").default} alt="..."></img>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/">
                    GenioPay
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Navigation */}
            <div className="p-2 mb-5 w-full lg:w-1 xl:w-1">
              <CardWallet
                walletBalance="$15,001.00"
                walletPoints="35"
                statIconName="fa fa-eye"
              />
            </div>
            

            <ul className="p-2 md:flex-col md:min-w-full flex flex-col list-none mb-6">
              <li className={(window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "bg-white text-genio-green rounded mt-5 px-3 items-center mb-4"
                        : "text-white mt-5 items-center mb-4")}>
                <Link className="py-3 font-bold block " to="/admin/dashboard">
                  
                  <div className="flex flex-wrap text-base">
                  <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/"+(window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "menu_dashboard.png"
                        : "menu_dashboard2.png")).default} alt="..."></img>
                  Dashboard
                  </div>
                </Link>
              </li>

              <li className={(window.location.href.indexOf("/admin/tables") !== -1
                        ? "bg-white text-genio-green rounded px-3 items-center mb-4"
                        : "text-white items-center mb-4 px-3")}>
                <Link className="py-3 font-bold block " to="/admin/tables">
                  {/* <i className="fas fa-tv mr-2 text-sm "></i>{" "} */}
                  
                  <div className="flex flex-wrap text-base">
                  <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/"+(window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "menu_wallet.png"
                        : "menu_wallet2.png")).default} alt="..."></img>
                  Wallet
                  </div>
                </Link>
              </li>


              {/* <li className="items-center text-white px-3 mb-4">
                <Link className="text-xs py-3 font-bold block ">                  
                  <div className="flex flex-wrap text-base">
                  <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/menu_wallet.png").default} alt="..."></img>
                  Wallet
                  </div>
                </Link>
              </li> */}

              <li className="items-center text-white px-3 mb-4">
                <Link className="text-xs py-3 font-bold block" to="/admin/dashboard">
                <div className="flex flex-wrap text-base">
                <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/menu_card.png").default} alt="..."></img>
                  Cards
                </div>
                  
                </Link>
              </li>

              <li className="items-center text-white px-3 mb-4">
                <Link className="text-xs py-3 font-bold block" to="/admin/dashboard">                  
                  <div className="flex flex-wrap text-base">
                  <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/menu_fx.png").default} alt="..."></img>
                  FX Center
                  </div>
                </Link>
              </li>

              <li className="items-center text-white px-3 mb-4">
                <Link className="text-xs py-3 font-bold block " to="/admin/dashboard">                  
                  <div className="flex flex-wrap text-base">
                  <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/menu_beneficiaries.png").default} alt="..."></img>
                  Beneficiaries
                  </div>
                </Link>
              </li>

              <li className="items-center text-white px-3 mb-4">
                <Link className="text-xs py-3 font-bold block " to="/admin/dashboard">                  
                  <div className="flex flex-wrap text-base">
                  <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/menu_perks.png").default} alt="..."></img>
                  Perks
                  </div>
                </Link>
              </li>

            </ul>


            {/* Navigation */}
            <div className="p-2 w-full lg:w-1 xl:w-1 mt-6">
              <CardRefer
                walletBalance="$15,001.00"
                walletPoints="35"
                statIconName="far fa-chart-bar"
              />
            </div>

     
          </div>
        </div>
      </nav>
    </>
  );
}
