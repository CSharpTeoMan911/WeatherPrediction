import { useState } from "react";

export default function MainPanel(props){
    

    return(
        <div id="main" className="main-panel">
            {props.children}
        </div>
    );
}