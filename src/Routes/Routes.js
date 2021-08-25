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
import ProtectedRoute from './ProtectedRoute';
import ProductComments from '../components/Home/ProductComments';
import OrderForm from '../OrderForm/OrderForm';
import Thanks from '../OrderForm/Thanks';
import OrderHistory from '../OrderHistory/OrderHistory';
import BrowsingHistory from '../components/BrowsingHistory/BrowsingHistory';
import ProductRating from '../components/Home/ProductRating';
import Chat from '../components/Chat/Chat';

const Routes = () => {
    return (
        <BrowserRouter>
            <ProductContextProvider>
                {/* <Header /> */}
                <Switch>
                    <Route exact path='/chat' component={Chat}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <ProtectedRoute exact path="/productlist" component={ProductList} />
                    <Route exact path='/addproduct' component={AddProduct} />
                    <ProtectedRoute exact path="/cart" component={Cart} />
                    <ProtectedRoute exact path='/fav' component={Fav} />
                    <Route exact path='/editproduct/:id' component={EditProduct} />
                    <Route exact path='/details/:id' component={ProductDetails} />
                    <Route exact path='/comments/:id' component={ProductComments}/>
                    <Route exact path='/order' component={OrderForm}/>
                    <Route exact path='/thanks' component={Thanks} />
                    <Route exact path='/orderhistory' component={OrderHistory}/>
                    <Route exact path='/browsinghistory' component={BrowsingHistory}/>
                    <Route exact path='/rating/:id' component={ProductRating}/>
                </Switch>
                {/* <Footer /> */}
            </ProductContextProvider>

        </BrowserRouter>
    );
};

export default Routes;