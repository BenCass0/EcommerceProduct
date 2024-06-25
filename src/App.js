import './App.css';
import React,{useState} from 'react';
import { MyAppBar,Counter } from './Components';
import {ImageDialog} from './Components';
import {files,ImgThumb,Men,Women,Collections,About,Contact} from './utils/index';
import { Route,Routes } from 'react-router-dom';


const images=[
  {src:files.Img1,title:"Image 1",description:'Image1'},
  {src:files.Img2,title:"Image 2",description:'Image2'},
  {src:files.Img3,title:"Image 3",description:'Image3'},
  {src:files.Img4,title:"Image 4",description:'Image4'}
];

export function App() {

  const [open, setOpen]=useState(false);
  const [currentImage, setCurrentImage]=useState(0);

  const Home= ({images, handleClickOpen,open,handleClose,handlePrev,handleNext,currentImage})=>(
    <div className='Container'>
        <div className='Products'>
          <div className='MainProduct'>
            <img 
            src={files.Img1} 
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
            <ImgThumb
            image={files.Thumb1}
            onClick={()=>handleClickOpen(0)}
            >
            </ImgThumb>
            <ImgThumb
            image={files.Thumb2}
            onClick={()=>handleClickOpen(1)}
            >
            </ImgThumb>
            <ImgThumb
            image={files.Thumb3}
            onClick={()=>handleClickOpen(2)}
            >
            </ImgThumb>
            <ImgThumb
            image={files.Thumb4}
            onClick={()=>handleClickOpen(3)}
            >
            </ImgThumb>
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
  );

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
      <Routes>
        <Route path='/' 
        element={<Home images={images} 
        handleClickOpen={handleClickOpen}
        open={open}
        handleClose={handleClose}
        handlePrev={handlePrev}
        handleNext={handleNext} 
        currentImage={currentImage}
        />}></Route>
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