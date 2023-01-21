//For creating this redux/ state provider or to create a data link layer for to store all the items in the basket responsively and removing it responsively. For that first created a StateProvider.js file and pasted the stuff just like below you can see and then created the reducer.js file and simply copied and pasted the stuff. and at last just go to your index.js and wrap the <App/> component in <StateProvider initialState={initialState} reducer={reducer}>. and that's it we can now use it in our App.

import React, {createContext, useContext, useReducer} from "react";

//Prepares the DataLayer
export const StateContext =createContext();

//Wrap our app and provide the Data Layer
export const StateProvider =({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information form the data Layer
export const useStateValue=()=> useContext(StateContext);