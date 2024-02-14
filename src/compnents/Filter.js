import React  from 'react'
import { Form,Button } from 'react-bootstrap'
import { CartState } from '../Context/Context'

const Filter = () => {

    const{ productState :{byStock, byFastDelivery, sort,}, productDispatch} = CartState()
        

  return (
    <div className='filters'>
        <span className='title'> Filter Products</span>
        <span>
            <Form.Check 
            inline
            label = "Ascending"
            name = "group1"
            type = "radio"
            id = {'inline-1'}
            onChange={() => productDispatch({
                type:"SORT_BY_PRICE",
                payload: "lowToHigh"
            })}
            checked={sort === "lowToHigh" ? true:false}
            />
        </span>
        <span>
        <Form.Check 
            inline
            label = "Descending"
            name = "group1"
            type = "radio"
            id = {'inline-2'}
            onChange={() => productDispatch({
                type:"SORT_BY_PRICE",
                payload:"HighToLow",
            })}
            checked={sort === "HighToLow" ? true : false}
            />
        </span>
        <span>
        <Form.Check 
            inline
            label = "Include Out Of Stock"
            name = "group1"
            type = "checkbox"
            id = {'inline-3'}
            onChange={() => productDispatch({
                type:"FILTER_BY_STOCK",
            })}
            checked={byStock}
            />
        </span>
        <span>
        <Form.Check 
            inline
            label = "Fast Delivery"
            name = "group1"
            type = "checkbox"
            id = {'inline-4'}
            onChange={() => productDispatch({
                type:"FILTER_BY_DELIVERY",
            })}
             checked= {byFastDelivery}
            />
        </span>
        
         
        <Button variant='light'
        onClick={()=> productDispatch({
            type:"CLEAR_FILTER",
        })}>Clear Filter</Button>


    </div>
  )
}

export default Filter