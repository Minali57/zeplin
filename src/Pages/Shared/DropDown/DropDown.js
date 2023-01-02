import React, { useState } from "react";
import Select from "react-select";
import { BsSearch, BsChevronDown } from "react-icons/bs";
const DropDown = ({ name, options, handleChange, selected }) => {
  const [selectedValue, setSelectedValue] = useState();
  var CountryName = [
    {
      value: "india",
      label: "india",
    },
    {
      value: "jndia",
      label: "jndia",
    },
  ];
  var val = selected.map((elem) => ({
    value: elem,
    label: elem,
  }));
  return (
    <>
      <div>
        <label
          htmlFor={`${name}`}
          style={{ display: "none" }}
        >{`${name}Picker`}</label>
        <Select
          options={options}
          value={selected.map((elem) => ({
            value: elem,
            label: elem,
          }))}
          placeholder={name}
          inputId={`${name}`}
          isMulti
          onChange={handleChange}
          aria-label={name}
        ></Select>
      </div>
    </>
  );
};

export default DropDown;
