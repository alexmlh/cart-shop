import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
             <div className="container-header">
                <Link to="/cart-shop"><h2>Pic Some</h2></Link>
                <Link to="/cart">
                    <i className={`${cartClassName} ri-fw ri-2x`}></i>
                </Link>
            </div>
        </header>
    )
}

export default Header
