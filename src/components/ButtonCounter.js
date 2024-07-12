import React from 'react'
import { IconButton } from '@mui/material'

export const ButtonCounter=({arialabel,operation, onClick })=>{
    return(
        <IconButton
        sx={{
            width: '30px',
            height: '40px',
        }}
        aria-label={arialabel}
        onClick={onClick}>
            <img src={operation} alt={arialabel}/>
        </IconButton>
    )
}

