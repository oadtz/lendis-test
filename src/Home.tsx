import React, { useEffect, useState } from 'react';
import items from './data/items'
import Item from './Item';

const Home = () => {
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
                    {items.map(item => (
                        <div key={item.id} className="column is-4">
                            <Item {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home;