import { files } from '../utils';
import { Icons } from '../utils/icons';
import { Button } from '@mui/material';
import { ButtonCart } from './ButtonCart';
export function MenuCart({count,setCount}){
    const resetCount=()=>{
        setCount(0);
    };
    const DEFAULT_PRICE=125;
    const totalPrice=DEFAULT_PRICE*count;
    const EMPTY_CART=0;
    return(
      <>
        {count > EMPTY_CART ? (
        <div>
            <div style={{display:'flex'}}>
                <img src={files.Thumb1} alt='Thumb1' style={{width:'50px',borderRadius:'5px'}}></img>
                <ul style={{listStyle:'none',paddingLeft:'15px'}}>
                    <li>Fall Limited Edition Sneakers</li>
                    <li>$125.00 x {count}= <label style={{fontWeight:'bold'}}>${totalPrice.toFixed(2)}</label></li>
                </ul>
            </div>
                <ButtonCart 
                    title='Checkout'/>
                <Button style={{backgroundColor:'white',marginLeft:'0'}} onClick={resetCount}>
                    <img 
                    src={Icons.trashIcon} 
                    alt='trashIcon'
                    />
                </Button>  
        </div>
        ):(
            <div 
            style={{
            width:'200px',
            height:'65px',
            textAlign:'center',
            marginTop:'30px',
            opacity:'0.8'
        }}>Your cart is empty</div>
        )}
      </>
    )
  }