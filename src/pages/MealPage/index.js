import React from 'react';
import './index.css'
import ChickenIMG from './images/chicken.png'
import GribyIMG from './images/griby.png'
import KrevetkiIMG from './images/krevetki.png'
import MainMealIMG from './images/Meal.png'
import ShpinatIMG from './images/shpinat.png'
import Header from "../../components/header";

const MealPage = () => {
    return (
        <>
            <div className={'page_background'}>
                <Header />
            </div>
            <div className="container my-5">
                <div className="row align-items-start">
                    <div className="col-6">
                        <div className="meal-image">
                            <img src={MainMealIMG} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="meal-description">
                            <h2 className={'text-black'}> Спагетти </h2>
                            <p className={'my-lg-5'}> Паста в сливочном соусе – рецепт изысканного итальянского блюда с
                                нежным молочным привкусом и тонким ароматом специй. </p>
                            <h3>Дабавки </h3>
                            <div className="ingredients">
                                <div className="background-ingredients">
                                    <img src={ShpinatIMG} alt=""/>
                                    <p>шпинат</p>
                                </div>
                                <div className="background-ingredients">
                                    <img src={KrevetkiIMG} alt=""/>
                                    <p>креветки</p>
                                </div>
                                <div className="background-ingredients">
                                    <img src={GribyIMG} alt=""/>
                                    <p>грибы</p>
                                </div>
                                <div className="background-ingredients">
                                    <img src={ChickenIMG} alt=""/>
                                    <p>курица</p>
                                </div>
                            </div>
                            <div className="price_button">
                                <h3> 300 сом </h3>
                                <a href="#">
                                    <button>
                                        Добавить в корзину
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default MealPage;