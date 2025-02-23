import Nav from "../components/Nav";
import polynomial from "../files/images/Polynomial.png"
import WeatherPredictionStack from "../files/images/Weather prediction stack.png";
import Flowchart from "../files/images/Flowchart.png"
import WeatherPredictionWebWorker from "../files/images/WeatherPredictionWebWorker.png"


export default function About() {
    return (
        <div>
            <Nav />
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "rgb(255, 255, 255)", overflowY: "auto" }}>
                <div style={{ display: "flex", flexDirection: "column", alignContent: "center", padding: "2vw" }}>
                    <h2 style={{ alignSelf: "start", marginTop: "5vh" }}>
                        About
                    </h2>
                    <br />

                    <p>
                        <span style={{ fontWeight: "500" }}>
                            Weatherpredition
                        </span>
                        <span>
                            ,&nbsp;is a weather prediction app that uses machine learning to
                            predict the weather for a specified location. Currently, there are
                            2 locations on which the weather prediction operation can be
                            performed, and these are: <span style={{ fontWeight: "500" }}>Global</span> and <span style={{ fontWeight: "500" }}>London</span>.
                            The <span style={{ fontWeight: "500" }}>Global</span> location is used to predict the average global temperature for the selected date, whereas
                            the <span style={{ fontWeight: "500" }}>London</span> location is used to predict the average temperature within London for the selected date.
                            The aforementioned average temperature is the temperature with a value between the maximum temperature of the day and the minimum temperature
                            of the day, inclusively, where the average temperature noted as&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            T
                        </span>
                        <span>
                            &nbsp;, is:
                        </span>
                        <span style={{ fontWeight: "500" }}>
                        &nbsp;Min_Temp {"<="} T {"<="} Max_Temp
                        </span>
                        <span>
                            . The repository for this web application can be found on <a href="https://github.com/CSharpTeoMan911/WeatherPrediction">Github</a>.
                        </span>
                    </p>

                    <h4 style={{ alignSelf: "start", marginTop: "2vh" }}>
                        Machine learning model characteristics
                    </h4>
                    <br />

                    <p>
                        <span>
                            There are 2 machine learning models, and both are using the same machine learning algorithm, and this is&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            Multivariate polynomial regression.
                        </span>
                    </p>

                    <img style={{ width: "calc(20vw + 200px)" }} src={polynomial} />

                    <p>
                        <span>
                            The degree of the polynomial was selected by incrementing the degree of the polynomial with an initial value of 1, by one, and for each iteration, the&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            Mean Squared Error (MSE)
                        </span>
                        &nbsp;and&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            Coefficient of determination (R2)
                        </span>
                        <span>
                            &nbsp;are evaluated on the data for testing, after the model training on the current polynomial degree is performed,
                            to determine if the increase of the degree caused overfitting or underfitting by using unknown data (testing data)
                            for validation. After this procedure is finished, the resulting
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;Global&nbsp;
                        </span>
                        <span>
                            model has an error rate of&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            12%&nbsp;
                        </span>
                        <span>
                            and an accuracy rate of&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            90%
                        </span>
                        <span>
                            , whereas the
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;London&nbsp;
                        </span>
                        <span>
                            model has an error rate of&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            26%&nbsp;
                        </span>
                        <span>
                            and an accuracy rate of&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            72%
                        </span>
                        <span>
                            . Navigate to view the Jupyter Notebook machine learning model's <a href="https://github.com/CSharpTeoMan911/TemperatureDataAnalysis/blob/main/WeatherAnalysys.ipynb">Github</a> repository.
                        </span>
                    </p>

                    <h4 style={{ alignSelf: "start", marginTop: "2vh" }}>
                        Machine learning model integration
                    </h4>
                    <br />

                    <p>
                        <span>
                            The frontend stack consists out of:&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            JavaScript
                        </span>
                        ,&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            CSS
                        </span>
                        ,&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            HTML
                        </span>
                        ,&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            React
                        </span>
                        ,&nbsp;and&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            Bootstrap
                        </span>
                        <span>
                            . This frontend stack was chosen due to its dynamic size rendering capabilities, pre-built components,
                            as well as its number of available libraries. The web technologies stack consists out of:&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            Pyodide
                        </span>
                        &nbsp;and&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            WebAssembly
                        </span>
                        <span>
                            . This web technologies stack was chosen because it is the most reliable way in
                            which Python and the required machine learning libraries can be run natively
                            and locally within the browser window. The machine learning stack consists
                            out of:&nbsp;
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            Python
                        </span>
                        &nbsp;and&nbsp;
                        <span style={{ fontWeight: "500" }}>
                            Scikit learn
                        </span>
                        <span>
                            . This machine learning stack was chosen because of its number of libraries and its
                            high degree of accuracy.
                        </span>
                    </p>

                    <img style={{ width: "calc(50vw + 200px)" }} src={WeatherPredictionStack} />

                    <p>
                        <span>
                            The machine learning system is integrated within the web application, by using
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;Pyodide
                        </span>
                        <span>
                            . This web technology consists out of a,
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;JavaScript
                        </span>
                        <span>
                            &nbsp;built,
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;Python
                        </span>
                        <span>
                            &nbsp;interpreter that is interpreting the Python code directly into
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;WebAssembly
                        </span>
                        <span>
                            &nbsp;directly into the browser, for the app to run with native capabilities.
                            A web-worker is used to load
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;Pyodide
                        </span>
                        <span>
                            &nbsp;by downloading the runtime from the
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;JsDelivr CDN
                        </span>
                        <span>
                            &nbsp;(Content Delivery Network) within the web-worker and afterwards, and then loading the
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;Micropip
                        </span>
                        <span>
                            &nbsp;library to subsequently download all the
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;PyPi
                        </span>
                        <span>
                            &nbsp;(Python Package Index) libraries required for loading the machine learning model.
                        </span>
                    </p>

                    <img style={{ width: "calc(80vw + 200px)" }} src={Flowchart} />

                    <p>
                        <span>
                            The aforementioned web-worker works as an API between the machine learning infrastructure and the
                            front-end of the web-application. The web-worker is set to process 3 types of messages, and these
                            are: to load
                        </span>
                        <span style={{ fontWeight: "500" }}>
                            &nbsp;Pyodide
                        </span>
                        <span>
                            &nbsp;(which was explained earlier), to pass the selected date to the machine learning model that
                            predicts the average global temperature for the selected date, or to pass the selected date to the
                            machine learning model that predicts the average temperature in London for the selected date.
                        </span>
                    </p>

                    <img style={{ width: "calc(80vw + 200px)" }} src={WeatherPredictionWebWorker} />

                </div>
            </div>
        </div>
    );
}