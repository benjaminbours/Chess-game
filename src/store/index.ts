import { combineReducers, createStore } from "redux";
import { gridReducer } from "./grid/reducer";

export const rootReducer = combineReducers({
    grid: gridReducer,
});

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;