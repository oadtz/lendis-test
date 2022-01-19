import React, { FunctionComponent, useContext } from 'react';
import { Context } from './ShopStore';
import { Product } from '../types';

const ShoppingCart: FunctionComponent = () => {
    const {products, cart, removeFromCart} = useContext(Context)

    const calculateTotalAmount = (products: Product[], cart: Record<number, number>): number => {
        return Object.keys(cart).reduce((accumAmount, productId) => {
            const product = products.find(p => p.id === Number(productId))

            return accumAmount + (product?.price ?? 0 * cart[Number(productId)])
        }, 0)
    }

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Your Cart
                </h1>
                {
                    Object.keys(cart).length === 0 ? 
                    <p>Cart is empty</p>
                    :
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
                                    <td>{product?.title} x {cart[productId]}</td>
                                    <td>${(product?.price ?? 0) * cart[productId]}</td>
                                    <td><button className="button is-danger" onClick={() => removeFromCart(productId)}>Remove</button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th colSpan={2}>${calculateTotalAmount(products, cart)}</th>
                            </tr>
                        </tfoot>
                    </table>
                }
            </div>
        </section>
    )
}

export default ShoppingCart;