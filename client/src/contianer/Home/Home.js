import React from 'react'
import Navbar1 from '../../compoents/Navbar1'

import Header from '../../compoents/Header/Header'
import ProductHomePage from '../PRODUCT/ProductHomePage'
import { Route } from 'react-router-dom'
import CustomCarousel from '../../compoents/carousel/Carousel';
const Home = (props) => {
    return (
        <>
            <Navbar1/>a
            <div style={{ paddingTop: "50px" }}>
            <Header/>
        
            <CustomCarousel />
            
            </div>
            {props.children}
        </>
    )
}

export default Home



