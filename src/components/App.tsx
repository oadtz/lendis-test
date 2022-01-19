import React, { FunctionComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import ShopStore from './ShopStore';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

import 'bulma/css/bulma.min.css';
import NavBar from './NavBar';


const App: FunctionComponent = () => {
  return (
    <ShopStore>
      <div className="has-navbar-fixed-top">
        <header>
          <NavBar />
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
