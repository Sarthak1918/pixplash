import React from 'react'
import '../styles/Image.css'
import { ReactComponent as DownloadSvg } from '../svgs/download.svg'
function Image({ src, author, ratio }) {
    return (
        <li className='image' style={{aspectRatio:ratio,backgroundImage:`url(${src}?auto=compress&cs=tinysrgb&h=10)`}}>
            <img src={`${src}&lazy=load`} alt='img' loading='lazy' onLoad={(e) => (e.target.style.opacity = "1")}></img>
            <div className='author-download'>
                <p>{author}</p>
                <button className='download-btn'><DownloadSvg width="18px" height="18px"/></button>
            </div>
        </li>
    )
}

export default Image