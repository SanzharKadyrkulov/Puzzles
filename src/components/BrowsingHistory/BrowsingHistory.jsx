import { Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import { JOSN_API_BROWSER } from '../../helpers/consts';
import MainLayout from '../../layouts/MainLayouts';
import ProductCard from '../Home/ProductCard';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      height: "100vh",
      position: 'relative',
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      marginBottom: theme.spacing(0)
    },
    //   image: {
    //     width: 200,
    //     height: "100%",
    //   },
    img: {
      margin: 'auto',
      display: 'block',
      maxHeight: '50vh',
    },
  }));

const BrowsingHistory = () => {
    const classes = useStyles()
    const { rec , getRecData, history} = useProducts()
    // const { id } = useParams()
    const [browsingHistory, setBrowsingHistory] = useState()
    const getBrowsingHistory = async () => {
        const {data} = await axios.get(JOSN_API_BROWSER)
        console.log(data);
        setBrowsingHistory(data[0].history.reverse())
    }
    useEffect(() => {
        getBrowsingHistory()
    },[]) 
    useEffect(() => {
        getRecData()
      }, [])
    return (
        <>
        <MainLayout>
            <Container className={classes.cardGrid} style={{marginBottom: '25px'}} maxWidth="lg">
          <h3 style={{marginBottom: '25px'}}>History:</h3>
          <Grid container spacing={4}>
            {rec && browsingHistory?.map((id) => {
                return rec.map(item => {
                    if(item.id===id){
                      return <ProductCard key={item.id} item={item} />
                    }
                })
            }
            )}
          </Grid>
        </Container>

        </MainLayout>
        </>
    );
};

export default BrowsingHistory;