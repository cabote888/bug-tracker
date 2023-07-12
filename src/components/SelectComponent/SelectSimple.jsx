import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectSimple(props) {
  library.add(faAngleDown);
  const AngleDownIcon = () => {
    return <FontAwesomeIcon icon="angle-down" />;
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <AngleDownIcon />
      </components.DropdownIndicator>
    );
  };

  useEffect(() => {
    setEnteredOption([]);
  }, [props.counter]);

  const [enteredOption, setEnteredOption] = useState();

  const handleOptionChange = (selectedOption) => {
    setEnteredOption(selectedOption);
    props.onSelectedOption(selectedOption);
  };

  return (
    <Select
      options={props.options}
      placeholder={props.placeholder}
      onChange={handleOptionChange}
      value={enteredOption}
      required
      isSearchable={false}
      components={{ DropdownIndicator }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "white",
          borderRadius: "8px",
          fontSize: "14px",
          paddingInline: "5px",
          border: state.isFocused
            ? "2px solid lightblue"
            : "2px solid transparent",
          boxShadow: 0,
          ":hover": {
            border: state.isFocused
              ? "2px solid lightblue"
              : "2px solid transparent",
          },
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "rgb(100 116 139)",
          fontSize: "13px",
          ":hover": {
            color: "rgb(100 116 139)",
          },
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,
          border: state.isFocused ? "transpatent" : "transparent",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles, 
          color: "rgb(100 116 139)",
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          border: 0,
          color: "rgb(71 85 105)"
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: "none",
        }),
        container: (baseStyles) => ({
          ...baseStyles,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "rgb(243 244 246)",
          color: "rgb(100 116 139)",
          borderRadius: "5px",
          padding: "5px",
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "10px",
          fontSize: "14px",
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          padding: "5px",
          "::-webkit-scrollbar": {
            width: "5px",
            height: "0px",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-track": {
            background: "rgb(243 244 246)",
          },
          "::-webkit-scrollbar-thumb": {
            background: "darkgray",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#888",
          },
        }),
      }}
    />
  );
}
