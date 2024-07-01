import { Dialog,DialogContent,IconButton,Card,CardMedia} from "@mui/material"
import { imgDialogIcons } from "../utils"

export const ImageDialog=({open,handleClose,handlePrev,handleNext,currentImage})=>{  
    return(
      <Dialog open={open} onClose={handleClose} maxWidth='300px'>
        <DialogContent style={{position:'relative',padding:0}}>
          <IconButton
          aria-label='close'
          onClick={handleClose}
          style={{position:'absolute',marginLeft:'435px',width:'40px',height:'40px'}}>
            <img src={imgDialogIcons.Close} alt='closeIcon'></img>
          </IconButton>
          <IconButton
          aria-label='previous'
          onClick={handlePrev}
          style={{position:'absolute',marginTop:'220px',width:'40px',height:'40px',backgroundColor:'white'}}>
            <img src={imgDialogIcons.Previous} alt='previousIcon'></img>
          </IconButton>
          <IconButton
          aria-label='next'
          onClick={handleNext}
          style={{position:'absolute',margin:'220px 0 0 440px',width:'40px',height:'40px',backgroundColor:'white'}}>
            <img src={imgDialogIcons.Next} alt='nextIcon'></img>
          </IconButton>
          <Card>
            <CardMedia
            component='img'
            height="480"
            image={currentImage.src}
            sx={{objectFit:'cover',width:'480px'}}/>
          </Card>
        </DialogContent>
      </Dialog>
    )
  }