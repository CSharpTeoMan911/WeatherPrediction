import pyodideLogo from "../files/images/Pyodide.png";
import PuffLoader from "react-spinners/PuffLoader";
import { useState, CSSProperties } from "react"

export default function LoadingPanel() {
    const override = CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "rgb(101, 79, 240)",
    }
    return (
        <div style={{padding:"20px"}}>
            <img src={pyodideLogo} style={{ height: "90px", marginBottom: "5px" }} />
            <img />
            <PuffLoader
                color={"rgb(101, 79, 240)"}
                loading={true}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
                size={40}
            />
        </div>        
    );
}