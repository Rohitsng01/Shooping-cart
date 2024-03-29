import React from 'react'
import { Badge, Button, Container, Dropdown, DropdownMenu, FormControl, Nav, Navbar} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'
import { AiFillDelete } from 'react-icons/ai'

const Header = () => {

  const {state : {cart},dispatch,productDispatch} = CartState()
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{width:500 }}
          placeholder='Search a Product' className='m-auto'
          onChange={(e) => {
            productDispatch({
              type:'FILTER_BY_SEARCH',
              payload:e.target.value
            })
          }}/>
        </Navbar.Text>
        <Nav>
        <Dropdown style={{width:200}}>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart  color='white' fontSize="25px"/>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <DropdownMenu style={{minWidth:250,}}>
                {cart.length >0 ?(
                  <>
                  {cart.map((prod) => (
                    <span className='cartitem' key={prod.id}>
                      <img 
                        src={prod.imgsrc}
                        className='cartItemImg'
                        alt={prod.name}
                      />
                      <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>${prod.price}</span>
                      </div>
                      <AiFillDelete
                      fontSize='20px'
                      style={{cursor :'pointer'}}
                      onClick={() =>
                      dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod,
                      })}/>

                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{width:"95%", margin:"0 10px"}}>
                      Go To Cart
                    </Button>
                  </Link>
                  </>
                ):(
                  <span  style={{padding:10,}}>Cart Is Empty</span>
                )}

              
            </DropdownMenu>

          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header