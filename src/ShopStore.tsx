import React, { useEffect, useState } from 'react';
import { Product } from './types';

type ContextProps = {
    products: Product[]
    cart: Record<number, number>
    addToCart: (id: number) => void
    removeFromCart: (id: number) => void
}

export const Context = React.createContext({} as ContextProps);

const ShopStore = (props: any) => {
    const [products, setProducts] = useState([])
    const [cart, updateCart] = useState({} as Record<number, number>)

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');

            setProducts(await response.json());
        } catch (e) {
            console.error('Failed to fetch products');
        }
    }

    const fetchCart = () => {
        try {
            const cartData = JSON.parse(sessionStorage.getItem('cart') ?? '{}')

            updateCart(cartData)
        } catch (e) {
            console.error('Failed to fetch cart data from sessionStorage')
        }
    }

    const addToCart = (id: number) => {
        const updatedCart = {...cart}

        if (id in updatedCart) {
            updatedCart[id]++
        } else {
            updatedCart[id] = 1
        }
        
        updateCart(updatedCart)
        sessionStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    const removeFromCart = (id: number) => {
        const updatedCart = {...cart}

        delete updatedCart[id];

        updateCart(updatedCart)
        sessionStorage.setItem('cart', JSON.stringify(updatedCart))
    }


    useEffect(() => {
        fetchCart()
        fetchProducts()
    }, [])


    return (
        <Context.Provider value={{
            products,
            cart,
            addToCart,
            removeFromCart
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ShopStore