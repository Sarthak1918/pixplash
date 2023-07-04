import React, { useState } from 'react'
import "../styles/Header.css"
import searchImage from "./search.png"

function Header({setSearchTerm}) {
    

    return (
        <div className='header'>
            <div className='container'>
                <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
                <form className='search' onSubmit={(e)=>{
                    e.preventDefault();
                    setSearchTerm(e.target[0].value)
                }
                }
                    >
                    <div className='search-box'>
                        <input type='text' placeholder='Search high resolution images..'></input>
                        <button><img src={searchImage} alt='searchImage'></img></button>
                    </div>
                </form>
                <div className='trending'>
                    <span className='trendingText'>Trending:</span><span>beach, dark, nature, flower, forest</span>
                </div>
            </div>
        </div>
    )
}

export default Header