import React from 'react';
import 'materialize-css';
import userRoutes from './routes';

function App() {
    const routes = userRoutes(false);
    return (
        <div className="container">
            {routes}
        </div>
    );
}

export default App;
