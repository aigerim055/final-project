import React from 'react';
import './index.css'
import {useSelector} from "react-redux";
import CategoryItem from "../categoryItem";
import Img1 from './images/img_1.png'
import Img2 from './images/img_2.png'
import Img3 from './images/img_3.png'
import Img4 from './images/img_4.png'
import Img5 from './images/img_5.png'
import Img6 from './images/img_6.png'
import Img7 from './images/img_7.png'
import Img8 from './images/img_8.png'
import Img9 from './images/img_9.png'

const Categories = () => {

    return (
        <section>
            <div className="container">
                <h2 className={'subtitle'}>Категории блюд</h2>
                <div className="row">
                    <div className={'col-4'}>
                        <CategoryItem name={'завтраки'} img={Img1}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'супы'} img={Img2}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Горячие блюдо'} img={Img3}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Паста и Ризотто'} img={Img4}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Закуски и гарниры'} img={Img5}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Детское меню'} img={Img6}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Салаты'} img={Img7}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Соусы'} img={Img8}/>
                    </div>
                    <div className={'col-4'}>
                        <CategoryItem name={'Напитки'} img={Img9}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;