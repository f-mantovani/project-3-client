import {useState, useEffect} from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel, H2 } from '../../design.system/text.styling/styles'
import ModalHeader from '../Modals/ModalHeader'
import './SetPhotoInput.css'


const SetPhotoInput = ({ setChangePicModal }) => {

  const [file, setFile] = useState('')
  const [imageURL, setImageURL] = useState('')

  const handleChangeImg = (e) => {
      const file = e.target.files[0]
      const imageUrl = URL.createObjectURL(file)

      setFile(file)
      setImageURL(imageUrl)

  }


  return (
    <>
    <ModalHeader title="New photo" action={() => setChangePicModal(false)}/>

    <ColumnContainer userPhoto>

        <ButtonPlato uploadImgModal style={{display:'block', width:'120px', height:'30px'}} onClick={() => document.getElementById('getFile').click()}>Upload a new photo</ButtonPlato>

        <input type='file' id="getFile" style={{display:'none'}} onChange={handleChangeImg}></input>
        <div className="image-display">

            {imageURL
            ? <img  src={imageURL} alt='New user photography'/>
            : <H2 className="no-image-display">PREVIEW YOUR PHOTO</H2>}

        </div>

        <RowContainer modalButtons>
        <ButtonPlato saveModal>
          <ButtonLabel light>Save New Photo</ButtonLabel>
        </ButtonPlato>
        <ButtonLabel light onClick={() => {setChangePicModal(false); setFile(''); setImageURL('')}}>Cancel</ButtonLabel> 
      </RowContainer> 
    </ColumnContainer>
    </>
  )
}

export default SetPhotoInput