import React from 'react';
import Header from "../../components/header";
import Img from '../../components/images/main-img.png'
import './index.css'
import MealCard from "../../components/mealCard";
import Categories from "../../components/category";
import {useSelector} from "react-redux";


const HomePage = () => {


    const popular_meals = useSelector(state => state.meals).populary_meals
    // console.log(popular_meals)


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
            <section style={{
                height: '550px'
            }}>
                <div className="container">
                    <h2 className={'subtitle'}>Популярные блюда</h2>
                    <div className="row">
                        {
                            popular_meals?.map((el) => (
                                <div className={'col-3'} key={el.id}>
                                    <MealCard img={el.img} name={el.name} rating={el.rating} price={el.price}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Categories/>
        </>
    );
};

export default HomePage;