import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="p-3 mb-2 bg-secondary text-white d-flex align-items-center justify-content-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        name="select"
        id="select"
        defaultValue=""
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
