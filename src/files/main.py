import io

import sklearn.linear_model as linear_model
import sklearn.preprocessing as preprocessing
import numpy as np
import json


def predict(model, day, month, year):
    try:
        model_params = json.load(io.StringIO(model))

        beta_c = model_params["Beta_Coefficients"]
        x_i = model_params["x_intercept"]
        degree = model_params["polynomial_degree"]

        poly = preprocessing.PolynomialFeatures(degree=degree, include_bias=False).fit_transform(X=[[day, month, year]])
        model = linear_model.LinearRegression()
        model.coef_ = np.asarray(beta_c)
        model.intercept_ = x_i
        result = model.predict(poly)
        
        return round((result[0] - 32) * (5 / 9), 2)
    except Exception as e:
        print("Python exception: ", e)
        return 0