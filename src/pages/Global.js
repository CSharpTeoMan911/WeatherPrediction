import MainPanel from "../components/MainPannel";
import Nav from "../components/Nav"
import WeatherPrediction from "../components/WeatherPrediction";
import "../styles/main-style.css"

export default function Global() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Nav />
            
            <MainPanel id={"weather_prediction"}>
                <WeatherPrediction/>
            </MainPanel>
        </div>
    );
}