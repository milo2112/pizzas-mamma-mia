import { React, useContext } from 'react'
import { ListGroup, Badge, Image, Button } from 'react-bootstrap'
import '../assets/css/img.css'
import GlobalContext from '../context/GlobalContext'
import currencyFormatter from '../functions/currencyFormatter'

function ShoppingCart ({ id, img, name, price, count }) {
  const { setPizzaTotalPrice, pizzaToBuy } = useContext(GlobalContext)

  const addToShoppingCart = (addId, addPrice) => {
    setPizzaTotalPrice((prevValue) => prevValue + addPrice)
    const pizzaIdx = pizzaToBuy.findIndex(element => element.selectedPizza.id === addId)
    pizzaToBuy[pizzaIdx].count += 1
  }
  const removeFromShoppingCart = (removeId, removePrice) => {
    setPizzaTotalPrice((prevValue) => prevValue - removePrice)
    const pizzaIdx = pizzaToBuy.findIndex(element => element.selectedPizza.id === removeId)
    pizzaToBuy[pizzaIdx].count === 1 ? pizzaToBuy.splice(pizzaIdx, 1) : pizzaToBuy[pizzaIdx].count -= 1
  }

  return (
    <>
      <ListGroup>
        <ListGroup.Item
          className='d-flex justify-content-between align-items-start bg-dark'
          key={id}
        >
          <Image src={img} rounded style={{ width: '160px' }} />
          <div className='ms-2 me-auto'>
            <div className='mt-5 text-white' style={{ fontSize: 'large' }}>
              <h4>{name[0].toUpperCase() + name.substring(1)}</h4>
            </div>
          </div>
          <h5>
            <Badge className='mt-5 me-5' bg='secondary' pill>
              $ {currencyFormatter(count * price)}
            </Badge>
          </h5>
          <Button
            className='fw-bold text-white mt-5 me-5'
            variant='outline-danger'
            size='sm'
            onClick={() => removeFromShoppingCart(id, price)}
          >-
          </Button>
          <div className='fw-bold text-white p-2 mt-5 me-5 display-5' style={{ textAlign: 'center' }}>
            <h5>{count}</h5>
          </div>
          <Button
            className='fw-bold text-white mt-5 me-5'
            variant='outline-primary'
            size='sm'
            onClick={() => addToShoppingCart(id, price)}
          >+
          </Button>

        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default ShoppingCart
