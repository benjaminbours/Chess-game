import { EGameActions, IIncrementLapAction } from "./types";

export function incrementLap(): IIncrementLapAction {
    return {
        type: EGameActions.INCREMENT_LAP,
    };
}