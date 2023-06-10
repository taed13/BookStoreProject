import React, { useState } from "react";

const ShippingForm = () => {
  const [country, setCountry] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the selected country
    console.log("Selected country:", country);
  };

  return (
    <div className='container p-0'>
      <div style={{ position: "relative" }}>
        <form onSubmit={handleSubmit} className='nopadding'>
          <br />
        </form>
        <span
          id='order-total-top'
          className='boldedPrice font-weight-bold pr-2'
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Tổng hóa đơn:
        </span>
      </div>
    </div>
  );
};

export default ShippingForm;
