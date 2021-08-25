import { FormControl, FormLabel, Grid, Paper, FormControlLabel, RadioGroup, Radio, makeStyles, Slider, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';

const useStyles = makeStyles(theme => ({
    paper: {
        minWidth: '170px',
        maxWidth: '350px',
        padding: theme.spacing(2)
    },
    container: {
        padding: theme.spacing(2)
    },
    root: {
        background: 'linear-gradient(45deg, #c10921 30%, #c10921 90%)',
        borderRadius: 3,
        border: 0,
        color: '#fef7f0',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(126, 190, 202, .3)',
      },
    label: {
    textTransform: 'capitalize',
    },
}))
function valuetext(value) {
    return `${value}°C`;
  }
const SideBar = () => {
    const classes = useStyles()
    const { getProductsData, history } = useProducts()
    const getType = () => {
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }
    const getPrice = () => {
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }
    const [type, setType] = useState(getType())
    const [price, setPrice] = useState([230, 5000])


    const handleChangeType = (e) => {
        // if (e.target.value === 'all') {
        //     const search = new URLSearchParams(history.location.search)
        //     search.delete('type')
        //     history.push(`${history.location.pathname}?${search.toString()}`)
        //     getProductsData()
        //     setType(e.target.value)
        //     return
        // }

        const search = new URLSearchParams(history.location.search)
        search.set('type', e.target.value)
        search.set('_page', 1)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setType(e.target.value)
    }
    const handleChangePrice = (e, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_gte', value[0])
        search.set('price_lte', value[1])
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setPrice(value)
    }

    const resetPrice = () => {
        const search = new URLSearchParams(history.location.search)
        search.delete('price_lte')
        search.delete('price_gte')
        search.delete('type')
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setPrice([230,5000])
        setType('')
    }


    return (
        <Grid container md={3}>
            <Paper style={{  backgroundSize: "cover", backgroundPosition: "top", backgroundColor: 'transparent' }}
                elevation={2} className={classes.paper}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Type</FormLabel>
                    <RadioGroup value={type} onChange={handleChangeType}>
                        <FormControlLabel value="Rubic's cube" control={<Radio />} label="Rubic's cubes" />
                        <FormControlLabel value='Puzzle' control={<Radio />} label="Puzzles" />
                        <FormControlLabel value='Skilltoy' control={<Radio />} label="Skilltoys" />
                        {/* <FormControlLabel value='all' control={<Radio />} label="All" /> */}
                    </RadioGroup>
                </FormControl>

                <Grid>
                    {/* <Slider color="primary" value={price} onChange={handleChangePrice} valueLabelDisplay='auto' aria-labelledby="range-slider" min={240} max={15000} /> */}
                    <Slider
                        value={price}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        min={230} max={4550}
                    />
                    <Button classes={{
                        root: classes.root, // class name, e.g. `classes-nesting-root-x`
                        label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    }} onClick={resetPrice} variant='contained' >Reset</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default SideBar;