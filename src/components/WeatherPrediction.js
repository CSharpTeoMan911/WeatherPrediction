import "../styles/prediction-style.css"
import { useState } from "react"
import Prediction from "./Prediction"
import LoadingPanel from "./LoadingPanel"
import WorkerFactory from "./WorkerFactory"
import PyodideWorker from "./PyodideWorker.worker"


export default function WeatherPrediction() {
    const[loaded, setLoaded] = useState(false);
    const[pyodideWorker, setPyodideWorker] = useState(new WorkerFactory(PyodideWorker));
    
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