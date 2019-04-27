export type CoordinateX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type CoordinateY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export interface IBox {
    color: string;
    x: CoordinateX;
    y: CoordinateY;
}

export type Boxes = {
    [K in CoordinateY]: IBox;
};

export type BoxColumn = {
    [K in CoordinateX]: Boxes;
};

export interface IGridState {
    boxes: BoxColumn;
}

export enum EGridActions {

    // INCREMENT_LAP = "INCREMENT_LAP"
}

// export interface IIncrementLapAction {
//     type: EGameActions.INCREMENT_LAP;
// }

// export type GameActionTypes = IIncrementLapAction;