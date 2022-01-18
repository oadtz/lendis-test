import React from 'react';
import { Context } from './ShopStore';
import { Product } from './types';

type ProductProps = {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {
    const { id, title, image, price } = product

    return (
        <Context.Consumer>
        {(context) => (
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
                    <a role="button" onClick={() => context.addToCart(id)} className="card-footer-item">Add to cart</a>
                </footer>
            </article>
        )
        }
        </Context.Consumer>
    )
}

export default ProductCard;