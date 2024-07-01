import { files,images} from "../utils";
import {Counter} from "./Counter";
import { ImageDialog } from "./ImageDialog";
import { ImgThumb } from "./imgThumb";
import React,{useState} from 'react';

export function Home(){
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
      
    return(
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
            currentImage={images[currentImage]}/>
          </div>
          <div className='ImageProducts'>
            <ImgThumb
            image={files.Thumb1}
            onClick={()=>handleClickOpen(0)}
            />
            <ImgThumb
            image={files.Thumb2}
            onClick={()=>handleClickOpen(1)}
            />
            <ImgThumb
            image={files.Thumb3}
            onClick={()=>handleClickOpen(2)}
            />
            <ImgThumb
            image={files.Thumb4}
            onClick={()=>handleClickOpen(3)}
            />
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
    )
}