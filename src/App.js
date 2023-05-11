import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import ContactsPage from "./pages/ContactsPage";

function App() {
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
