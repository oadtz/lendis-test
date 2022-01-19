import React, { FunctionComponent, useContext } from 'react';
import { Context } from './ShopStore';
import { Product } from '../types';

type ProductProps = {
    product: Product
}

const ProductCard: FunctionComponent<ProductProps> = ({ product }: ProductProps) => {
    const { id, title, image, price } = product
    const { cart, addToCart } = useContext(Context)

    return (
        <article className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="is-4">{title}</p>
                    </div>
                </div>

                <div className="content">
                    <h3>${price}</h3>
                </div>
            </div>
            <footer className="card-footer">
                <a role="button" onClick={() => addToCart(id)} className="card-footer-item">Add to cart</a>
            </footer>
        </article>
    );
}

export default ProductCard;