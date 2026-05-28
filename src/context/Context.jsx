import {createContext} from 'react';
import  main  from '../config/gemini';

export const AppContext = createContext();

const ContextProvider = (props) => {

    const onSent = async (prompt) => {
         main(prompt);
    }
    
   onSent("What is react js?"); 

    const contextValue = {
    
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );

}

export default ContextProvider;