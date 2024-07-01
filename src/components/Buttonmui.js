import {Button as ButtonMUI} from "@mui/material"

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