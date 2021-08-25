import { makeStyles, TextField, Button, Fade, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CircularProgress, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SendIcon from '@material-ui/icons/Send';
import { Rating } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/Add';






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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper_modal: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    input: {
      color: "#000",
      borderRightColor: '#FFF'
  },
  input__label: {
      color: "#c53f45",
      borderRightColor: '#FFF'
  },
  }));

const ProductRating = () => {
    const { getProductDetails, productDetails, history, editProduct } = useProducts()
    const {user} = useAuth()
    const { id } = useParams()
    useEffect(() => {
        getProductDetails(id)
    }, [id])
    const [product, setProduct] = useState(productDetails)
    useEffect(() => {
        setProduct(productDetails)
    }, [productDetails])
    const classes = useStyles();
    const [value, setValue] = React.useState(5);
    const [rating, setRating] = useState({
        email: user.email,
        rating: 5,
    })
    const handleInput = (newValue) => {

        if(productDetails){
            setRating({
                email: user.email,
                rating: newValue,
            })
            console.log(rating);
        }
    }
    const sendRating = async (e, id, productos) => {
        e.preventDefault()
        // if(e.target.parentNode.firstChild.lastChild.firstChild && e.target.parentNode.firstChild.lastChild.firstChild.value.trim()){
        //     e.target.parentNode.firstChild.lastChild.firstChild.value = ''
            let newRating = [...productos.rating]
            newRating.push(rating)
            let productWithRating = {
                ...productos,
                rating: newRating
            }
            const data = await editProduct(id, productWithRating)        
            setProduct(productWithRating);
            console.log(productWithRating);
            getProductDetails(id)
        // }
        
    }
    const deleteComment = async (index, id, productos) => {
        let deletedComment = [...productos.comments]
        const del = deletedComment.splice(index, 1)
        let productWithoutComment = {
            ...productos,
            comments: deletedComment
        }
        const data = await editProduct(id, productWithoutComment)        
            setProduct(productWithoutComment);

    }
    const editComment = async (index, id, productos) => {
        handleClose()
        let editedComment = [...productos.comments]
        console.log(index);
        const del = editedComment.splice(index, 1, rating)
        let productWithEditedComment = {
            ...productos,
            comments: editedComment
        }
        const data = await editProduct(id, productWithEditedComment)        
            setProduct(productWithEditedComment);
    }
    const whoIsAuthor = (commentixx) => {
        if(user && commentixx.email===user.email){
            return true
        }else{
            return false
        }
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    


    return (
        <>
      {productDetails ?


            <Paper style={{backgroundColor: '#fff', color:'white', maxWidth: "600px", minWidth: '500px', marginTop: '10px'}}  spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs style={{display: 'flex', alignItems: 'center'}}>
                    {/* <form style={{marginTop: '6px'}}> */}

                        <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log(newValue);
                            handleInput(newValue)
                        }}
                        />
                    <Button
                      type='submit  '
                      edge="end"

                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={(e) => sendRating(e, product.id, product)}
                    >
                      <AddIcon color="secondary" />

                    </Button>
                    {/* </form> */}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>

        :
        <CircularProgress />
      }
    </>
    );
};

export default ProductRating;