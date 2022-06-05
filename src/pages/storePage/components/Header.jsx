import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'

const Header = ({handleCart, orderLen}) => {
    return (
        <>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' component='span' sx={{flexGrow: 1, pl: 5}}>
                    MUI Shop
                </Typography>
                <IconButton color='inherit' onClick={handleCart}>
                    <Badge color='secondary' badgeContent={orderLen}> 
                        <ShoppingBasket fontSize='large' />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
        
    );
}

export default Header;
