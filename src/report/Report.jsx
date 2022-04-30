import React from 'react';
import { useState } from 'react';
import ViolationsReport from './violations-report/ViolationsReport';

const Report = () => {
   const [violationsArr, setviolationsArr] = useState(
       [ {id: 1, element: ViolationsReport} ]
   )
   
   
   function deleteDashHandler( id) {
             setviolationsArr(p => p.filter((item) => {
                 return item.id !== id
             }))
     }
   function addDashHandler( ) {
            setviolationsArr(p => [...p, {id: p[p.length - 1].id + 1, element: ViolationsReport}])
     }
   
    return (
        <>
            {violationsArr.map((item) => {

                return <item.element  key={item.id} id={item.id} deleteDashHandlerLarge={deleteDashHandler} addDashHandlerLarge={addDashHandler}/>
            })}
        </>
    );
};

export default Report;