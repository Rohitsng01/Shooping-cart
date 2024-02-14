import React, { createContext, useContext, useReducer } from 'react'
import img3 from "./chicken.jpg"
import { cartReducer, productReducer } from './Reducers';
const Cart = createContext();

const Context = ({children}) => {
    const products =  [
              
         {
            name: "MOMOS",
            price: 50,
            imgsrc: img3,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "101",
            rating: 3,
            inStock:10,
            fastDelivery: Boolean(true),
            
 },
 {
    name: "BURGER",
    price: 110,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "102",
    rating: 4,
    inStock:10,
    fastDelivery: Boolean(true),
},
{
    name: "FRIED CHIPS",
    price: 150,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "103",
    inStock:0,
    rating: 3,
    fastDelivery: Boolean(false),
},
{
    name: "CHOWMIN",
    price: 80,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "104",
    rating: 5,
    inStock:10,
    fastDelivery: Boolean(true),
},
{
    name: "EGG CHOWMIN",
    price: 95,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "105",
    rating: 4,
    inStock:10,
    fastDelivery: Boolean(true),
},
{
    name: "CHICKEN CHOWMIN",
    price: 150,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "106",
    rating: 2,
    inStock:10,
    fastDelivery: Boolean(false),
},
{
    name: "EGG CURRY",
    price: 100,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "107",
    rating: 3,
    inStock:10,
    fastDelivery: Boolean(false),
},
{
    name: "CHICKEN TIKKA",
    price: 120,
    imgsrc: img3,
    title: "Basically Tikka serves delicious food with big portions and is great value of money. They have a salad bar",
    id: "108",
    rating: 5,
    inStock:10,
    fastDelivery: Boolean(true),
},
{
    name: "CHICKEN 26",
    price: 250,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "109",
    rating: 3,
    inStock:10,
    fastDelivery: Boolean(true),
},
{
    name: "CHICKEN CURRY",
    price: 190,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "110",
    inStock:10,
    rating: 5,
    fastDelivery: Boolean(false),
},
{
    name: "CHICKEN KABAB",
    price: 270,
    imgsrc: img3,
    title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
    id: "111",
    rating: 2,
    inStock:10,
    fastDelivery: Boolean(true),
}]
console.log(products)


   const [state,dispatch] =  useReducer(cartReducer,{
    products:products,
    cart:[],

   });

    const [productState,productDispatch] = useReducer(productReducer,{
        byStock:false,
        byFastDelivery: false,
        searchQuery: "",
    });


  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
        {children}
        </Cart.Provider>  
  )
};

export default Context

export const CartState= () =>{
    return useContext(Cart)
}
