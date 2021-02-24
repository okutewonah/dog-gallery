import { Col, Card } from "react-bootstrap";

const BreedsList = ({ breed }) => {
    return (
        <Col md={3} sm={6}>
            <Card className='gallery-item'>
                <Card.Body>
                    <Card.Img variant='top' fluid src={breed.image.url} width={400} height={400} alt={breed.name} style={{ width: '100%', height: 'auto' }}  />
                    <Card.Title className='mt-2'>Name: {breed.name}</Card.Title>
                    <Card.Text>Bred for: {breed.bred_for}</Card.Text>
                    <Card.Text>Temperaments: {breed.temperament}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BreedsList;