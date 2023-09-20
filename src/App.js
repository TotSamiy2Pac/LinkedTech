import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/product/:id'} element={<ProductPage/>}></Route>
        </Routes>
    );
};

export default App;