import React from "react";
import {Routes, Route} from "react-router-dom";
import LinksPage from './pages/linksPage';
import CreatePage from './pages/createPage';
import DetailsPage from './pages/detailsPage';
import AuthPage from './pages/authPage';
import {Navigate} from "react-router";

export const userRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
                <Routes>
                    <Route path="/links" element={<LinksPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                    <Route path="*" element={<Navigate replace to="/create"/>}/>
                </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
    )
}
export default userRoutes;
