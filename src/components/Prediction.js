import calendar from "../files/images/calendar.webp"
import globe from "../files/images/strategic-place.webp"
import temperature from "../files/images/celsius.webp"
import question from "../files/images/question-mark.webp"
import { useState } from "react"
import machine_learning_interface from "../files/main.py"
import PuffLoader from "react-spinners/PuffLoader";
import global_model from "../files/global_temp_model.json";
import london_model from "../files/london_temp_model.json";

setInterval(() => {
    const mainPanel = document.getElementById("weather_prediction");
    const navBar = document.getElementById("nav-bar");

    if (mainPanel !== null) {
        if (navBar !== null) {
            const validHeight = window.innerHeight - navBar.offsetHeight;
            let tr = (validHeight - mainPanel.offsetHeight) / 2;
            if (tr < 0)
                tr = 0;

            mainPanel.style.transform = "translateY(" + tr + "px)";
        }
    }
}, 10);

function dateFormatter(date_unit){
    if(date_unit < 10)
        return '0' + date_unit.toString();
    else
        return date_unit.toString();
}

export default function Prediction(props) {
    const current_date = new Date();
    const c_day = dateFormatter(current_date.getDate());
    const c_month = dateFormatter(current_date.getMonth() + 1);
    const c_year = dateFormatter(current_date.getFullYear());
    
    const c_formatted_date = `${c_year}-${c_month}-${c_day}`;

    const [date, setDate] = useState(c_formatted_date);

    const [location, setLocation] = useState("Global");
    const [temp, setTemp] = useState(0);
    const [pyodideWorker, setPyodideWorker] = useState(props.worker);
    const [hint, showHint] = useState("toast help-panel");
    const [loaderSize, setLoaderSize] = useState(0);
    const [loaderVisibility, setLoaderVisibility] = useState("hidden");

    pyodideWorker.onmessage = (e) => {
        const message = e.data;
        if (message.indexOf("Predicted temperature:") == 0) {
            setTemp(message.substring("Predicted temperature:".length + 1, message.length));
            setLoaderSize(0);
            setLoaderVisibility("hidden");
        }
    }

    async function runMachineLearningModel() {
        setLoaderSize(40);
        setLoaderVisibility("visible");
        const _date = new Date(date);
        const day = _date.getDate();
        const month = _date.getMonth() + 1;
        const year = _date.getFullYear();
        let model = location === "London" ? JSON.stringify(london_model) : JSON.stringify(global_model);

        console.log("\n\n\n///////////////////////////////////////////////////////////");
        console.log(`// [!!!] Loading the ${location} machine learning model [!!!] //`);
        console.log("///////////////////////////////////////////////////////////");

        console.log(model);


        const main = await (await fetch(machine_learning_interface)).text();
        pyodideWorker.postMessage([model, day.toString(), month.toString(), year.toString(), main]);
    }


    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={hint} style={{ position: "absolute", zIndex: "10"}} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto" style={{fontWeight:"bolder"}}>Help</strong>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => { showHint("toast"); }}></button>
                </div>
                <div className="toast-body" style={{ background: "rgb(255,255,255)" }}>
                    <ul >
                        <li style={{marginBottom:"5px"}}>
                            Select a date to predict the temperature for that specific date.
                        </li>
                        <li>
                            Select <span style={{fontWeight:"bold"}}>'Global'</span> to predict the average global temperature for the selected date, or select <span style={{fontWeight:"bold"}}>'London'</span> to predict the average temperature in London for the selected date.
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
                <button style={{ display: "flex", flexDirection: "column", backgroundColor: "transparent", border: "0px solid transparent" }} onClick={() => { showHint("toast help-panel show"); }}>
                    <img style={{ height: "calc(15px + 0.4vw + 0.4vh)", alignSelf: "center" }} src={question} />
                </button>
            </div>
            <div style={{ padding: "calc(10px + 0.4vw + 0.4vh) calc(8px + 0.4vw + 0.4vh) calc(5px + 0.4vw + 0.4vh) calc(10px + 0.4vw + 0.4vh)", display: "flex", flexDirection: "column" }}>
                <div>
                    <div className="pred-container">
                        <img style={{ height: "calc(28px + 0.4vw + 0.4vh)", marginRight: "calc(15px + 0.4vw + 0.4vh)", alignSelf: "center" }} src={calendar} />
                        <input  id="datepicker" style={{ alignSelf: "center", fontSize: "calc(10px + 0.4vw + 0.4vh)", marginLeft: "calc(15px + 0.4vw + 0.4vh)", backgroundColor: "rgb(28, 111, 236)", borderRadius: "5px", color: "white", colorScheme: "dark", border: "0px solid transparent", boxShadow:"10px 10px 50px black" ,outline: "1px solid black" }} min={c_formatted_date} value={date} type={"date"} onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                </div>
                <div>
                    <div className="pred-container">
                        <img style={{ height: "calc(28px + 0.4vw + 0.4vh)", marginRight: "calc(15px + 0.4vw + 0.4vh)", alignSelf: "center" }} src={globe} />
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary btn-sm dropdown-toggle" style={{ border: "1px solid black", marginLeft: "calc(14px + 0.4vw + 0.4vh)", fontSize: "calc(8px + 0.4vw + 0.4vh)", boxShadow:"10px 10px 50px black" }} data-bs-toggle="dropdown" aria-expanded="false">
                                {location}
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => { { setLocation("Global") } }}>Global</button></li>
                                <li><button className="dropdown-item" onClick={() => { setLocation("London") }}>London</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pred-container">
                        <img style={{ height: "calc(28px + 0.4vw + 0.4vh)", marginRight: "calc(14px + 0.4vw + 0.4vh)", alignSelf: "center" }} src={temperature} />
                        <PuffLoader
                            color={"rgb(28, 111, 236)"}
                            loading={true}
                            cssOverride={
                                {
                                    display: "block",
                                    margin: "0 auto",
                                    borderColor: "rgb(28, 111, 236)",
                                    visibility: loaderVisibility
                                }
                            }
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            size={loaderSize}
                        />
                        <input className="prediction-output" style={{ fontSize: "calc(11px + 0.4vw + 0.4vh)", marginLeft: "calc(15px + 0.4vw + 0.4vh)" }} readOnly={"readonly"} value={temp + "\u2103"} />
                    </div>
                </div>

                <button className="prediction" style={{ fontSize: "calc(9px + 0.4vw + 0.4vh)" }} onClick={runMachineLearningModel}>
                    Predict
                </button>
            </div>
        </div>
    );
}