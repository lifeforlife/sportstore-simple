import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import { loadData, placeOrder } from '../data/ActionCreators';
import { DataTypes } from '../data/Types';
import Shop from './Shop';
import {addToCart, updateCartQuantity, removeFromCart, clearCart } from '../data/CartActionCreators';
import {CartDetails} from './CartDetails';
import {DataGetter} from "../data/DataGetter";
import {Checkout} from './Checkout';
import {Thanks} from './Thanks';



const mapStateToProps = (datastore) => ({
    ...datastore
})

const mapDispatchToProps = {
    loadData, addToCart, updateCartQuantity, removeFromCart, clearCart, placeOrder
}

// const filterProducts = (products = [], category) => (!category ||  category === "All") ? products:products.filter(p => p.category.toLowerCase() === category.toLowerCase());



export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return (
                <Switch>
                    <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={true}/>
                    <Route path={"/shop/products/:category/:page"} render={ (routeProps) => <DataGetter {...this.props} { ...routeProps}>
                        <Shop {...this.props} {...routeProps}/>
                    </DataGetter>}/>
                    <Route path="/shop/cart" render={(routeProps) => <CartDetails {...this.props } { ...routeProps }/>} />
                    <Route path="/shop/checkout" render={ routeProps => <Checkout {...this.props} {...routeProps}/>}/>
                    <Route path="/shop/thanks" render={routeProps => <Thanks {...this.props} {...routeProps}/>}/>
                    <Redirect to="/shop/products/all/1"/>
                </Switch>
            )
        }
        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            // this.props.loadData(DataTypes.PRODUCTS);
        }
    }
)