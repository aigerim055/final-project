import React from 'react';
import './index.css'
import Header from "../header";
import {Link} from "react-router-dom";

const MenuPage= () => {
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
                        <h2>затраки</h2>
                    </div>
            </div>

        </>
    );
};

export default MenuPage;