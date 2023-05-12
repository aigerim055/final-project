import React from 'react';
import './index.css'
import Header from "../header";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import MealCard from "../mealCard";

const MenuPage= () => {
    const breakfasts = useSelector(state => state.breakfasts)
    return (
        <>
            <div className="menu-page">
                    <div className="container">
                        <Header />
                        <div className="categories">
                            <Link to={'/menu'}><button className={'activ'}>Завтраки</button></Link>
                            <Link to={'/soup'}><button>Супы</button></Link>
                            <Link to={'/hot-dish'}><button>Горячие блюдо</button></Link>
                            <Link to={'/pasta-and-risotto'}><button>Паста и Ризотто</button></Link>
                            <Link to={'/snacks-and-side-dishes'}><button>Закуски и гарниры</button></Link>
                            <Link to={'/children-menu'}><button>Детское меню</button></Link>
                            <Link to={'/salads'}><button>Салаты</button></Link>
                            <Link to={'/sauces'}><button>Соусы</button></Link>
                        </div>
                        <div className="line"></div>
                        <h2>завтраки</h2>
                        <div className="row">
                            {
                                breakfasts.map((el) => (
                                    <div className={'col-3'} key={el?.id}>
                                        <MealCard img={el?.img} name={el?.name} rating={el?.rating} price={el?.price}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            </div>

        </>
    );
};

export default MenuPage;