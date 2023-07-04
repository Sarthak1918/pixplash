import React from 'react'
import "../styles/LightBox.css"
import download from '../download'


function LightBox({ selectedImage, setSelectedImage }) {

    return (
        <div className='LightBox-container'>
            <div className='LightBox'>
                <div className='author-download-lightbox'>
                    <div>
                        <span className='closeLightbox' onClick={() => { setSelectedImage(null) }}>X</span>
                        <span>{selectedImage.photographer}</span>
                    </div>
                    <button onClick={()=>{download(selectedImage)}}>Free download</button>
                </div>
                <div className='image-container'>
                    <img src={selectedImage.src.large2x} alt="fsd"></img>
                </div>
            </div>
        </div>

    )
}

export default LightBox
