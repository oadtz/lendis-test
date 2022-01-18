import React from 'react';
import { Context } from './ShopStore';
import items from './data/items'

const ShoppingCart = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Your Cart
                </h1>

                <Context.Consumer>
                    {({cart, removeFromCart}) => (
                        <table className="table is-fullwidth">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Object.keys(cart).map(id => {
                                const item = items.find(i => i.id === id)

                                return (
                                    <tr key={id}>
                                        <td>{item?.name}</td>
                                        <td>{cart[id]}</td>
                                        <td><button className="button is-danger" onClick={() => removeFromCart(id)}>Remove</button></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    )}
                </Context.Consumer>
            </div>
        </section>
    )
}

export default ShoppingCart;