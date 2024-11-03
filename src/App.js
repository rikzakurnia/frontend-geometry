import './App.css';
import axios from 'axios';

import {useState } from 'react';

function App() {
  const [sideLengthSquare, setSideLengthSquare] = useState(0);
  const [sideLengthCube, setSideLengthCube] = useState(0);
  const [squareArea, setSquareArea] = useState(null);
  const [cubeSurfaceArea, setCubeSurfaceArea] = useState(null);

  const calculateSquareArea = async () => {
    try {
      const response = await axios.post('http://3.80.141.113:8080/function/square-area', 
        { side: Number(sideLengthSquare) }, 
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSquareArea(response.data.area);
    } catch (error) {
      console.error('Error calculating square area:', error);
    }
  };
  
  const calculateCubeSurfaceArea = async () => {
    try {
      const response = await axios.post('http://174.129.48.22:8080/function/cube-surface-area', 
        { side: sideLengthCube }, 
        { headers: { 'Content-Type': 'application/json' } }
      );
      setCubeSurfaceArea(response.data.surfaceArea);
    } catch (error) {
      console.error('Error calculating cube surface area:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Geometry Calculator</h1>

      <div style={styles.formContainer}>
        <h2 style={styles.subtitle}>Calculate Square Area</h2>
        <input
          type="number"
          placeholder="Side length of square"
          value={sideLengthSquare}
          onChange={(e) => setSideLengthSquare(e.target.value)}
          style={styles.input}
        />
        <button onClick={calculateSquareArea} style={styles.button}>
          Calculate Area
        </button>
        {squareArea !== null && (
          <p style={styles.result}>Square Area: {squareArea}</p>
        )}
      </div>

      <div style={styles.formContainer}>
        <h2 style={styles.subtitle}>Calculate Cube Surface Area</h2>
        <input
          type="number"
          placeholder="Side length of cube"
          value={sideLengthCube}
          onChange={(e) => setSideLengthCube(e.target.value)}
          style={styles.input}
        />
        <button onClick={calculateCubeSurfaceArea} style={styles.button}>
          Calculate Surface Area
        </button>
        {cubeSurfaceArea !== null && (
          <p style={styles.result}>Cube Surface Area: {cubeSurfaceArea}</p>
        )}
      </div>

      <footer style={styles.footer}>
        Created by: Rikza Kurnia Almujtaba Lubis
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '300px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  result: {
    fontSize: '1rem',
    color: '#333',
    marginTop: '10px',
  },
  footer: {
    marginTop: '30px',
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default App;

