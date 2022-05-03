import React, {useState} from 'react';
import ViolationsReport from "./violations-report/ViolationsReport"

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
        setviolationsArr((p) => [
          ...p,
          { id: p[p.length - 1].id + 1},
        ]);
      }


    return (
        <div className="flex flex-col w-[80%] items-center bg-[#f9fdffe0] bg-opacity-70 w-[80%]  border-[2px] border-[#eceff1e5] rounded-lg p-10">
        <h1 className="bg-[#0b69ff] text-white px-3 py-2 rounded-lg border-[4px] border-[#e6eaf1] font-semibold">Проверка</h1>
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