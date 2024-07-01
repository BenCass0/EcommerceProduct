import { IconButton, Toolbar,AppBar, Button, Box, Badge} from '@mui/material';
import * as React from 'react';
import {Buttonmui} from './Buttonmui'
import {myAppBarIcons} from '../utils/index';
import {Link} from 'react-router-dom';

export function MyAppBar(){
    return(
      <AppBar sx={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
          <Link to='/'>
          <IconButton edge='start' color='inherit' aria-label='logo' position='relative' sx={{ml:'12vmax'}}>
            <img src={myAppBarIcons.Logo} alt='Logo' style={{height:'20px',}}></img>
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
           <IconButton edge='end' color='inherit' aria-label='ShoppingCart' sx={{marginLeft:'20vmax'}}>
              <Badge badgeContent="1">
              <img src={myAppBarIcons.ShoppingCart} alt='ShoppingCart'></img>
              </Badge>
           </IconButton>
           <IconButton edge="end" color='inherit' aria-label='ProfilePicture' sx={{marginLeft:'2vmax'}}>
            <img src={myAppBarIcons.ProfilePicture} alt='ProfilePicture' style={{width:'43px'}}></img>
           </IconButton>
            </Toolbar>
      </AppBar>
    )
  }



