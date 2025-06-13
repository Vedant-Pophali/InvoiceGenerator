import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar.jsx";
import {Toaster} from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MainPage from "./pages/MainPage.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <MenuBar />
                <Toaster/>
                    <Routes>
                        <Route path="/" element={<LandingPage /> }/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/generate" element={<MainPage />}/>
                        <Route path="/preview" element={<PreviewPage />}/>
                    </Routes>
        </BrowserRouter>
    )
}
export default App;