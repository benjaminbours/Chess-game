import "./Grid.css";
import React from 'react';
import { Box } from "./Box";
import { Row } from "./Row";
import { connect } from "react-redux";
import { AppState } from "../store";
import { IPiecesState } from '../store/pieces/types';
import classNames from "classnames";
import { Dispatch } from "redux";
import { setSelectedPiece, movePiece } from '../store/pieces/actions';
import { incrementLap } from '../store/game/actions';
import { equals } from "ramda";
import { Colors } from "../utils";
import { IGameState } from '../store/game/types';
import { BoxColumn } from "../store/grid/types";

interface IStateProps {
    piecesState: IPiecesState;
    game: IGameState;
    boxes: BoxColumn;
}

interface IDispatchProps {
    setSelectedPiece: typeof setSelectedPiece;
    incrementLap: typeof incrementLap;
    movePiece: typeof movePiece;
    dispatch: Dispatch;
}

type Props = IStateProps & IDispatchProps;

export function Grid({ piecesState, dispatch, setSelectedPiece, boxes, movePiece }: Props) {
    const { pieces, possibleTarget, selectedPiece } = piecesState;

    console.log(boxes);

    return (
        <div className="grid">
            {Object.values(boxes).map((item) => {
                
            })}
            {/* {coordinateY.map((y, i) => {
                const isYEven = isEven(i);
                return (
                    <Row key={y}>
                        {coordinateX.map((x, j) => {
                            const isXEven = isEven(j + 1);
                            const isWhite = isXEven && !isYEven || !isXEven && isYEven;
                            const color = isWhite ? Colors.white : Colors.black;
                            const piece = pieces.find((item) => item.x === x && item.y === y);

                            const isPossibleTarget = possibleTarget.reduce<boolean>((bool, item) => {
                                if (item.x === x && item.y === y) {
                                    bool = true;
                                }
                                return bool;
                            }, false);

                            const caseColor = `case--${color}`;
                            const cssClass = classNames({
                                case: true,
                                [caseColor]: true,
                                "case--selected-piece": selectedPiece && x === selectedPiece.x && y === selectedPiece.y,
                                "case--possible-target": isPossibleTarget,
                            });

                            // TODO: When the player click on a possible target, move the piece on the case
                            const handleClick = () => {
                                if (isPossibleTarget && selectedPiece) {
                                    dispatch(movePiece(selectedPiece, { x, y }));
                                    dispatch(incrementLap());
                                }
                                else if (piece && equals(piece, selectedPiece)) {
                                    dispatch(setSelectedPiece(undefined));
                                } else if (piece) {
                                    dispatch(setSelectedPiece(piece));
                                }
                                return;
                            };

                            return (
                                <Box
                                    className={cssClass}
                                    key={`${x}${y}`}
                                    x={x}
                                    y={y}
                                    piece={piece}
                                    handleClick={handleClick}
                                />
                            );
                        })}
                    </Row>
                );
            })} */}
        </div>
    );
}

function mapStateToProps(state: AppState): IStateProps {
    return {
        piecesState: state.pieces,
        game: state.game,
        boxes: state.grid.boxes,
    };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
    return {
        dispatch,
        setSelectedPiece,
        incrementLap,
        movePiece,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);