import React, { useState, useEffect } from "react";
import Select from "react-select";

const VilolationsSelect = ({ addDashHandler, deleteDashHandler, id }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      display: "flex",
      width: 200,
      backgroundColor: "white",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  const [isLoading, setisLoadong] = useState(true);
  const [data, setdata] = useState([]);
  const [inputsValue, setinputsValue] = useState({
      input: ""
  });
  const [isFilled, setisFiled] = useState(false);
  const [isEmpty, setisEmpty] = useState({
    select: false,
    input: false,
  });

  useEffect(() => {
    setisLoadong(true);
    fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20")
      .then((resp) => resp.json())
      .then((result) => {
        setdata(result);
        setisLoadong(false);
        return Promise.resolve();
      });
  }, []);

  function getOptions() {
    return data.map((item) => {
      return { label: item.name, value: item.name };
    });
  }

  function handleInputChange(e) {
      setisFiled(true);
      if (!e.target.value) {
        setisEmpty({...isEmpty, input: true });
      }
      if (!inputsValue.select) {
          setisEmpty({...inputsValue, select: true})
      }
      setinputsValue({ ...inputsValue, ["input"]: e.target.value });
      return;
    }
  

  function handleSelectChange(e) {
    if (!e) {
      e = {
        value: "",
      };
    }

    if (e.value === "") {
      setinputsValue({ ...inputsValue, select: "" });
      setisEmpty({...isEmpty, select: true });
      return;
    }
    if (!inputsValue.input) {
        setisEmpty({...inputsValue, input: true})
    }
    setisFiled(true);
    setinputsValue({ ...inputsValue, ["select"]: e.value });
    return;
  }



  useEffect(() => {
    if (isFilled) {
      addDashHandler();
    }
  }, [isFilled]);

  useEffect(() => {
    if (isEmpty.input && isEmpty.select && !inputsValue.select && !inputsValue.input) {
      deleteDashHandler(id)
    }
  }, [isEmpty]);
  
  return (
    <div className="flex">
      <Select
        isClearable
        onChange={handleSelectChange}
        styles={customStyles}
        isLoading={isLoading}
        options={getOptions()}
      />
      <input
        onChange={handleInputChange}
        value ={inputsValue.input}
        type="text"
        className="w-1/2 outline-none"
        placeholder="Введите описание"
      />
    </div>
  );
};

export default VilolationsSelect;
