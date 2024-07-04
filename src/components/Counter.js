import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import { BoxCounter } from './boxCounter';
import { CountContext } from './CountContext';
export function Counter() {
    const {add,setCount}=useContext(CountContext);

    const updateCart=()=>{
        setCount(add);
    };

    return (
        <div className='Counter'>
            <BoxCounter />
            <div>
                <Button
                    style={{
                        backgroundColor: 'hsl(26, 100%, 55%)',
                        textTransform: 'none',
                        fontSize: '12px',
                        fontWeight: '700',
                        color: 'black',
                        width: '180px',
                        height: '42px',
                        marginLeft: '10px',
                        borderRadius: '10px'
                    }}
                    onClick={updateCart}
                >
                    Add To Cart
                </Button>
            </div>
        </div>
    );
}
