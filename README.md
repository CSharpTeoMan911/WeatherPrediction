# 🌤️ WeatherPrediction

![WebSite-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/544839f4-9568-469c-af90-d0fcf82ae0d3)

![Prediction-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/75e5ab3e-2f5f-413f-9c0c-4853717e8d2a)


WeatherPrediction is a weather forecasting app powered by machine learning that predicts temperatures for Global and London locations. The app predicts the average temperature between the maximum and minimum values for a given day.

🌍 Global: Predicts the average global temperature for a specific date.

🏙️ London: Predicts the average temperature within London for the selected date.

You can access the app here: [WeatherPrediction App](https://weatherprediction-d3c67.web.app)

# 🤖 Machine Learning Model
## Algorithm:
* Multivariate Polynomial Regression
* Global Model Accuracy: 90% (Error rate: 12%)
* London Model Accuracy: 72% (Error rate: 26%)

![Polynomial](https://github.com/user-attachments/assets/0f9ada58-61fa-4d6d-9fd4-8aae6475b996)

For more details, check out the [Jupyter Notebook GitHub Repository](https://github.com/CSharpTeoMan911/TemperatureDataAnalysis).

## 🛠️ Tech Stack

<img width="2217" alt="Weather prediction (1)" src="https://github.com/user-attachments/assets/09faf741-83a2-4b4d-a2d6-59a7090f120b" />

### Frontend:
* Languages: JavaScript, CSS, HTML
* Frameworks: React, Bootstrap
## Web Technologies:
* Pyodide & WebAssembly - Allows running Python and ML libraries natively in the browser.
## Machine Learning:
* Python & Scikit-learn - Robust libraries for machine learning.

<br/>
<br/>

# 🔄 ML Model Integration

The machine learning model is integrated into the app using Pyodide (a Python interpreter for the browser) and WebAssembly. This combination allows the app to run the model with native capabilities directly in the browser.

The integration flow includes:
1) Web-worker loads Pyodide and required Python libraries.
2) The selected date is passed to either the Global or London temperature prediction model.

<img width="2350" alt="Flowchart" src="https://github.com/user-attachments/assets/f3def401-d5f1-4c33-8953-bfbb2e4089b3" />

<br/>
<br/>

## How it works:

1) Web-worker: Communicates between the frontend and the ML backend.
2) It processes:
* Loading Pyodide
* Passing the selected date for Global or London temperature predictions..

<img width="2164" alt="WeatherPredictionWebWorker" src="https://github.com/user-attachments/assets/f994f5b0-a3d6-4216-a06a-4056ba22b48c" />



