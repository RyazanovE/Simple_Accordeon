import React, { useState, useRef } from "react";
import Select from "react-select";
import VilolationsSelect from "./VilolationsSelect";
import { Transition } from '@headlessui/react'

const ViolationsReport = ({
  deleteDashHandlerLarge,
  addDashHandlerLarge,
  id,
}) => {
  const [postObj, setpostObj] = useState({ npa: "", inputs: [] });
  const [postToogle, setpostToogle] = useState(false);
  const [selectArr, setselectArr] = useState([{ id: 1 }]);
  const [isShowing, setisShowing] = useState(true)

  function deleteDashHandler(id) {
    setselectArr((p) =>
      p.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function addDashHandler() {
    
    setselectArr((p) => [...p, { id: p[p.length - 1].id + 1 }]);
    
  }

  function handleSaveClick() {
    setpostToogle((p) => !p);                       
                                                                     //POST ITEM HERE
  }

  return (
    <Transition
    afterLeave={() => {
      deleteDashHandlerLarge(id)
    }}
    as={React.Fragment}
    unmount
    appear={true}
    show={isShowing}
    enter="transition-opacity duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="flex flex-col w-full justify-between rounded-lg   bg-white  border-[3px] border-[#e1e4e6e5] m-5 p-10 items-start relative">
      <div className="flex flex-col mb-5">
        <h2 className="min-w-[200px]">Нарушения:</h2>
        <Select
        onChange={(e) => {setpostObj(p => {return {...p, npa: e.value}})}}
        options={[{label:"sd", value: "dsfs"}]}
          placeholder={"НПА"} />
        <div className="flex mt-3 ">
          <h3 className="w-1/2 pl-4 bg-slate-600 text-white rounded-l-lg p-2">
            Нарушение
          </h3>
          <h3 className="w-1/2 pl-4 bg-slate-600 text-white rounded-r-lg p-2">
            Описание
          </h3>
        </div>
        {selectArr.map((item) => {
          return (
            <VilolationsSelect
              postObj={postObj}

              isPostReady={postToogle}
              setpostObj={setpostObj}
              key={item.id}
              id={item.id}
              deleteDashHandler={deleteDashHandler}
              addDashHandler={addDashHandler}
            />
          );
        })}
      </div>
      <div className="flex w-full justify-between ">
        <div className="flex">
          <button
            onClick={addDashHandlerLarge}
            className="p-3  bg-[#0b69ff] hover:bg-[#0b9dff] rounded-l-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5 fill-white"
            >
              <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
            </svg>
          </button>
          <button
            onClick={() => {
              setisShowing(false)
        

            }}
            className="p-3 bg-[#0b69ff] rounded-r-lg hover:bg-[#0b9dff]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white w-5 h-5"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
            </svg>
          </button>
        </div>
        <button
          onClick={handleSaveClick}
          className="bottom-[40px] right-[40px] bg-[#0b69ff]  text-white rounded-md p-2 font-semibold hover:bg-[#0b9dff]"
        >
        Сохранить
        </button>
      </div>
    </div>
 </Transition>
  );
};

export default ViolationsReport;
