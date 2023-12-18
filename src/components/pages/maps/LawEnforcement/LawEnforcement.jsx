import React from "react";
import "./lawEnforcement.css";
import Checkbox from "../LawEnforcement/Images/checkbox.svg";
import Filter from "../LawEnforcement/Images/filter@2x.svg";
import Search from "../LawEnforcement/Images/Search.svg";
import Person from "../LawEnforcement/Images/person.svg";
import Camera from "../LawEnforcement/Images/camera.svg";
import Handcuffs from "../LawEnforcement/Images/handcuffs.svg";
import Instrument from "../LawEnforcement/Images/instrument.svg";
import Gun from "../LawEnforcement/Images/gun.svg";
import Stick from "../LawEnforcement/Images/stick.svg";
import Shield from "../LawEnforcement/Images/Shield.svg";
import BreachingTools from "../LawEnforcement/Images/Breachingtools.svg";
import Bodyarmor from "../LawEnforcement/Images/Bodyarmor.svg";


const LawEnforcement = () => {
  return (
    <>
      <div className="container">
        <div className="newIncident"> </div>
        <div className="lawEnforcement">
          <div className="R1">
            <img className="checkBox" src={Checkbox} alt="image"></img>
          </div>

          <div className="R2">
            <div className="text1">Law Enforcement<span className="number">(26)</span></div>
            <div className="icons">
              <img className="img_filter" src={Filter} alt="image"></img>
              <img className="img_search" src={Search} alt="image"></img>
            </div>
          </div>

          <div className="R3">
            <div className="patrol_units">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="text_patrol">
                Patrol Units
              </label>
            </div>

            <div className="OffBox1">
              {/*first column starts */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Braddy Sean</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 232</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="instrument" src={Instrument}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="stick" src={Stick}></img>
                    </div>
                  </div>
                </div>
              </div>

              {/*second column starts */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Lara Sen</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 255</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="instrument" src={Instrument}></img>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* third column starts */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Thara</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 235</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                  <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="instrument" src={Instrument}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="stick" src={Stick}></img>
                    </div>
         
                  </div>
                </div>
              </div>

              {/* fourth column starts */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Braddy Sean</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 232</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                  <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="instrument" src={Instrument}></img>
                    </div> 
                    <div className="imgdiv">
                      <img className="stick" src={Stick}></img>
                    </div>
                  </div>
                </div>
              </div>

              {/*  fifth column starts */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Lara Sen</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 255</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/*  six column starts */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Thara</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 235</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText bg-orange">5 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="stick" src={Stick}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Swat">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="text_swat">
                SWAT
              </label>
            </div>

            <div className="OffBox2">
              {/* column 1 */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Braddy Sean</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 232</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="shield" src={Shield}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="Bodyarmor" src={Bodyarmor}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* column 2 */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Lara Sen</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 255</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="shield" src={Shield}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="Breacingtools" src={BreachingTools}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                  
                  </div>
                </div>
              </div>

              {/* column 3 */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Thara ID</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 235</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="shield" src={Shield}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="Bodyarmor" src={Bodyarmor}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="Breachingtools" src={BreachingTools}></img>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* column 4 */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Braddy Sean</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 232</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText">3 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="shield" src={Shield}></img>
                    </div>
                    
                    <div className="imgdiv">
                      <img className="Breachingtools" src={BreachingTools}></img>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* column 5 */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Lara Sen</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 255</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText bg-orange">5 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="shield" src={Shield}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="Bodyarmor" src={Bodyarmor}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="Breachingtools" src={BreachingTools}></img>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* column 6 */}
              <div className="column1">
                <div className="toppart">
                  <div className="checkboxDiv">
                    <input
                      type="checkbox"
                      className="checkbox1"
                      name="checkbox1"
                    />
                  </div>
                  <div className="offDetails">
                    <div className="offName">
                      <p className="offNameText">Off. Thara ID</p>
                    </div>
                    <div className="offId">
                      <p className="offIdText">ID - NYPD 235</p>
                    </div>
                  </div>
                  <div className="eta">
                    <p className="etaText bg-orange">5 min away</p>
                  </div>
                </div>
                <div className="bottompart">
                  <div className="images">
                    <div className="imgdiv">
                      <img className="person" src={Person}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="camera" src={Camera}></img>
                    </div>
                    <div className="line"></div>
                    <div className="imgdiv">
                      <img className="handcuffs" src={Handcuffs}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="instrument" src={Instrument}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="gun" src={Gun}></img>
                    </div>
                    <div className="imgdiv">
                      <img className="stick" src={Stick}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawEnforcement;
