import { Icons } from '../utils/icons';
import { CountContext } from './CountContext';
import { useContext } from 'react';
import { ButtonCounter } from './ButtonCounter';


export const ButtonCounterMinus=()=>{
    const { add, setAdd } = useContext(CountContext);
    return(
        <ButtonCounter
        arialabel='Minus'
        operation={Icons.Minus}
        onClick={() => {
            setAdd(Math.max(add - 1, 0));
        }}
        />
    )
}