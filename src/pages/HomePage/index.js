import React from 'react';
import Header from "../../components/header";
import Img from '../../components/images/main-img.png'
import './index.css'

const HomePage = () => {
    return (
        <>
            <Header/>
            <section className="main-section">
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