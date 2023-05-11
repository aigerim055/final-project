import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import ContactsPage from "./pages/ContactsPage";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCategories, getPopularMeals} from "./redux/action/mealAction";
import MealPage from "./pages/MealPage";
import BasketPage from "./pages/BasketPage";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMeals())
    }, [])

    // useEffect(() => {
    //     dispatch(getCategories())
    // })



  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about-us'} element={<AboutUsPage/>}/>
                    <Route path={'/contacts'} element={<ContactsPage />}/>
                    <Route path={'/meal-page'} element={<MealPage/>}/>
                    <Route path={'/basket'} element={<BasketPage/>}/>

                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
