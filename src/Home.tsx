import React, { FunctionComponent } from 'react';
import ProductCard from './ProductCard';
import { Context } from './ShopStore';

const Home: FunctionComponent = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Our items
                </h1>
                <p className="subtitle">
                    Select the ones you like!
                </p>
                <div className="columns is-multiline">
                    <Context.Consumer>
                        {({ products }) => products.map(product => (
                            <div key={product.id} className="column is-4">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </Context.Consumer>
                </div>
            </div>
        </section>
    )
}

export default Home;