import React, { useContext } from 'react'
import Search from './Search';
import Movies from './Movies';
const Home = () => {
    return ( 
        <>
        <div className="search-div">
        <Search/>
        </div>
        
        <Movies/>
        </>
    )
}

export default Home