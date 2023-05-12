import React from 'react';
import './index.css'
import {CustomRating} from "../rating";
import {useNavigate} from "react-router-dom";

const MealCard = ({img, rating, name, price, id}) => {

    const navigate = useNavigate()
    return (
        <div >
            <div className="meal-card-wrapper">
                <div className="meal-card">
                    <img src={img} alt=""/>
                    <h6>{name}</h6>
                    <CustomRating rating={rating}/>
                    <h5>{price} сом</h5>

                </div>
                <button
                    onClick={() => navigate(`/meal-page/${id}`)}
                >
                    узнать подробнее
                </button>
            </div>
        </div>
    );
};

export default MealCard;