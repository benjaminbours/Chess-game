import React, { useState, useCallback } from 'react';
import { Piece } from "./Piece";
import { IPieceData } from "../store/grid/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setSelectedPiece } from '../store/grid/actions';
import { AppState } from "../store";
import { equals } from "ramda";

interface IStateProps {
    selectedPiece: IPieceData | undefined;
}

interface IDispatchProps {
    setSelectedPiece: typeof setSelectedPiece;
    dispatch: Dispatch;
}

interface IOwnProps {
    x: string;
    y: number;
    color: string;
    piece: IPieceData | undefined;
}

type Props = IStateProps & IDispatchProps & IOwnProps;


// TODO: lift the management of the color to the parent component
export function Case({ x, y, color, piece, setSelectedPiece, dispatch, selectedPiece }: Props) {
    const handleClick = useCallback(() => {
        if (piece && equals(piece,selectedPiece)) {
            dispatch(setSelectedPiece(undefined));
        } else if (piece) {
            dispatch(setSelectedPiece(piece));
        }
        return;
    }, [selectedPiece, piece]);

    let c = color;

    if (selectedPiece && x === selectedPiece.x && y === selectedPiece.y) {
        c = "green";
    }

    return (
        <div className={`case case--${c}`} onClick={handleClick}>
            {/* helper */}
            {`${x} ${y}`}
            {piece &&
                <Piece color={piece.color} type={piece.type} x={piece.x} y={piece.y} />
            }
        </div>
    );
}

function mapStateToProps(state: AppState): IStateProps {
    return {
        selectedPiece: state.grid.selectedPiece,
    };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
    return {
        dispatch,
        setSelectedPiece,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Case);