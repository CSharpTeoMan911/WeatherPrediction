import calendar from "../files/images/calendar.webp"
import globe from "../files/images/strategic-place.webp"
import temperature from "../files/images/celsius.webp"
import question from "../files/images/question-mark.webp"
import { useState } from "react"
import machine_learning_interface from "../files/main.py"

setInterval(()=>{
    const mainPanel = document.getElementById("weather_prediction");
    const navBar = document.getElementById("nav-bar");
    
    if(mainPanel !== null){
        if(navBar !== null){
            const validHeight = window.innerHeight - navBar.offsetHeight;
            const tr = (validHeight - mainPanel.offsetHeight) / 2;
            if(tr < 0)
                tr = 0;

            mainPanel.style.transform = "translateY(" + tr + "px)";
        }
    }
}, 10);

export default function Prediction(props) {
    const current_date = new Date();
    const c_day = current_date.getDate();
    const c_month = current_date.getMonth() + 1;
    const c_year = current_date.getFullYear();
    const c_formatted_date = `${c_year}-${c_month}-${c_day}`;

    const [date, setDate] = useState(c_formatted_date);

    const [location, setLocation] = useState("Global");
    const [temp, setTemp] = useState(0);
    const [pyodideWorker, setPyodideWorker] = useState(props.worker);
    const [hint, showHint] = useState("toast");

    pyodideWorker.onmessage = (e) => {
        const message = e.data;
        if (message.indexOf("Predicted temperature:") == 0) {
            setTemp(message.substring("Predicted temperature:".length + 1, message.length));
        }
    }

    async function runMachineLearningModel() {
        const _date = new Date(date);
        const day = _date.getDate();
        const month = _date.getMonth() + 1;
        const year = _date.getFullYear();

        const main = await (await fetch(machine_learning_interface)).text();
        pyodideWorker.postMessage([location, day.toString(), month.toString(), year.toString(), main]);
    }


    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={hint} style={{ position: "absolute", zIndex: "10" }} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">Help</strong>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => { showHint("toast"); }}></button>
                </div>
                <div className="toast-body">
                    <ul >
                        <li>
                            Select a date to predict the temperature for that specific date.
                        </li>
                        <br />
                        <li>
                            Select 'Global' to predict the average global temperature for the selected date, or select 'London' to predict the average temperature in London for the selected date.   
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
                <button style={{ display: "flex", flexDirection: "column", backgroundColor: "transparent", border: "0px solid transparent" }} onClick={() => { showHint("toast show"); }}>
                    <img style={{ height: "22px", alignSelf: "center" }} src={question} />
                </button>
            </div>
            <div style={{ padding: "20px 0px 10px 20px", display: "flex", flexDirection: "column" }}>
                <div>
                    <div className="pred-container">
                        <img style={{ height: "30px", marginRight: "20px", alignSelf: "center" }} src={calendar} />
                        <input id="datepicker" style={{ alignSelf: "center", marginLeft: "20px", backgroundColor: "rgb(28, 111, 236)", borderRadius: "5px", color: "white", colorScheme: "dark", border: "0px solid transparent", outline: "2px solid black" }} min={c_formatted_date} value={date} type={"date"} onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                </div>
                <div>
                    <div className="pred-container">
                        <img style={{ height: "30px", marginRight: "20px", alignSelf: "center" }} src={globe} />
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary btn-sm dropdown-toggle" style={{border: "2px solid black"}} data-bs-toggle="dropdown" aria-expanded="false">
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
                        <img style={{ height: "30px", marginRight: "20px", alignSelf: "center" }} src={temperature} />
                        <input className="prediction-output" readOnly={"readonly"} value={temp + "\u2103"} />
                    </div>
                </div>

                <button className="prediction" onClick={runMachineLearningModel}>
                    Predict
                </button>
            </div>
        </div>
    );
}