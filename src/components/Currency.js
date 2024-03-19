import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  return (
    <div className="alert alert-light">
      Currency : 
      {
        <select
          className="form-select form-select-sm mx-lg-2 w-50"
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}>
    
          <option value="£">£ Pound</option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Currency;