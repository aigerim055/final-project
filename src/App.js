import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";

function App() {
  return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about-us'} element={<AboutUsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
