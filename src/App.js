import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    {/* <Route exact path="/" element={<Photos />}/> */}
                    <Route exact path="/cart" element={<Cart />}/>
                    <Route  path="/cart-shop" element={<Photos />}/>
                </Routes>
            </div>
        </div>  
    )
}

export default App