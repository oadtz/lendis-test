import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./ShopStore";

const NavBar: FunctionComponent = () => {
    const { cart } = useContext(Context)

    return (
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
    );
}

export default NavBar;