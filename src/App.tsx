import React, { FunctionComponent } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ShopStore, { Context } from './ShopStore';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

import 'bulma/css/bulma.min.css';


const App: FunctionComponent = () => {
  return (
    <ShopStore>
      <div className="has-navbar-fixed-top">
        <header>
          <Context.Consumer>
            {({cart}) => (
              <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand container">
                    <Link className="navbar-item" to="/">
                      Home
                    </Link>
                    <Link className="navbar-item" to="/cart">
                      Cart({cart == null ? 0 : Object.keys(cart).length})
                    </Link>
                </div>
              </nav>
            )}
          </Context.Consumer>
        </header>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<ShoppingCart />} />
            </Routes>
        </main>
      </div>
    </ShopStore>
  );
}

export default App;
