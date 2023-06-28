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
          <label
            htmlFor='ship-destination'
            className='mb-1'
          >
            Shipping Destination:
          </label>
          <br />
          <select
            id='ship-destination'
            value={country}
            onChange={handleCountryChange}
          >
            <option value=''>Select a country</option>
            <option value='Vietnam'>Vietnam</option>
            <option value='America'>America</option>
          </select>
        </form>
        <span
          id='order-total-top'
          className='boldedPrice font-weight-bold pr-2'
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Order Total:
        </span>
      </div>
    </div>
  );
};

export default ShippingForm;
