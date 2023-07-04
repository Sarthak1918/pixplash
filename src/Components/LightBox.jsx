import React from 'react'
import "../styles/LightBox.css"


function LightBox() {
    return (
        <div className='LightBox-container'>
            <div className='LightBox'>
                <div className='author-download-lightbox'>
                    <span>author</span>
                    <button>Free download</button>
                </div>
                <div className='image-container'>
                    <div className='image'> 
                        <img src="https://images.pexels.com/photos/17438662/pexels-photo-17438662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="fsd"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LightBox
