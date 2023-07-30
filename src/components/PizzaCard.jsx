import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container, ListGroup, Button } from 'react-bootstrap'
import GlobalContext from '../context/GlobalContext'

export default function PizzaCard ({ id, img, name, ingredients, price }) {
  const navigate = useNavigate()
  const { pizzaToBuy, setPizzaToBuy, setPizzaTotalPrice } = useContext(GlobalContext)

  const goPizzaDetail = (pizzaCardId) => {
    navigate(`/pizzadetail/${pizzaCardId}`)
  }

  const addToShoppingCart = (addId, addImg, addName, addPrice) => {
    setPizzaTotalPrice((prevValue) => prevValue + addPrice)
    const pizzaIdx = pizzaToBuy.findIndex(element => element.selectedPizza.id === addId)
    if (pizzaIdx < 0) {
      const pizzaToMyCart = { selectedPizza: { id: addId, name: addName, price: addPrice, img: addImg }, count: 1 }
      setPizzaToBuy([...pizzaToBuy, pizzaToMyCart])
    } else {
      pizzaToBuy[pizzaIdx].count += 1
    }
  }

  return (
    <>
      <Container>
        <Card className='card' style={{ width: '18rem' }} key={id}>
          <div className='overflow'>
            <Card.Img className='card-img-top' variant='top' src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name[0].toUpperCase() + name.substring(1)}</Card.Title>
            <Card.Text>
              Ingredientes
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            {ingredients.map((ingredient, idx) => (
              <ListGroup.Item
                key={idx}
                style={{ padding: '0', marginLeft: '15px' }}
              > 🍕 {ingredient[0].toUpperCase() + ingredient.substring(1)}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Card.Text className='text-center display-6'>${price}</Card.Text>
          </Card.Body>
          <Card.Body className='d-flex justify-content-center gap-3'>
            <Button
              variant='outline-primary'
              size='sm'
              onClick={() => goPizzaDetail(id)}
            > Ver Más 👀
            </Button>
            <Button
              variant='outline-danger'
              size='sm'
              onClick={() => addToShoppingCart(id, img, name, price)}
            >Añadir  🛒
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
