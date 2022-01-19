import React, { FunctionComponent, useContext } from 'react';
import ProductCard from './ProductCard';
import { Context } from './ShopStore';

const Home: FunctionComponent = () => {
    const { products } = useContext(Context);

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
                    {products.map(product => (
                        <div key={product.id} className="column is-4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home;