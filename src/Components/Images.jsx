import React, { useState } from 'react'
import Image from './Image'
import '../styles/Images.css'


function Images({ images }) {



    return (
        <div className='images-container'>
            <ul className='images'>
                {images.map((image) => <Image key={image.id} src={image.src.large2x} author={image.photographer} ratio={`${image.width} / ${image.height}`} />)}
            </ul>

        </div>
    )
}

export default Images