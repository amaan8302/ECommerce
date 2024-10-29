import React from "react";

export const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-1">
        <p className="font-semibold">
          {address?.firstName + " " + address?.lastName}
          {/* Amaan Ullah Siddiqui */}
        </p>
        <p>
          {/* House Number 15, Ginnori Bagia Ginnori,Bhopal, Madhya Pradesh, 462001 */}
          {address?.state},{address?.streetAddress},{address?.zipCode}
        </p>
        <div className="space-y-1 font-semibold">
          <p>Phone Number : {address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};
export default AddressCard;
