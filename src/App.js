import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BreedGrid from './components/BreedGrid';
import Wave from 'react-wavify'

function App() {
  const [dogs, setDogs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios(`https://api.thedogapi.com/v1/breeds/`);

      // console.log(response.data);
      setDogs(response.data)
      // setIsLoading(false)
    }
    fetchDogs();
  },[dogs])

  return (
    <div className="App mx-2">
      <Wave fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="20%"  stopColor="#ffe666" />
            <stop offset="80%" stopColor="#db3522" />
          </linearGradient>
        </defs>
      </Wave>
      <h1 className='text-uppercase my-lg-5 font-weight-bold'>Dog Gallery</h1>
      <BreedGrid dogs={dogs} />
    </div>
  );
}

export default App;
