import { isEven } from "../../utils";
import { IGridState, EGridActions, IBox, Boxes, BoxColumn, CoordinateY, CoordinateX } from "./types";
import { Colors } from "../../utils";

const coordinateX: CoordinateX[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
const coordinateY: CoordinateY[] = [1, 2, 3, 4, 5, 6, 7, 8];

function createInitialGrid(): BoxColumn {
    return coordinateX.reduce<BoxColumn>((xObj, x, i) => {
        const isXEven = isEven(i + 1);
        xObj[x] = coordinateY.reduce<Boxes>((yObj, y, j) => {
            const isYEven = isEven(y + 1);
            const isWhite = isXEven && !isYEven || !isXEven && isYEven;
            const color = isWhite ? Colors.white : Colors.black;
            yObj[y] = { color, x, y };
            return yObj;
        }, {} as Boxes);
        return xObj;
    }, {} as BoxColumn);
}

export const initialState: IGridState = {
    boxes: createInitialGrid(),
};

export function gridReducer(state = initialState, action: any): IGridState {
    switch (action.types) {
        // case value:

        //     return state;
        default:
            return state;
    }
}