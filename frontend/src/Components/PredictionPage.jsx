import React from "react"
import { useState } from "react"

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  })

  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // For demonstration purposes, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setPrediction(Math.random() > 0.5 ? "High risk of diabetes" : "Low risk of diabetes")
    } catch (error) {
      console.error("Error making prediction:", error)
    } finally {
      setLoading(false)
    }
  }

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "2rem",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "2rem",
      fontSize: "2.5rem",
    },
    form: {
      display: "grid",
      gap: "1.5rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "1rem",
      marginBottom: "0.5rem",
      color: "#34495e",
    },
    input: {
      padding: "0.75rem",
      fontSize: "1rem",
      border: "1px solid #bdc3c7",
      borderRadius: "5px",
      transition: "border-color 0.3s ease",
    },
    button: {
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      padding: "1rem",
      fontSize: "1.1rem",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonDisabled: {
      backgroundColor: "#95a5a6",
      cursor: "not-allowed",
    },
    result: {
      marginTop: "2rem",
      padding: "1.5rem",
      backgroundColor: "#ecf0f1",
      borderRadius: "5px",
    },
    resultTitle: {
      color: "#2c3e50",
      marginBottom: "1rem",
      fontSize: "1.5rem",
    },
    resultText: {
      color: "#34495e",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Diabetes Risk Prediction</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {Object.keys(formData).map((key) => (
          <div key={key} style={styles.formGroup}>
            <label htmlFor={key} style={styles.label}>
              {key}
            </label>
            <input
              type="number"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {prediction && (
        <div style={styles.result}>
          <h2 style={styles.resultTitle}>Prediction Result</h2>
          <p style={styles.resultText}>{prediction}</p>
        </div>
      )}
    </div>
  )
}

export default PredictionPage

