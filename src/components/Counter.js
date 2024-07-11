import React,{useContext} from 'react';
import { BoxCounter } from './boxCounter';
import { CountContext } from './CountContext';
import { ButtonCart } from './ButtonCart';

export function Counter() {
    const {add,setAdd,setCount}=useContext(CountContext);

    const updateCart=()=>{
        setCount(add);
        setAdd(0);
    };

    return (
        <div className='Counter'>
            <BoxCounter />
            <div>
                <ButtonCart
                    title='Add to Cart'
                    onClick={updateCart}
                />
            </div>
        </div>
    );
}
