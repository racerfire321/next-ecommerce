"use client"
import  React,{ createContext, useState,useEffect } from "react";
import { useRouter } from 'next/navigation';


const CartContext = createContext();
export const CartProvider = ({children})=> {
    const [cart,setCart] = useState({})
    const router = useRouter
    useEffect(() =>{
        setCartToState()},[]
    
    )
    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]
        )
    }
    const addItemToCart = async({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity = 1,


    })=> {
        const item ={
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity, 
        }
    
    const isItemExist = cart?.cartItem?.find((i)=> i.product === item.product)

    let newCartItems;
    if(isItemExist){
        newCartItems = cart?.cartItem?.map((i)=> i.product === item.product ? item :i)
         
    }else{
         
        newCartItems = [...(cart?.cartItems || []), item];
       
       
        
    }
    localStorage.setItem("cart",JSON.stringify({cartItems: newCartItems}))
    setCartToState();
    window.alert('Product added to cart!');

}
const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
    window.alert('product is deleted');
  };
return(
    <CartContext.Provider value={{cart,addItemToCart,deleteItemFromCart}}>
        
        {children}
        
        </CartContext.Provider>
)
}

export default CartContext