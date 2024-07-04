import { files } from '../utils';
import { Icons } from '../utils/icons';
export function MenuCart({count,setCount}){
    const resetCount=()=>{
        setCount(0);
    };

    const totalPrice=125*count;
    return(
      <>
        {count > 0 ? (
        <div>
            <div style={{display:'flex'}}>
                <img src={files.Thumb1} alt='Thumb1' style={{width:'50px',borderRadius:'5px'}}></img>
                <ul style={{listStyle:'none',paddingLeft:'15px'}}>
                    <li>Fall Limited Edition Sneakers</li>
                    <li>$125.00 x {count}= <label style={{fontWeight:'bold'}}>${totalPrice.toFixed(2)}</label></li>
                </ul>
            </div>
                <button style={{backgroundColor:'hsl(26, 100%, 55%)'
                        ,fontSize:'12px'
                        ,fontWeight:'700'
                        ,color:'black'
                        ,width:'250px'
                        ,height:'42px'
                        ,margin:'10px 0 0 10px'
                        ,borderRadius:'10px'}}
                        >Checkout
                </button>
                <button style={{backgroundColor:'white',marginLeft:'0'}}>
                    <img 
                    src={Icons.trashIcon} 
                    alt='trashIcon'
                    onClick={resetCount}
                    />
                </button>  
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