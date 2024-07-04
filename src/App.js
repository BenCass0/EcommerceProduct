import './App.css';
import React from 'react';
import { MyAppBar,} from './components/MyAppBar';
import {Men,Women,Collections,About,Contact} from './utils/index';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';

export const userContext=React.createContext();

export function App() {
  return (
    <div className="App">
      <MyAppBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Collections' element={<Collections/>}/>
          <Route path='/Men' element={<Men/>}/>
          <Route path='/Women' element={<Women/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;