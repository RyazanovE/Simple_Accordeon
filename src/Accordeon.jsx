import React, { useState } from "react";

const Accordeon = ({ title, children }) => {
  const [isActive, setisActive] = useState(false);

  function clickHandler() {
    setisActive((p) => !p);
  }

  return (
    <div className="w-[30vw]  bg-slate-100 flex flex-col">
      <button
        onClick={clickHandler}
        className={
          " justify-center flex items-center relative active:bg-slate-400 active:text-slate-300 z-10 py-[10px] bg-slate-400 hover:bg-slate-300 transition-color duration-100 text-[18px] text-white hover:text-slate-400"
        }
      >
        
        {title}
        <svg
          className={(isActive ? "rotate-180" : "rotate-0") + " fill-white transition-transform duration-100 ease-in-out w-[30px] h-[30px] absolute right-[20px] top-[50%-15px]"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
        </svg>
      </button>

      <div
        className={
          (isActive ? "max-h-[150px]" : "max-h-0") +
          " active overflow-hidden transition-all ease-in duration-150"
        }
      >
        <div className="px-[20px] py-[10px] text-[14px]">{children}</div>
      </div>
    </div>
  );
};

export default Accordeon;
