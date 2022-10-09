import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BreedGrid from './components/BreedGrid';
import Pagination from './components/Pagination';

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [dogsPerPage] = useState(12)

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios(`https://api.thedogapi.com/v1/breeds/`);

      // console.log(response.data);
      setDogs(response.data)
      setIsLoading(false)
    }
    fetchDogs();
  },[dogs])

  // Get current posts
  const indexOfLastPost = currentPage * dogsPerPage
  const indexOfFirstPost = indexOfLastPost - dogsPerPage
  const currentPages = dogs.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App mx-2">
      <h1 className='text-uppercase my-lg-5 font-weight-bold'>Dog Gallery</h1>
      <BreedGrid dogs={currentPages} isLoading={isLoading} />
      <Pagination dogsPerPage={dogsPerPage} totalDogs={dogs.length} paginate={paginate} />
    </div>
  );
}

export default App;
