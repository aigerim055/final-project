import React from 'react';
import './index.css'


const CategoryItem = ({img, name}) => {
    return (
        <div className={'category-item'}>
            <img src={img} alt=""/>
            <h4>{name}</h4>
        </div>
    );
};

export default Soups;