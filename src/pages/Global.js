import Nav from "../components/Nav"
import "../styles/main-style.css"
import { Pyodite } from "../components/Pyodite";


export default function Global() {
    Pyodite();
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Nav />
            <div className="main-panel">
            </div>
        </div>
    );
}