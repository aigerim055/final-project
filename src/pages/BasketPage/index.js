import React from 'react';
import './index.css'
import Header from "../../components/header";
import MealIMG from './images/meal.png'
import PlusIMG from './images/plus.svg'
import MinusIMG from './images/minus.svg'

const BasketPage = () => {
    return (
           <>
               <div className={'PageBackground'}>
                   <Header/>
               </div>
                   <div className="container">
                       <div className="basket-border">
                           <h2> Корзина </h2>
                           <div className="in-basket-border">
                               <p>Будет доставлен через : <b>1 час </b> <br/>
                                   Количество товара: <b> 2 </b>
                               </p>
                               <div className="price">
                                   <p> Итоги:</p>
                                   <p className={'text-danger'}> 576 сом</p>
                               </div>
                           </div>
                           <div className="order-info">
                               <img src={MealIMG} alt="meal-image"/>
                               <div className="info-meal">
                                   <h3> спагетти с курицей и с грибами </h3>
                                   <p><b>Описание:</b> Паста в сливочном соусе – рецепт изысканного итальянского блюда с нежным
                                       молочным привкусом и тонким ароматом специй.</p>
                               </div>
                               <div className="info-price">
                                   <h3> 288с </h3>
                                   <div className="amount">
                                       <a href="#"><img src={PlusIMG} alt=""/></a>
                                       <p>1</p>
                                       <a href="#"> <img src={MinusIMG} alt="" /></a>
                                   </div>
                               </div>
                           </div>
                           <div className="order-info">
                               <img src={MealIMG} alt="meal-image"/>
                               <div className="info-meal">
                                   <h3> спагетти с курицей </h3>
                                   <p><b>Описание:</b> Паста в сливочном соусе – рецепт изысканного итальянского блюда с нежным
                                       молочным привкусом и тонким ароматом специй.</p>
                               </div>
                               <div className="info-price">
                                   <h3> 288с </h3>
                                   <div className="amount">
                                       <a href="#"><img src={PlusIMG} alt=""/></a>
                                       <p>1</p>
                                       <a href="#"> <img src={MinusIMG} alt="" /></a>
                                   </div>
                               </div>
                           </div>
                           <div className="order">
                               <h3> 576 сом</h3>
                               <a href="#"><button>Заказать</button></a>
                           </div>
                       </div>
                   </div>
           </>
    );
};

export default BasketPage;