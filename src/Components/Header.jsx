import React from 'react'
import "../styles/Header.css"
import searchImage from "./search.png"
import logo from "../pixplash-logo.png"

function Header({setSearchTerm}) {
    

    return (
        <div className='header'>
            <div className='container'>
            <img class="logo" src={logo} alt="logo" />
                <h1>Unleash Your Creative Vision with Pixplash,Where Images Come to Life!</h1>
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