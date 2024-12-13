import { useState } from "react";

export default function MainPanel(props){
    const [border, setBorder] = useState("2px solid black");

    if(props.border == "hidden")
        setBorder("0px solid transparent");

    return(
        <div id={props.id} className="main-panel" style={{border:`${border}`}}>
            {props.children}
        </div>
    );
}