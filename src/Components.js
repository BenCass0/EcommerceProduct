import { IconButton, Toolbar,AppBar, Button, Box, Badge, Dialog, DialogContent,Card,CardMedia} from '@mui/material';
import * as React from 'react';
import Logo from './logo.svg'
import ProfilePicture from './image-avatar.png';
import ShoppingCart from './icon-cart.svg';
import Minus from './icon-minus.svg';
import Plus from './icon-plus.svg';
import Close from './icon-close.svg';
import Previous from './icon-previous.svg';
import Next from './icon-next.svg';
import './App.css';

export function MyAppBar(){
    return(
      <AppBar sx={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='logo' position='relative' sx={{ml:'12vmax'}}>
            <img src={Logo} alt='Logo' style={{height:'20px',}}></img>
          </IconButton>
          <Box sx={{display:'flex',alignItems:'center',marginLeft:'90px'
          }}>
            <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'110px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                Collections
            </Button>
            <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'90px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                Men
            </Button>
            <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'90px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                Women
            </Button>
            <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'90px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                About
            </Button>
            <Button color='inherit' sx={{textTransform:'none',color:'gray',borderRadius:'0',width:'90px',height:'70px',':hover':{borderBottom:'4px solid hsl(26, 100%, 55%)'},}}>
                Contact
            </Button>
           </Box>
           <IconButton edge='end' color='inherit' aria-label='ShoppingCart' sx={{marginLeft:'20vmax'}}>
              <Badge badgeContent="1">
              <img src={ShoppingCart} alt='ShoppingCart'></img>
              </Badge>
           </IconButton>
           <IconButton edge="end" color='inherit' aria-label='ProfilePicture' sx={{marginLeft:'2vmax'}}>
            <img src={ProfilePicture} alt='ProfilePicture' style={{width:'43px'}}></img>
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
                <IconButton
                sx={{
                    width: '30px',
                    height: '40px',
                  }}
                aria-label='Reduce'
                onClick={()=>{
                    setCount(Math.max(count-1,0));
                }}
                >
                    <img src={Minus} alt='Minus'></img>
                </IconButton>
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
                <IconButton
                sx={{
                    width: '30px',
                    height: '40px',
                  }}
                aria-label='Increase'
                onClick={()=>{
                    setCount(count+1);
                }}
                >
                    <img src={Plus} alt='Plus'></img>
                </IconButton>
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
        style={{position:'absolute',marginLeft:'435px',width:'40px',height:'40px'}}
        >
          <img src={Close} alt='closeIcon'></img>
        </IconButton>
        <IconButton
        aria-label='previous'
        onClick={handlePrev}
        style={{position:'absolute',marginTop:'220px',width:'40px',height:'40px',backgroundColor:'white'}}
        >
          <img src={Previous} alt='previousIcon'></img>
        </IconButton>
        <IconButton
        aria-label='next'
        onClick={handleNext}
        style={{position:'absolute',margin:'220px 0 0 440px',width:'40px',height:'40px',backgroundColor:'white'}}
        >
          <img src={Next} alt='nextIcon'></img>
        </IconButton>
        <Card
        >
          <CardMedia
          component='img'
          height="480"
          image={currentImage.src}
          sx={{objectFit:'cover',width:'480px'}}
          >
          </CardMedia>
        </Card>
      </DialogContent>
    </Dialog>


  )
}