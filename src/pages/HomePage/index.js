import React, {useEffect} from 'react';
import Header from "../../components/header";
import Img from '../../components/images/main-img.png'
import './index.css'
import {useSelector} from "react-redux";


const HomePage = () => {


    const popular_meals = useSelector(state => state.popular_meals)
    console.log(popular_meals)

    return (
        <>

            <section className="main-section">
                <Header/>
                <div className="container">
                    <h1>МАКАРОННАЯ</h1>
                    <div className="main-ingredients">
                        <img src={Img} alt=""/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;