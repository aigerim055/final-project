import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import MealReducer from "./reduce/mealReducer";

const store = createStore(
    MealReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;