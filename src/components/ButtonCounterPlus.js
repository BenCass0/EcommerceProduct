import { Icons } from '../utils/icons';
import { CountContext } from './CountContext';
import { useContext } from 'react';
import { ButtonCounter } from './ButtonCounter';

export const ButtonCounterPlus=()=>{
    const { add, setAdd } = useContext(CountContext);
    return(
        <ButtonCounter
            arialabel='Plus'
            operation={Icons.Plus}
            onClick={() => {
                setAdd(add + 1);}}
                />
    )
}