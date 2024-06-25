import React from 'react'
import {Button as ButtonMUI, IconButton} from "@mui/material"
export const Icons={
    Logo: require('./logo.svg').default,
    ProfilePicture: require('./image-avatar.png'),
    ShoppingCart: require('./icon-cart.svg').default,
    Minus: require('./icon-minus.svg').default,
    Plus: require('./icon-plus.svg').default,
    Close: require('./icon-close.svg').default,
    Previous: require('./icon-previous.svg').default,
    Next: require('./icon-next.svg').default,
}

export const Buttonmui=({title})=>{
    return(
        <ButtonMUI
        color='primary' 
        sx={{
            textTransform:'none',
            color:'gray',
            borderRadius:'0',
            width:'90px',
            height:'70px',
            ':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}
        >
            {title}
        </ButtonMUI>
    )
}

export const ButtonCounter=({arialabel,operation, onClick })=>{
    
    return(
        <IconButton
        sx={{
            width: '30px',
            height: '40px',
        }}
        aria-label={arialabel}
        onClick={onClick}>
            <img src={operation} alt={arialabel}></img>
        </IconButton>
    )
}

