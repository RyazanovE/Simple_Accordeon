import React from "react";

const PlanBlock = () => {
  return (
    <div className="flex flex-col bg-[#f9fdffe0] bg-opacity-70 w-[80%] items-center  border-[2px] border-[#eceff1e5] rounded-lg p-10  my-5">
      <h2 className="bg-[#0b69ff] text-white px-3 py-2 rounded-lg border-[4px] border-[#e6eaf1] font-semibold">
        План устранения недостатков
      </h2>
      <div className="flex w-full justify-between rounded-lg bg-white  border-[3px] border-[#e1e4e6e5] m-5 p-10 items-start relative">
        <div className="flex flex-col">
          <div className="flex justify-center">
          <div className="mb-3 w-96">
              
              <input
                className="
                form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <p className="font-medium text-[#70757e] w-32">На контроле:</p>{" "}
            <input className="ml-3 " type="checkbox" disabled />
          </div>
          <div className="flex items-center mt-2">
            <p className="font-medium text-[#70757e] w-32">Создан:</p>{" "}
            <p className="ml-3">{"24/02/15"}</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="font-medium text-[#70757e] w-32">Оценка:</p>{" "}
            <p className="ml-3">{"5+"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanBlock;
