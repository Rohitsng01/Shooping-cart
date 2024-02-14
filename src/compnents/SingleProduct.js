import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../Context/Context'
import toast from 'react-hot-toast'

const SingleProduct = ({prod}) => {
  const {state:{ cart },
  dispatch,
} =CartState();
 console.log(cart)
 toast.success("Added To Cart")
 

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' width={100} height={150} src={prod.imgsrc} alt={prod.name}/>
        <Card.Body>
          <Card.Title  >{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10,}}>
          <span> $ {prod.price} </span>
          {prod.fastDelivery ? (
            <div>Fast Delivery</div>
          ):(
            <div>4 Days Delivery</div>
          )}
          <Rating rating={prod.rating} />
          </Card.Subtitle>
          {
            cart.some(p=> p.id===prod.id)?(
              <Button
               onClick={() => {
                dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:prod,
                })}} variant='danger'

              >
              Remove From Cart
            </Button>
            ) :
            (
 <Button variant='success' 
  onClick={() => {
                dispatch({
                  type:"ADD_TO_CART",
                  payload:prod,
                });
              }}
              disabled={!prod.inStock}
              >
              {!prod.inStock ?"Out of Stock" : "Add to Cart"}
            </Button>
            )
          }
         
         
        </Card.Body>
      </Card>

    </div>
  )
}

export default SingleProduct