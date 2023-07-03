import React from 'react'
import "../styles/Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
                <form className='search'>
                    <input type='text'></input>
                </form>
            </div>
        </div>
    )
}

export default Header