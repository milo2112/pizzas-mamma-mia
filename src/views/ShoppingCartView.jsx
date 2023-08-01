import { React, useContext, useState } from 'react'
import ShoppingCart from '../components/shoppingCart'
import GlobalContext from '../context/GlobalContext'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import '../assets/css/img.css'
import currencyFormatter from '../functions/currencyFormatter'

export default function ShoppingCartView () {
  const {
    pizzaToBuy,
    setPizzaToBuy,
    pizzaTotalPrice,
    setPizzaTotalPrice
  } = useContext(GlobalContext)

  const [show, setShow] = useState(false)

  const finishPurchase = () => {
    setPizzaToBuy([])
    setPizzaTotalPrice(0)
    setShow(true)
  }

  if (show) {
    return (
      <Alert
        variant='success'
        onClose={() => setShow(false)}
        dismissible
      >
        <Container className='text-center'>
          <Alert.Heading>¡Tu compra ha sido realizada!<br /><br />
            Estamos redireccionando al portal de pagos<br /><br />
            <p>
              ¡Tu pedido llegará en menos de 30 minutos, si no, te devolvemos
              tu dinero!<br /><br />
              ¡Muchas gracias por preferir Pizzería Mamma Mía!
            </p>
          </Alert.Heading>
        </Container>
      </Alert>
    )
  }

  return (
    <div className='bg-dark'>
      <div className='text-white display-6 ms-5'>Detalles del Pedido:</div>
      <Container className='mt-5 text-color'>
        {pizzaToBuy.map(({ selectedPizza, count }) => (
          <Row key={selectedPizza.id} className='mb-3'>
            <ShoppingCart
              id={selectedPizza.id}
              img={selectedPizza.img}
              name={selectedPizza.name}
              price={selectedPizza.price}
              count={count}
            />
          </Row>
        ))}
        <Row>
          <Col>
            <h5
              bg='secondary'
              className='fw-bold text-white display-6 mb-3 mt-4'
            > Total a Pagar $ {currencyFormatter(pizzaTotalPrice)}
            </h5>
          </Col>
          <Col style={{ paddingBottom: '53%' }}>
            <Button
              className='mt-4 me-5'
              variant='outline-success'
              size='lg'
              onClick={() => pizzaTotalPrice > 0 ? finishPurchase() : setShow(false)}
            >Ir a Pagar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
