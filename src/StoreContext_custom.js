import React from 'react';
import App from "./App";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.storage}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContext;