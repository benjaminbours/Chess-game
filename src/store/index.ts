import { combineReducers, createStore } from "redux";
import { piecesReducer } from "./pieces/reducer";
import { gameReducer } from "./game/reducer";
import { gridReducer } from "./grid/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
    pieces: piecesReducer,
    game: gameReducer,
    grid: gridReducer
});

export const store = createStore(rootReducer, composeWithDevTools());

export type AppState = ReturnType<typeof rootReducer>;