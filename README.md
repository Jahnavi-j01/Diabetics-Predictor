# Diabetes Prediction System

## Overview
The **Diabetes Prediction System** is a web-based application that allows users to assess their risk of diabetes based on input parameters such as glucose level, blood pressure, BMI, and more. The system consists of a Flask-based backend with a machine learning model and a React-based frontend for user interaction.

## Features
- **Machine Learning Model**: Uses a trained model to predict the likelihood of diabetes.
- **REST API**: Provides an endpoint for prediction requests.
- **User-Friendly UI**: A clean and interactive frontend built with React.
- **Real-time Prediction**: Submits user input to the backend and returns predictions.

## Technologies Used
### Backend:
- Flask (Python)
- NumPy
- Pickle (for model serialization)

### Frontend:
- React.js
- HTML/CSS
- JavaScript

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Python 3.x
- Node.js and npm
- Virtual Environment (optional but recommended)


## API Endpoint
### `POST /predict`
- **Description**: Receives user input data and returns a diabetes risk prediction.
- **Request Format (JSON)**:
  ```json
  {
    "Pregnancies": 2,
    "Glucose": 120,
    "BloodPressure": 70,
    "SkinThickness": 20,
    "Insulin": 80,
    "BMI": 25.5,
    "DiabetesPedigreeFunction": 0.5,
    "Age": 30
  }
  ```
- **Response Format (JSON)**:
  ```json
  {
    "prediction": "High risk of diabetes"
  }
  ```

## Usage
1. Open the frontend in a browser (`http://localhost:3000`).
2. Fill in the required details.
3. Click the "Predict" button to get the result.

## Contributing
If you'd like to contribute, feel free to fork the repository and submit a pull request with improvements or bug fixes.


