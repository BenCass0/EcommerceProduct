import * as React from 'react';
import {ButtonCounter} from './ButtonCounter'
import { Box,Badge,Button} from '@mui/material';
import { counterIcons } from '../utils';

export function Counter(){
    const [count, setCount]=React.useState(0);
        return(
                <div className='Counter'>
                    <Box sx={{backgroundColor:'hsl(223, 64%, 98%)'}}>
                    <ButtonCounter arialabel='Minus' operation={counterIcons.Minus}
                    onClick={()=>{
                        setCount(Math.max(count-1,0));
                    }}/>
                    </Box>
                    <Box sx={{backgroundColor:'hsl(223, 64%, 98%)',width:'60px',height:'42px'}}>
                        <Badge 
                        color='inherit' 
                        badgeContent={count} 
                        showZero 
                        sx={{marginLeft:'30px',marginTop:'13px', '& .MuiBadge-badge': { 
                            fontSize: '15px', 
                            fontWeight: '700' 
                             }}}/>
                    </Box>
                    <Box sx={{backgroundColor:'hsl(223, 64%, 98%)'}}>
                    <ButtonCounter arialabel='Plus' operation={counterIcons.Plus}
                    onClick={()=>{
                        setCount(count+1);
                    }}/>
                    </Box>
                    <div>
                      <Button style={{backgroundColor:'hsl(26, 100%, 55%)'
                        ,textTransform:'none'
                        ,fontSize:'12px'
                        ,fontWeight:'700'
                        ,color:'black'
                        ,width:'180px'
                        ,height:'42px'
                        ,marginLeft:'10px'
                        ,borderRadius:'10px'}}>Add To Cart</Button>
                    </div>
                </div>
        )
      }