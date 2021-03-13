import React from 'react'

const Pagination = ({ dogsPerPage, totalDogs, paginate }) => {
  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className="page-link mx-1">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination