import './App.css';
import React,{useState} from 'react';
import Thumb1 from './image-product-1-thumbnail.jpg';
import Thumb2 from './image-product-2-thumbnail.jpg';
import Thumb3 from './image-product-3-thumbnail.jpg';
import Thumb4 from './image-product-4-thumbnail.jpg';
import { MyAppBar,Counter } from './Components';
import {ImageDialog} from './Components';
import Img1 from'./image-product-1.jpg';
import Img2 from'./image-product-2.jpg';
import Img3 from'./image-product-3.jpg';
import Img4 from'./image-product-4.jpg';

const images=[
  {src:Img1,title:"Image 1",description:'Image1'},
  {src:Img2,title:"Image 2",description:'Image2'},
  {src:Img3,title:"Image 3",description:'Image3'},
  {src:Img4,title:"Image 4",description:'Image4'}
];

function App() {

  const [open, setOpen]=useState(false);
  const [currentImage, setCurrentImage]=useState(0);

  const handleClickOpen=(index)=>{
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose=()=>{
    setOpen(false);
  };

  const handlePrev=()=>{
    setCurrentImage((prevIndex)=>(prevIndex===0 ? images.length-1: prevIndex-1));
  };

  const handleNext=()=>{
    setCurrentImage((prevIndex)=>(prevIndex===images.length-1 ? 0 : prevIndex+1));
  };

  return (
    <div className="App">
      <MyAppBar/>
      <div className='Container'>
        <div className='Products'>
          <div className='MainProduct'>
            <img 
            src={Img1} 
            alt="Image1" 
            style={{cursor:'pointer'}}
            onClick={()=>handleClickOpen(0)}
            />
            <ImageDialog
            open={open}
            handleClose={handleClose}
            handlePrev={handlePrev}
            handleNext={handleNext}
            currentImage={images[currentImage]}
            ></ImageDialog>
          </div>
          <div className='ImageProducts'>
          <div className='Images'>
            <img 
            src={Thumb1} 
            alt='thumb' 
            style={{cursor:'pointer'}}
            onClick={()=>handleClickOpen(0)}
            className='imgStyle'
            ></img>
          </div>
          <div className='Images'>
            <img src={Thumb2} 
            alt='thumb' 
            style={{cursor:'pointer'}}
            onClick={()=>handleClickOpen(1)}
            className='imgStyle'
            ></img>
          </div>
          <div className='Images'>
            <img src={Thumb3} 
            alt='thumb' 
            style={{cursor:'pointer'}}
            onClick={()=>handleClickOpen(2)}
            className='imgStyle'
            ></img>
          </div>
          <div className='Images'>
            <img src={Thumb4} 
            alt='thumb' 
            style={{cursor:'pointer'}}
            onClick={()=>handleClickOpen(3)}
            className='imgStyle'
            ></img>
          </div>
          </div>
        </div>
        <div className='Text'>
          <h4>SNEAKER COMPANY</h4>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear
            companion. Featuring a durable rubber outer sole, they'll
            withstand everything the weather can offer.
          </p>
          <h2>$125.00 <button>50%</button></h2>
          <p className='priceDiscount'>$250.00</p>
          <div>
          <Counter/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;