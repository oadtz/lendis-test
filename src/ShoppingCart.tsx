import React from 'react';
import { Context } from './ShopStore';

const ShoppingCart = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Your Cart
                </h1>

                <Context.Consumer>
                    {({products, cart, removeFromCart}) => (
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
                                const productId = Number(id)
                                const product = products.find(i => i.id === productId)

                                return (
                                    <tr key={id}>
                                        <td>{product?.title}</td>
                                        <td>{cart[productId]}</td>
                                        <td><button className="button is-danger" onClick={() => removeFromCart(productId)}>Remove</button></td>
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