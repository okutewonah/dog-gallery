const BreedsList = ({ breed }) => {
    return (
        <div className='col-sm-6 col-md-4 mt-3'>
            <div>
                <img src={breed.image.url} width={500} height={500} />
                <h3>Name: {breed.name}</h3>
                <p>Bred for: {breed.bred_for}</p>
                <p>Temperaments: {breed.temperament}</p>
            </div>
        </div>
    )
}

export default BreedsList;