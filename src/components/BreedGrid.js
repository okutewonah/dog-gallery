import BreedsList from './BreedsList';

const BreedGrid = ({ dogs, isLoading }) => {
    return (
        <div className='row'>
            {
                dogs.map((dog, i) => (
                    <BreedsList key={dog.id} breed={dogs[i]}></BreedsList>
                ))              
            }
        </div>
    )
}

export default BreedGrid;