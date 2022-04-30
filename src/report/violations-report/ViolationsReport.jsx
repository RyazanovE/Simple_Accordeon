import React, {useState} from "react";
import Select from "react-select";
import VilolationsSelect from "./VilolationsSelect";

const ViolationsReport = ({ deleteDashHandlerLarge, addDashHandlerLarge, id }) => {
    const [selectArr, setselectArr] = useState(
        [ {id: 1, element: VilolationsSelect} ]
    )
    
    
    function deleteDashHandler( id) {
        setselectArr(p => p.filter((item) => {
                  return item.id !== id
              }))
      }
    function addDashHandler( ) {
        setselectArr(p => [...p, {id: p[p.length - 1].id + 1, element: VilolationsSelect}])
      }
  
    return (
    <div className="flex w-full justify-evenly rounded-lg bg-slate-20  border-[2px] border-slate-400 m-5 p-10 items-start">
      <div className="flex flex-col">
        <h2 className="min-w-[200px]">Нарушения:</h2>
        <Select placeholder={"НПА"} />
        <div className="flex">
          <h3 className="w-1/2 bg-slate-600 text-white rounded-l-lg p-2">Нарушение</h3>
          <h3 className="w-1/2 bg-slate-600 text-white rounded-r-lg p-2">Описание</h3>
        </div>
        {selectArr.map((item) => {
                return <item.element  key={item.id} id={item.id} deleteDashHandler={deleteDashHandler} addDashHandler={addDashHandler}/>
            })}
      </div>
      <div className="flex">
        <button
          onClick={addDashHandlerLarge}
          className="p-5 bg-slate-300 hover:bg-slate-500 rounded-l-lg"
        >
          add
        </button>
        <button
          onClick={() => {
            deleteDashHandlerLarge(id);
          }}
          className="p-5 bg-slate-300 hover:bg-slate-500 rounded-r-lg "
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default ViolationsReport;
