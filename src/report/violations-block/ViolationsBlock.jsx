import React, { useState } from "react";
import ViolationsReport from "./violations-report/ViolationsReport";

const ViolationsBlock = () => {
  const [violationsArr, setviolationsArr] = useState([
    //fetchFromServer
    { id: 1 },
  ]);

  function deleteDashHandler(id) {
    setviolationsArr((p) =>
      p.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function addDashHandler() {
    if (violationsArr.length === 0 ) {
      setviolationsArr((p) => [...p, { id: 1 }]);
      return
    }
    setviolationsArr((p) => [...p, { id: p[p.length - 1].id + 1 }]);
  }

  return (
    <div className="flex flex-col w-[80%] items-center bg-[#f9fdffe0] bg-opacity-70 w-[80%]  border-[2px] border-[#eceff1e5] rounded-lg p-10">
      <h1 className="bg-[#0b69ff] text-white px-3 py-2 rounded-lg border-[4px] border-[#e6eaf1] font-semibold">
        Проверка
      </h1>
      {violationsArr.length === 0 && (
        <button
        onClick={addDashHandler}
          className="p-3 bg-[#0b69ff] rounded-lg w-[88px] mt-5   hover:bg-[#0b9dff]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-5 h-5 fill-white m-auto "
          >
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>
        </button>
      )}
      {violationsArr.map((item) => {
        return (
          <ViolationsReport
            key={item.id}
            id={item.id}
            deleteDashHandlerLarge={deleteDashHandler}
            addDashHandlerLarge={addDashHandler}
          />
        );
      })}
    </div>
  );
};

export default ViolationsBlock;
