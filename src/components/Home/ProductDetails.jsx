import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useParams } from 'react-router-dom';
import { Box, Button, CardMedia, CircularProgress, IconButton } from '@material-ui/core';
import { useProducts } from '../../contexts/ProductContext';
import SvgIcon from '@material-ui/core/SvgIcon';
import RestoreIcon from '@material-ui/icons/Restore';
import { Pagination, Rating } from '@material-ui/lab';
import CommentIcon from '@material-ui/icons/Comment';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MainLayout from '../../layouts/MainLayouts';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import ProductComments from './ProductComments';
import ProductRating from './ProductRating';


// import { Pagination } from "@material-ui/lab";




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
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const ProductDetails = () => {
  const params = useParams()

  const { getProductDetails, addProductToCart, getCart, cart, rec , getRecData, favProductToCart, fav, getFav, productDetails, history } = useProducts()
  const { id } = useParams()
  useEffect(() => {
    getProductDetails(id)
  }, [id])
  const getRating = () => {
    let sum = productDetails?.rating.reduce((a, b) => {
      return a+b.rating
    }, 0)
    return sum / productDetails?.rating.length
  }
  const [rating, setRating] = useState(getRating())
  const [newCart, setNewCart] = useState(null)
  const [newFav, setNewFav] = useState(null)
  useEffect(() => {

    getCart()
  }, [])
  useEffect(() => {
    setNewCart(cart);
  }, [cart])
  useEffect(() => {
    // console.log("this is productCard item ", item.likes);
    getFav()
  }, [])
  useEffect(() => {
    
    setNewFav(fav);
  }, [fav])

  const checkItemInCart = (id) => {
    // console.log('HERE', newCart)
    if (newCart && newCart.products) {
      const foundItem = newCart?.products.find((product) => product.item.id === id)
      // return foundItem ? 'secondary' : 'default'
      return foundItem
    }
  }
  const checkItemInFav = (id) => {
    // console.log('HERE', newFav)
    if (newFav && newFav.products) {
      const foundItem = newFav?.products.find((product) => product.item.id === id)
      return foundItem ? 'secondary' : 'default'
    }
  }

  
  useEffect(() => {
    getRecData()
  }, [])
  useEffect(() => {
    if(productDetails) setRating(getRating())

  }, [productDetails])



  const classes = useStyles();
  return (
      
    <>
    <MainLayout>

      {productDetails ?


          // <Paper style={{ backgroundImage: `url(${productDetails.animation})`}} className={classes.paper}>
          //   <Paper style={{backgroundColor: '#00000000', color:'white', maxWidth: "300px"}}  spacing={2}>
          //     <Grid item xs={12} sm container>
          //       <Grid item xs container direction="column" spacing={2}>
          //         <Grid item xs>
          //           <Typography gutterBottom variant="h3">
          //             {productDetails.title}
          //           </Typography>
          //           <Typography variant="h6" gutterBottom>
          //             {productDetails.type}
          //           </Typography>
          //           <Typography variant="p" >
          //             {productDetails.describtion}
          //           </Typography>
          //           <Typography variant="h4">{productDetails.price}$</Typography>
          //         </Grid>
          //         <Grid item>
          //           <IconButton
          //             edge="end"
          //             aria-label="account of current user"
          //             aria-haspopup="true"
          //             color="inherit"
          //             onClick={() => history.push('/productlist')}
          //           >
          //             <RestoreIcon style={{border:'2px solid rgba(52, 52, 52, 0.5)', borderRadius:"50%"}} color="white" />

          //           </IconButton>
          //         </Grid>
          //       </Grid>
          //     </Grid>
          //   </Paper>
          // </Paper>
          <>
          <div style={{display: 'flex', maxWidth: '1240px', margin: '0 auto'}}>
            <img src={productDetails.image} style={{width: '100%'}} />
            <div style={{width: '100%'}}>

              <h2>{productDetails.type} {productDetails.title}</h2>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%', margin: '10px 0 30px'}}>
                  <Rating name="read-only" value={rating} readOnly />
                  {/* <IconButton */}
                  {/* // color={checkItemInCart(item.id)}
                    // onClick={() => addProductToCart(item)} */}
                  {/* > */}
                  <div>

                    <CommentIcon 
                    aria-label="add to shopping"
                    color='warning'
                    onClick={() => history.push(`/rating/${productDetails.id}`)}
                    
                    />
                  </div>
                  {/* </IconButton> */}
                  <div>

                  <BookmarkBorderIcon
                    color={checkItemInFav(productDetails.id)}
                    aria-label="add to shopping"
                    onClick={() => favProductToCart(productDetails)}
                  />
                  </div>

              </div>
              <p style={{marginBottom: '20px'}}>{productDetails.describtion}</p>
              <Button
                variant={checkItemInCart(productDetails.id) ? 'contained':'outlined'}
                color="secondary"
                className={classes.button}
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addProductToCart(productDetails)}
              >
                {checkItemInCart(productDetails.id) ? "Remove from cart" : "Add to cart"}
              </Button>
              <ProductRating />
              
            </div>
            
          </div>
          <Container style={{marginBottom: '25px',display: 'flex', justifyContent: 'center', flexWrap:'wrap' }} maxWidth="sm">
          <h3 style={{marginBottom: '25px', width: '100%'}}>Comments:</h3>
          <ProductComments/>
            
          </Container>
          <Container className={classes.cardGrid} style={{marginBottom: '25px'}} maxWidth="sm">
          <h3 style={{marginBottom: '25px'}}>Recomendations:</h3>
          <Grid container spacing={4}>
            {rec && rec.map((item) => {
              if(item.type===productDetails.type && item.id !== productDetails.id){
                return <ProductCard key={item.id} item={item} />
              }
            }
            )}
          </Grid>
        </Container>
        </>

        :
        <CircularProgress />
      }
    </MainLayout>
    </>
  )
}

export default ProductDetails;