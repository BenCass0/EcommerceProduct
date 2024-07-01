import './App.css';
import React from 'react';
import { MyAppBar,} from './components/MyAppBar';
import {Men,Women,Collections,About,Contact} from './utils/index';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';

export function App() {

  return (
    <div className="App">
      <MyAppBar/>
      <Routes>
        <Route path='/' 
        element={<Home/>}></Route>
        <Route path='/Collections' element={<Collections/>}>
        </Route>
        <Route path='/Men' element={<Men/>}>
        </Route>
        <Route path='/Women' element={<Women/>}>
        </Route>
        <Route path='/About' element={<About/>}>
        </Route>
        <Route path='/Contact' element={<Contact/>}>
        </Route>
      </Routes>
    </div>
  );
}
export default App;