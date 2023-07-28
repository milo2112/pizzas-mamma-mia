import { React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import GlobalContext from '../context/GlobalContext'
import '../assets/css/img.css'

export default function PizzaDetail () {
  const { pizzaData } = useContext(GlobalContext)
  const { idPizza } = useParams()

  return (
    <>
      <Container className='bg-dark h-100 mt-5 text-left text-white'>
        {pizzaData.filter((pizza) => pizza.id === idPizza)
          .map(({ id, img, desc, name, ingredients, price }) => (
            <Row key={id} className='h-100'>
              <Col className='overflow mt-5' style={{ height: '50rem' }}>
                <img className='border-radius detail-img-top' src={img} />
              </Col>
              <Col>
                <div className='display-6 ms-1 mt-5'>
                  {name[0].toUpperCase() + name.substring(1)}
                </div>
                <hr />
                <div className='mt-3'>{desc}</div>
                <h5><div className='mt-3 text-decoration-none'>Ingredientes: </div></h5>
                <ListGroup className='list-group-flush mt-4'>
                  {ingredients.map((ingredient, idx) => (
                    <div className='bg-dark text-white' key={idx} style={{ padding: '0', marginLeft: '50px' }}>
                      <div>🍕 {ingredient[0].toUpperCase() + ingredient.substring(1)}</div>
                    </div>
                  ))}
                </ListGroup>
                <Card.Body className='d-flex justify-content-center gap-5'>
                  <Card.Text className='display-6 mt-4 me-5'>${price}</Card.Text>
                  <Button className='mt-4 me-5' variant='outline-danger' size='lg'>Añadir  🛒</Button>
                </Card.Body>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  )
}