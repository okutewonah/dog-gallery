import BreedsList from './BreedsList';
import { Row } from 'react-bootstrap'
import Loader from './Loader'

const BreedGrid = ({ dogs, isLoading }) => {
    return isLoading ? (
        <Loader />
    ) : (
        <Row>
            {
                dogs.map((dog, i) => (
                    <BreedsList key={dog.id} breed={dogs[i]}></BreedsList>
                ))              
            }
        </Row>
    )
}

export default BreedGrid;