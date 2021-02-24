import BreedsList from './BreedsList';
import { Row } from 'react-bootstrap'

const BreedGrid = ({ dogs, isLoading }) => {
    return (
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