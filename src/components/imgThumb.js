export const ImgThumb=({image,onClick})=>{
    return(
        <div className='Images'>
            <img
            src={image}
            alt='thumb'
            style={{cursor:'pointer'}}
            className='imgStyle'
            onClick={onClick}/>
        </div>
    )
};