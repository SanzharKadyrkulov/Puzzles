import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from '../Admin/AddProduct';
import EditProduct from '../Admin/EditProduct';
import Footer from '../components/Footer/Footer';
import Fav from '../components/Fav/Fav';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import ProductDetails from '../components/Home/ProductDetails';
import ProductList from '../components/Home/ProductList';
import ProductContextProvider from '../contexts/ProductContext';
import About from '../components/AboutUs/About';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';

const Routes = () => {
    return (
        <BrowserRouter>
            <ProductContextProvider>
                <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/productlist" component={ProductList} />
                    <Route exact path='/addproduct' component={AddProduct} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path='/fav' component={Fav} />
                    <Route exact path='/editproduct/:id' component={EditProduct} />
                    <Route exact path='/details/:id' component={ProductDetails} />
                </Switch>
                <Footer />
            </ProductContextProvider>

        </BrowserRouter>
    );
};

export default Routes;