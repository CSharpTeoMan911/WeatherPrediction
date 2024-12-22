import ipynb from "../files/WeatherAnalysys.pdf"

export default function PDFviewer() {
    return (
        <iframe style={{ height: "100vh", width: "100vw" }} referrerPolicy="origin" loading="lazy" src={ipynb}>

        </iframe>
    );
}