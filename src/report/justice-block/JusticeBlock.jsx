import React, { useState } from "react";
import JusticeReport from "./justice-report/JusticeReport";

const JusticeBlock = () => {
  const [justiceArr, setjusticeArr] = useState([
    //fetchFromServer
    { id: 1 },
  ]);


  function deleteDashHandler(id) {
    setjusticeArr((p) =>
      p.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function addDashHandler() {
    setjusticeArr((p) => [
      ...p,
      { id: p[p.length - 1].id + 1},
    ]);
  }

  return (
    <div className="flex flex-col w-[80%] items-center bg-[#f9fdffe0] bg-opacity-70 w-[80%]  border-[2px] border-[#eceff1e5] rounded-lg p-10  my-5">
      <h1 className="bg-[#0b69ff] font-semibold text-white px-3 py-2 rounded-lg border-[4px] border-[#e6eaf1]">Привлечение к ответственности</h1>
      {justiceArr.map((item) => {
        return <JusticeReport addDashHandlerLarge={addDashHandler} deleteDashHandlerLarge={deleteDashHandler} id={item.id} key={item.id}/>
      })}
    </div>
  );
};

export default JusticeBlock;
