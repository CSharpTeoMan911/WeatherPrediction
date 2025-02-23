import "../styles/prediction-style.css"
import { useState } from "react"
import Prediction from "./Prediction"
import LoadingPanel from "./LoadingPanel"
import {logo} from "./PyLogo"

let worker_handle = null;

export default function WeatherPrediction() {
    const[loaded, setLoaded] = useState(false);
    const[pyodideWorker, setPyodideWorker] = useState(new Worker(`${process.env.PUBLIC_URL}/PyodideWorker.js`));
    worker_handle = pyodideWorker;

    if(loaded === false){
        console.clear();
        console.log(`\n\n${logo}`);
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


// Ensure that the Pyodide worker is unloaded from the web browser's RAM memory
window.addEventListener("beforeunload", (e)=>{
    if(worker_handle !== null && worker_handle !== undefined)
        worker_handle.terminate();
});