import React,{createContext,useState} from 'react';

const CountContext=createContext();

const CountProvider=({children})=>{
    const [count, setCount]=useState(0);
    const [add,setAdd]=useState(0);
    return(
        <CountContext.Provider value={{count, setCount,add,setAdd}}> 
            {children}
        </CountContext.Provider>
    );

};

export {CountContext,CountProvider};