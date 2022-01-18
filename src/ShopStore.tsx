import React, { useState } from 'react';

type ContextProps = {
    cart: Record<string, number>
    addToCart: (id: string) => void
    removeFromCart: (id: string) => void
}

export const Context = React.createContext({} as ContextProps);

const ShopStore = (props: any) => {
    const [cart, updateCart] = useState({} as Record<string, number>)

    const addToCart = (id: string) => {
        const updatedCart = {...cart}

        if (id in updatedCart) {
            updatedCart[id]++
        } else {
            updatedCart[id] = 1
        }
        
        updateCart(updatedCart)
    }

    const removeFromCart = (id: string) => {
        const updatedCart = {...cart}

        delete updatedCart[id];

        updateCart(updatedCart)
    }




    return (
        <Context.Provider value={{
            cart,
            addToCart,
            removeFromCart
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ShopStore