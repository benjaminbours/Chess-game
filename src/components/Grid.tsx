import React from 'react';
import { isEven } from "../utils";
import Case from "./Case";
import { Row } from "./Row";
import { connect } from "react-redux";
import { AppState } from "../store";
import { IGridState } from '../store/grid/types';
import "./Grid.css";

enum Colors {
    white = "white",
    black = "black",
}

const coordinateX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const coordinateY = [8, 7, 6, 5, 4, 3, 2, 1];

interface IStateProps {
    grid: IGridState;
}

type Props = IStateProps;

// TODO: display the possible direct with color on the grid
export function Grid({ grid }: Props) {
    const { pieces, possibleTarget } = grid;

    console.log(possibleTarget);

    return (
        <div className="grid">
            {coordinateY.map((y, i) => {
                const isYEven = isEven(i);
                return (
                    <Row key={y}>
                        {coordinateX.map((x, j) => {
                            const isXEven = isEven(j + 1);
                            const isWhite = isXEven && !isYEven || !isXEven && isYEven;
                            const color = isWhite ? Colors.white : Colors.black;
                            const piece = pieces.find((item) => item.x === x && item.y === y);
                            return (
                                <Case
                                    key={`${x}${y}`}
                                    x={x}
                                    y={y}
                                    color={color}
                                    piece={piece}
                                />
                            );
                        })}
                    </Row>
                );
            })}
        </div>
    );
}

function mapStateToProps(state: AppState): IStateProps {
    return {
        grid: state.grid,
    };
}

export default connect(mapStateToProps)(Grid);