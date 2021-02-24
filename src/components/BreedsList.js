import { Col, Image } from "react-bootstrap";

const BreedsList = ({ breed }) => {
    return (
        <Col md={3} sm={6}>
            <div className='gallery-item'>
                <Image src={breed.image.url} width={400} height={400} alt={breed.name}  />
                <h3>Name: {breed.name}</h3>
                <p>Bred for: {breed.bred_for}</p>
                <p>Temperaments: {breed.temperament}</p>
            </div>
        </Col>
    )
}

export default BreedsList;