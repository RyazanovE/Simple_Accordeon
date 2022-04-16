import React, {useState} from "react";



const Accordeon = ({ title, children }) => {
  
    const [isActive, setisActive] = useState(false)
    
    function clickHandler() {
        setisActive(p => !p)
    }

    return (
    <div className="w-[30vw]  bg-slate-100 flex flex-col">
      <button onClick={clickHandler} className={" z-10 py-[10px] bg-slate-400 hover:bg-slate-300 transition-color duration-100 text-[18px] text-white hover:text-slate-400"}>
        {title}
      </button>
      <div className={(isActive ? "max-h-[150px]" : "max-h-0" ) +  " active overflow-hidden transition-all ease-in duration-150"}>
        <div className="px-[20px] py-[10px] text-[14px]">
         {children}
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
