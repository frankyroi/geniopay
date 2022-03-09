import React from "react";
import PropTypes from "prop-types";

export default function CardRefer({
    referLink,
}) {
  return (
    <>
      <div className="items-center relative flex flex-col min-w-0 break-words bg-genioYellow rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
            <div className="flex flex-wrap">
                <div className="relative w-auto pr-4 flex-initial">
                    <div className="text-genio-green text-center inline-flex items-center justify-center mt-1">
                        <img src={require("assets/img/refer&earn.png").default} alt="..."></img>
                    </div>
                </div>
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 className="text-genio-green font-bold text-l">
                    Refer and earn
                    </h5>
                    <span className="font-semibold text-xs text-genio-green">
                    Use the below link to invite friends
                    </span>
                </div>
            </div>
            <div className="items-center mt-5">
            <button className="w-full bg-genioPay text-white font-bold hover:shadow-md shadow text-s px-4 py-4 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                Invite Friends
            </button>
            </div>
            
            
            
        </div>
      </div>
    </>
  );
}

CardRefer.defaultProps = {
    referLink: "$15,001.00",
};

CardRefer.propTypes = {
    referLink: PropTypes.string,
};
