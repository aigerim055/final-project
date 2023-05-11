import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import ContactsPage from "./pages/ContactsPage";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPopularMeals} from "./redux/action/mealAction";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMeals())
    }, [])


  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about-us'} element={<AboutUsPage/>}/>
                    <Route path={'/contacts'} element={<ContactsPage />}/>
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
