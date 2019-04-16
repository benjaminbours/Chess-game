
export interface IGameState {
    lap: number;
}

export enum EGameActions {
    INCREMENT_LAP = "INCREMENT_LAP"
}

export interface IIncrementLapAction {
    type: EGameActions.INCREMENT_LAP;
}

export type GameActionTypes = IIncrementLapAction;