import React from 'react';
import './index.css'
import {CustomRating} from "../rating";

const MealCard = ({img, rating, name, price}) => {
    return (
        <div >
            <div className="meal-card-wrapper">
                <div className="meal-card">
                    <img src={img} alt=""/>
                    <h6>{name}</h6>
                    <CustomRating rating={rating}/>
                    <h5>{price} сом</h5>

                </div>
                <button>узнать подробнее</button>
            </div>
        </div>
    );
};

export default MealCard;