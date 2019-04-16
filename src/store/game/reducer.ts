import { IGameState, GameActionTypes, EGameActions } from "./types";

export const initialState: IGameState = {
    lap: 0,
};

export function gameReducer(state = initialState, action: GameActionTypes): IGameState {
    switch (action.type) {
        case EGameActions.INCREMENT_LAP:
            return {
                lap: state.lap + 1,
            }
        default:
            return state;
    }
}