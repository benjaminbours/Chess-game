import React from 'react';
import { Piece } from "./Piece";
import { IPieceData } from "../store/pieces/types";

interface IOwnProps {
    className: string;
    x: string;
    y: number;
    piece: IPieceData | undefined;
    handleClick: () => void;
}

type Props = IOwnProps;

export function Box({ x, y, piece, className, handleClick }: Props) {
    return (
        <div className={className} onClick={handleClick}>
            {/* helper */}
            {`${x} ${y}`}
            {piece &&
                <Piece {...piece} />
            }
        </div>
    );
}
