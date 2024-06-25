import { IconButton, Toolbar,AppBar, Button, Box, Badge, Dialog, DialogContent,Card,CardMedia} from '@mui/material';
import * as React from 'react';
import { Icons } from './components/index';
import {Buttonmui,ButtonCounter} from './components/index'
import './App.css';
import {Link} from 'react-router-dom';

export function MyAppBar(){
  
    return(
      <AppBar sx={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
          <Link to='/'>
          <IconButton edge='start' color='inherit' aria-label='logo' position='relative' sx={{ml:'12vmax'}}>
            <img src={Icons.Logo} alt='Logo' style={{height:'20px',}}></img>
          </IconButton>
          </Link>
          <Box sx={{display:'flex',alignItems:'center',marginLeft:'90px'}}>
            <Link to='/Collections'>
              <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'110px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                  Collections
              </Button>
            </Link>
            <Link to='/Men'>
              <Buttonmui title='Men'></Buttonmui>
            </Link>
            <Link to='/Women'>
              <Buttonmui title='Women'></Buttonmui>
            </Link>
            <Link to='/About'>
              <Buttonmui title='About'></Buttonmui>
            </Link>
            <Link to='/Contact'>
              <Buttonmui title='Contact'></Buttonmui>
            </Link>  
           </Box>
           <IconButton edge='end' color='inherit' aria-label='ShoppingCart' sx={{marginLeft:'20vmax'}}>
              <Badge badgeContent="1">
              <img src={Icons.ShoppingCart} alt='ShoppingCart'></img>
              </Badge>
           </IconButton>
           <IconButton edge="end" color='inherit' aria-label='ProfilePicture' sx={{marginLeft:'2vmax'}}>
            <img src={Icons.ProfilePicture} alt='ProfilePicture' style={{width:'43px'}}></img>
           </IconButton>
            </Toolbar>
      </AppBar>
    )
  }

export function Counter(){
const [count, setCount]=React.useState(0);
    return(
            <div className='Counter'>
                <Box sx={{backgroundColor:'hsl(223, 64%, 98%)'}}>
                <ButtonCounter arialabel='Minus' operation={Icons.Minus}
                onClick={()=>{
                    setCount(Math.max(count-1,0));
                }}>
                </ButtonCounter>
                </Box>
                <Box sx={{backgroundColor:'hsl(223, 64%, 98%)',width:'60px',height:'42px'}}>
                    <Badge 
                    color='inherit' 
                    badgeContent={count} 
                    showZero 
                    sx={{marginLeft:'30px',marginTop:'13px', '& .MuiBadge-badge': { 
                        fontSize: '15px', 
                        fontWeight: '700' 
                         }}}>
                    </Badge>
                </Box>
                <Box sx={{backgroundColor:'hsl(223, 64%, 98%)'}}>
                <ButtonCounter arialabel='Plus' operation={Icons.Plus}
                onClick={()=>{
                    setCount(count+1);
                }}>
                </ButtonCounter>
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

export const ImageDialog=({open,handleClose,handlePrev,handleNext,currentImage})=>{
  
  return(
    <Dialog open={open} onClose={handleClose} maxWidth='300px'>
      <DialogContent style={{position:'relative',padding:0}}>
        <IconButton
        aria-label='close'
        onClick={handleClose}
        style={{position:'absolute',marginLeft:'435px',width:'40px',height:'40px'}}>
          <img src={Icons.Close} alt='closeIcon'></img>
        </IconButton>
        <IconButton
        aria-label='previous'
        onClick={handlePrev}
        style={{position:'absolute',marginTop:'220px',width:'40px',height:'40px',backgroundColor:'white'}}>
          <img src={Icons.Previous} alt='previousIcon'></img>
        </IconButton>
        <IconButton
        aria-label='next'
        onClick={handleNext}
        style={{position:'absolute',margin:'220px 0 0 440px',width:'40px',height:'40px',backgroundColor:'white'}}>
          <img src={Icons.Next} alt='nextIcon'></img>
        </IconButton>
        <Card>
          <CardMedia
          component='img'
          height="480"
          image={currentImage.src}
          sx={{objectFit:'cover',width:'480px'}}>
          </CardMedia>
        </Card>
      </DialogContent>
    </Dialog>
  )
}