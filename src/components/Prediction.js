import calendar from "../files/images/calendar.webp"
import globe from "../files/images/strategic-place.webp"
import temperature from "../files/images/celsius.webp"
import { useState } from "react"

export default function Prediction(props){
    const [location, setLocation] = useState("Global");
    const [temp, setTemp] = useState(0);
    const[pyodideWorker, setPyodideWorker] = useState(props.worker);

    function runMachineLearningModel(){
        
    }
   
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>
                <div className="pred-container">
                    <img style={{ height: "30px", marginRight: "20px", alignSelf: "center" }} src={calendar} />
                    <input style={{ alignSelf: "center", marginLeft: "20px", backgroundColor:"#dc3545", borderRadius:"5px", color:"white", colorScheme:"dark", border:"0px solid transparent", outline: "0px solid transparent" }} type={"date"} />
                </div>
            </div>
            <div>
                <div className="pred-container">
                    <img style={{ height: "30px", marginRight: "20px", alignSelf: "center" }} src={globe} />
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {location}
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" onClick={()=>{{setLocation("Global")}}}>Global</button></li>
                            <li><button class="dropdown-item" onClick={()=>{setLocation("London")}}>London</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="pred-container">
                    <img style={{ height: "30px", marginRight: "20px", alignSelf: "center" }} src={temperature} />
                    <input className="prediction-output" readOnly={"readonly"} value={temp + "\u2103"}/>
                </div>
            </div>

            <button className="prediction" onClick={runMachineLearningModel}>
                Predict
            </button>
        </div>
    );
}