import { combineReducers, createStore } from "redux";
import { gridReducer } from "./grid/reducer";
import { gameReducer } from "./game/reducer";

export const rootReducer = combineReducers({
    grid: gridReducer,
    game: gameReducer,
});

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;