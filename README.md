# About

Weatherpredition, is a weather prediction app that uses machine learning to predict the weather for a specified location. Currently, there are 2 locations on which the weather prediction operation can be performed, and these are: Global and London. The Global location is used to predict the average global temperature for the selected date, whereas the London location is used to predict the average temperature within London for the selected date. The aforementioned average temperature is the temperature with a value between the maximum temperature of the day and the minimum temperature of the day, inclusively, where the average temperature noted as T , is: Min_Temp <= T <= Max_Temp.

## Machine learning model characteristics

There are 2 machine learning models, and both are using the same machine learning algorithm, and this is Multivariate polynomial regression.
<br/>
<br/>
![Polynomial](https://github.com/user-attachments/assets/0f9ada58-61fa-4d6d-9fd4-8aae6475b996)



The degree of the polynomial was selected by incrementing the degree of the polynomial with an initial value of 1, by one, and for each iteration, the Mean Squared Error (MSE) and Coefficient of determination (R2) are evaluated on the data for testing, after the model training on the current polynomial degree is performed, to determine if the increase of the degree caused overfitting or underfitting by using unknown data (testing data) for validation. After this procedure is finished, the resulting Global model has an error rate of 12% and an accuracy rate of 90%, whereas the London model has an error rate of 26% and an accuracy rate of 72%. Click view the Jupyter Notebook as a [PDF](https://weatherprediction-d3c67.web.app/pdf) or navigate to the [Github](https://github.com/CSharpTeoMan911/TemperatureDataAnalysis) repository. The application is hosted at this [link](https://weatherprediction-d3c67.web.app).

## Machine learning model integration

The frontend stack consists out of: JavaScript, CSS, HTML, React, and Bootstrap. This frontend stack was chosen due to its dynamic size rendering capabilities, pre-built components, as well as its number of available libraries. The web technologies stack consists out of: Pyodide and WebAssembly. This web technologies stack was chosen because it is the most reliable way in which Python and the required machine learning libraries can be run natively and locally within the browser window. The machine learning stack consists out of: Python and Scikit learn. This machine learning stack was chosen because of its number of libraries and its high degree of accuracy.

<img width="2217" alt="Weather prediction (1)" src="https://github.com/user-attachments/assets/09faf741-83a2-4b4d-a2d6-59a7090f120b" />

<br/>
<br/>

The machine learning system is integrated within the web application, by using Pyodide. This web technology consists out of a, JavaScript built, Python interpreter that is interpreting the Python code directly into WebAssembly directly into the browser, for the app to run with native capabilities. A web-worker is used to load Pyodide by downloading the runtime from the JsDelivr CDN (Content Delivery Network) within the web-worker and afterwards, and then loading the Micropip library to subsequently download all the PyPi (Python Package Index) libraries required for loading the machine learning model.

<img width="2350" alt="Flowchart" src="https://github.com/user-attachments/assets/f3def401-d5f1-4c33-8953-bfbb2e4089b3" />

<br/>
<br/>

The aforementioned web-worker works as an API between the machine learning infrastructure and the front-end of the web-application. The web-worker is set to process 3 types of messages, and these are: to load Pyodide (which was explained earlier), to pass the selected date to the machine learning model that predicts the average global temperature for the selected date, or to pass the selected date to the machine learning model that predicts the average temperature in London for the selected date.

<img width="2164" alt="WeatherPredictionWebWorker" src="https://github.com/user-attachments/assets/f994f5b0-a3d6-4216-a06a-4056ba22b48c" />



