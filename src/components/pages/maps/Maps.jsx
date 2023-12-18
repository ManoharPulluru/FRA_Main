import React, { useState } from "react";
import './maps.css';
import InformTable from "./InformationTable/InformTable";
import SelectDispatch from "./selectDispatch/SelectDispatch";
import DragBox from "./DragBox/DragBox";
import LawEnf from "./LawEnforcement/LawEnf";


const Maps = () => {
  const [showLawEnf, setShowLawEnf] = useState(false);

  const handleLawEnfClick = () => {
      setShowLawEnf(!showLawEnf);
  };

    return (
        <div className="dragFR">
            <div className="dispatcherCard">
                <InformTable />
                <SelectDispatch onLawEnfClick={handleLawEnfClick}/>
                <DragBox />
            </div>
            <div className="LF_card">
              <LawEnf />
            </div>
            {/* {showLawEnf && } */}
       </div>
    )
}
  
export default Maps