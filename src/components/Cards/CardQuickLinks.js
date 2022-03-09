import React from "react";
import PropTypes from "prop-types";

export default function CardQuickLinks({
    statIcon,
    statName,
}) {
  return (
    <>
      <div className="text-center relative flex flex-col min-w-0 break-words bg-whhite rounded mb-6 xl:mb-0 border border-black">
        <div className="flex-auto p-4">
            <img className="mx-auto" src={require("assets/img/"+ (statIcon)).default} alt="..."></img>
            <div className="flex flex-wrap mb-3">
                <div className="relative w-full pl-2 max-w-full flex-grow flex-1">
                    <h5 className="text-black text-xs px-1">
                        {statName}
                    </h5>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
}

CardQuickLinks.defaultProps = {
    statIcon: "new_wallet",
    statName: "Add new Wallet",
};

CardQuickLinks.propTypes = {
    statIcon: PropTypes.string,
    statName: PropTypes.string,
};
