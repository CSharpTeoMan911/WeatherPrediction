import pyodideLogo from "../files/images/Pyodide.png";
import PuffLoader from "react-spinners/PuffLoader";
import { useState } from "react"

export default function LoadingPanel() {
    return (
        <div style={{padding:"20px"}}>
            <img src={pyodideLogo} style={{ height: "90px", marginBottom: "5px" }} />
            <img />
            <PuffLoader
                color={"rgb(101, 79, 240)"}
                loading={true}
                cssOverride={
                    {
                        display: "block",
                        margin: "0 auto",
                        borderColor: "rgb(101, 79, 240)",
                    }
                }
                aria-label="Loading Spinner"
                data-testid="loader"
                size={40}
            />
        </div>        
    );
}