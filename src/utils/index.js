export const myAppBarIcons={
    Logo: require('./logo.svg').default,
    ProfilePicture: require('./image-avatar.png'),
    ShoppingCart: require('./icon-cart.svg').default,
  }

export const counterIcons={
    Minus: require('./icon-minus.svg').default,
    Plus: require('./icon-plus.svg').default,
}

export const imgDialogIcons={
    Close: require('./icon-close.svg').default,
    Previous: require('./icon-previous.svg').default,
    Next: require('./icon-next.svg').default,
}

export const files={
    Thumb1: require('./image-product-1-thumbnail.jpg'),
    Thumb2: require('./image-product-2-thumbnail.jpg'),
    Thumb3: require('./image-product-3-thumbnail.jpg'),
    Thumb4: require('./image-product-4-thumbnail.jpg'),
    Img1: require('./image-product-1.jpg'),
    Img2: require('./image-product-2.jpg'),
    Img3: require('./image-product-3.jpg'),
    Img4: require('./image-product-4.jpg'),
}

export const images = [
    { src: files.Img1, title: "Image 1", description: 'Image1' },
    { src: files.Img2, title: "Image 2", description: 'Image2' },
    { src: files.Img3, title: "Image 3", description: 'Image3' },
    { src: files.Img4, title: "Image 4", description: 'Image4' }
  ];

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