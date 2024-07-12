import { Button } from "@mui/material"

export const ButtonCart=({title,onClick})=>{
    return(
        <Button style={{backgroundColor:'hsl(26, 100%, 55%)'
            ,fontSize:'12px'
            ,textTransform:'none'
            ,fontWeight:'700'
            ,color:'black'
            ,width:'250px'
            ,height:'42px'
            ,marginLeft:'10px'
            ,borderRadius:'10px'}}
            onClick={onClick}
            >{title}
        </Button>
    )
}