import React from 'react';
import { Context } from './ShopStore';

type ItemProps = {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number
}

const Item = (props: ItemProps) => {
    const { id, name, description, image, price } = props

    return (
        <Context.Consumer>
        {(context) => (
            <article className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p>{description}</p>
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

export default Item;