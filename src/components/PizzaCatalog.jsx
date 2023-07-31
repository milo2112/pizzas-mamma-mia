import { React, useContext } from 'react'
import PizzaCard from './PizzaCard'
import { Container, Row, Col } from 'react-bootstrap'
import GlobalContext from '../context/GlobalContext'

export default function PizzaCatalog () {
  const { pizzaData } = useContext(GlobalContext)
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row>
          {pizzaData.map(({ id, img, name, ingredients, price }) => (
            <Col className='col-md-4 mt-5 mb-5' key={id}>
              <PizzaCard
                id={id}
                img={img}
                name={name}
                ingredients={ingredients}
                price={price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
