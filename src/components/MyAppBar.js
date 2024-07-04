import { IconButton, Toolbar,AppBar, Button, Box, Badge,Menu,MenuItem} from '@mui/material';
import React,{useContext,useState} from 'react';
import {Buttonmui} from './Buttonmui'
import {Icons} from '../utils/icons';
import {Link} from 'react-router-dom';
import { CountContext } from './CountContext';
import { MenuCart } from './MenuCart';

export function MyAppBar(){
  const {count,setCount}=useContext(CountContext);
  const [anchorEl,setAnchorEl]=useState(null);
  const handleMenuOpen=(event)=>{
    setAnchorEl(event.currentTarget);
  }
  const handleMenuClose=()=>{
    setAnchorEl(null);
  }
  const isMenuOpen=Boolean(anchorEl);
  const handleClick=()=>{
    console.log('Hola');
  };

    return(
      <AppBar sx={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
          <Link to='/'>
          <IconButton edge='start' color='inherit' aria-label='logo' position='relative' sx={{ml:'12vmax'}}>
            <img src={Icons.Logo} alt='Logo' style={{height:'20px',}}/>
          </IconButton>
          </Link>
          <Box sx={{display:'flex',alignItems:'center',marginLeft:'90px'}}>
            <Link to='/Collections'>
              <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'110px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                  Collections
              </Button>
            </Link>
            <Link to='/Men'>
              <Buttonmui title='Men'/>
            </Link>
            <Link to='/Women'>
              <Buttonmui title='Women'/>
            </Link>
            <Link to='/About'>
              <Buttonmui title='About'/>
            </Link>
            <Link to='/Contact'>
              <Buttonmui title='Contact'/>
            </Link>  
           </Box>
           <IconButton
           id='IconCart' 
           edge='end' 
           color='inherit' 
           aria-label='ShoppingCart' 
           sx={{marginLeft:'20vmax'}}
           onClick={handleMenuOpen}>
              <Badge badgeContent={count} color='secondary' sx={{ '& .MuiBadge-badge': { backgroundColor: 'hsl(26, 100%, 55%)' } }}>
              <img src={Icons.ShoppingCart} alt='ShoppingCart'/>
              </Badge>
           </IconButton>
           <Menu 
           id='IconCart'
           anchorEl={anchorEl}
           open={isMenuOpen}
           onClose={handleMenuClose}
           sx={{mt:'10px'}}
           >
            <MenuItem onClick={handleMenuClose} style={{fontWeight:'bold'}}>Cart</MenuItem>
            <MenuItem >
              <MenuCart count={count} setCount={setCount}/>
            </MenuItem>
           </Menu>
           <IconButton edge="end" color='inherit' aria-label='ProfilePicture' sx={{marginLeft:'2vmax'}} onClick={handleClick}>
                <img src={Icons.ProfilePicture} 
                alt='ProfilePicture' 
                style={{width:'43px'}}
                />
           </IconButton>
            </Toolbar>
      </AppBar>
    )
  }



