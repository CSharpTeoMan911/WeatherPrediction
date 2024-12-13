import "../styles/prediction-style.css"
import { useState } from "react"
import Prediction from "./Prediction"
import LoadingPanel from "./LoadingPanel"



export default function WeatherPrediction() {
    const[loaded, setLoaded] = useState(false);
    const[pyodideWorker, setPyodideWorker] = useState(new Worker(`${process.env.PUBLIC_URL}/PyodideWorker.js`));

    if(loaded === false){
        pyodideWorker.postMessage("Load Pyodide");
        pyodideWorker.onmessage = (e)=> {
            if(e.data === "Pyodide loaded"){
                setLoaded(true);
            }
        }    
    }

    if(loaded === true){
        return <Prediction worker={pyodideWorker}/>
    }
    else{
        return <LoadingPanel/>
    }
}