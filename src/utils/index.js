export const files={
    // Components App.js
    Thumb1: require('./image-product-1-thumbnail.jpg'),
    Thumb2: require('./image-product-2-thumbnail.jpg'),
    Thumb3: require('./image-product-3-thumbnail.jpg'),
    Thumb4: require('./image-product-4-thumbnail.jpg'),
    Img1: require('./image-product-1.jpg'),
    Img2: require('./image-product-2.jpg'),
    Img3: require('./image-product-3.jpg'),
    Img4: require('./image-product-4.jpg'),
}
export const ImgThumb=({image,onClick})=>{
    return(
        <div className='Images'>
            <img
            src={image}
            alt='thumb'
            style={{cursor:'pointer'}}
            className='imgStyle'
            onClick={onClick}
            ></img>
        </div>
    )
};

export const Collections=()=> (
    <h1 style={{marginTop:'8vmax'}}>Collections</h1>
    );
export const Men=()=> (
    <h1 style={{marginTop:'8vmax'}}>Men</h1>
    );
export const Women=()=> (
    <h1 style={{marginTop:'8vmax'}}>Women</h1>
    );
export const About=()=> (
    <h1 style={{marginTop:'8vmax'}}>About</h1>
    );
export const Contact=()=> ( 
    <h1 style={{marginTop:'8vmax'}}>Contact</h1>
    );