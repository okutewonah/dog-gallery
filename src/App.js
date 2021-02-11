import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BreedGrid from './components/BreedGrid';

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
    <div className="App">
      <h1 className='text-uppercase mt-lg-5'>Dog Gallery</h1>
      <BreedGrid dogs={dogs} />
    </div>
  );
}

export default App;
