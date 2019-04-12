import React, { ReactNode } from 'react';
import { isEven } from "../utils";
import "./Grid.css";
import { Piece } from "./pieces";
import { IPieceData } from "../types";

enum Colors {
    white = "white",
    black = "black",
}

const coordinateX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const coordinateY = [8, 7, 6, 5, 4, 3, 2, 1];

interface ICaseProps {
    x: string;
    y: number;
    color: string;
    piece: IPieceData | undefined;
}

function Case({ x, y, color, piece }: ICaseProps) {
    return (
        <div className={`case case--${color}`}>
            {`${x} ${y}`}
            {piece &&
                <Piece color={piece.color} type={piece.type} />
            }
        </div>
    );
}

interface IRowProps {
    children: ReactNode;
}

function Row({ children }: IRowProps) {
    return (
        <div className="row">
            {children}
        </div>
    );
}

interface IGridProps {
    state: IPieceData[];
}

export function Grid({ state }: IGridProps) {
    console.log(state);
    return (
        <div className="grid">
            {coordinateY.map((y, i) => {
                const isYEven = isEven(i);
                return (
                    <Row key={y}>
                        {coordinateX.map((x, j) => {
                            const isXEven = isEven(j + 1);
                            let color;
                            if (isXEven && !isYEven || !isXEven && isYEven) {
                                color = Colors.white;
                            } else {
                                color = Colors.black;
                            }
                            const piece = state.find((item) => item.x === x && item.y === y);
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