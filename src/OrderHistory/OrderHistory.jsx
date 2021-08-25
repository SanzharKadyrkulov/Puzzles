import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useProducts } from '../contexts/ProductContext';
import { JSON_API_ORDER } from '../helpers/consts';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import MainLayout from '../layouts/MainLayouts';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "1300px",
    margin: '0 auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    width: '100%',
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
  cardMedia: {
    paddingTop: '96.25%'
  },
});

const OrderHistory = () => {
    const classes = useStyles();
    const time = new Date().toLocaleString();
    const {cart, getCart} = useProducts()
    const [orders, setOrders] = useState()
    const [orderHistory, setOrderHistory] = useState(null)
    const {history} = useProducts()
    useEffect(() => {
        getCart()
    },[])
    const getOrderHistory = async () => {
        const {data} = await axios.get(JSON_API_ORDER)
        console.log(data);
        // console.log(orderHistory);
        setOrderHistory(data)
        console.log(orderHistory);
    }
    useEffect(() => {
        getOrderHistory()
    },[]) 
           
    const addOrderHistory = async (order) => {
        const newOrder = {
            ...order,
            date: time
        }
        const data = await axios.post(JSON_API_ORDER, newOrder)
    }
    useEffect(() => {
        setOrders(cart)
      },[cart])
    return (
        <MainLayout>
            {orderHistory && orderHistory.reverse().map(orders => {
                return    (
                    <>
                    <Card className={classes.root} variant="outlined">
                        <CardContent style={{display: 'flex', flexWrap: 'wrap'}} >
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {orders.date}   
                        </Typography>
                    {orders.products.map(product => (
                        <div style={{minWidth: '300px'}}>
                        <Typography style={{textAlign: 'center'}} variant="h5" component="h2">
                        {product.item.title}
                        </Typography>
                            <CardMedia
                            onClick={() => history.push(`/details/${product.item.id}`)}
                            className={classes.cardMedia}
                            image={product.item.image}
                            title="Image Title"
                            />
                        <Typography className={classes.pos} color="textSecondary">
                        Price: {product.item.price}$
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Count: {product.count}
                        </Typography>
                        
                    </div>
                    ))}
                    <Typography  style={{width:'100%', textAlign: 'center'}} variant="h5" component="h2">
                    Total Price: {orders.totalPrice}$
                        </Typography>
                    </CardContent>
                    </Card>
                    
                    </>
                )
            }) }
            {/* <button onClick={() => addOrderHistory(orders)}>addorder</button> */}
        </MainLayout>
    );
};

export default OrderHistory;