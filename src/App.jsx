import "./App.css";
import Accordeon from "./Accordeon";
import { useEffect } from "react";
import Report from "./report/Report";

function App() {


  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <div className="flex flex-col w-[80%] items-center bg-slate-100 border-[2px] border-slate-200 rounded-lg p-10">
        <h1 className="">Название проверки</h1>
        <Report />
      </div>
    </div>
  );
}

export default App;
