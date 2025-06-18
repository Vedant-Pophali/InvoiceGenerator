import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar.jsx";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MainPage from "./pages/MainPage.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import UserSyncHandler from "./components/UserSyncHandler.jsx";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const App = () => {
    return (
        <BrowserRouter>
            <UserSyncHandler />
            <MenuBar />
            <Toaster position="top-right" reverseOrder={false} />

            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />

                <Route path="/generate" element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                } />

                <Route path="/preview" element={
                    <ProtectedRoute>
                        <PreviewPage />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
};

const ProtectedRoute = ({ children }) => {
    return (
        <>
            <SignedIn>
                {children}
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
};

export default App;