import React from "react";
import { useState } from "react";
import JusticeBlock from "./justice-block/JusticeBlock";
import ViolationsBlock from "./violations-block/ViolationsBlock";
import PlanBlock from "./plan/PlanBlock";

const Report = () => {
 

  return (
    <>
      <div className="flex justify-center flex-col items-center min-h-screen">
        <ViolationsBlock />
        <JusticeBlock />
        <PlanBlock/>
      </div>
    </>
  );
};

export default Report;
