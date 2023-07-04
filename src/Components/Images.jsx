import React from 'react'
import Image from './Image'
import '../styles/Images.css'


function Images({ images,setSelectedImage }) {



    return (
        <div className='images-container'>
            <ul className='images'>
                {images.map((image) => <Image image={image} key={image.id} src={image.src.large2x} author={image.photographer} ratio={`${image.width} / ${image.height}`} onClick={()=>{setSelectedImage(image)}}/>)}
            </ul>

        </div>
    )
}

export default Images