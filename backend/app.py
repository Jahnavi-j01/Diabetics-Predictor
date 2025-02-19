from flask import Flask, request, jsonify
import numpy as np
import pickle

app = Flask(__name__)

# Load the pre-trained model
with open('diabetes_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = [
        data['Pregnancies'],
        data['Glucose'],
        data['BloodPressure'],
        data['SkinThickness'],
        data['Insulin'],
        data['BMI'],
        data['DiabetesPedigreeFunction'],
        data['Age']
    ]
    prediction = model.predict_proba([features])
    outcome = prediction[0]
    return jsonify({'Outcome': int(outcome)})

if __name__ == '__main__':
    app.run(debug=True)