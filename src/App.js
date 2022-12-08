import React from 'react';
import 'materialize-css';
import userRoutes from './routes';
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/navbar";

function App() {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = userRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            {isAuthenticated ? <Navbar/> : null}
            <div className="container">
                {routes}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
