
import Piece from './piece';
import Square from '../square';
import Player from '../player';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []


        if (this.player === Player.WHITE) {


            //if (!blockingPiece) {
            for (let i = 0; i < 8; i++) {
                let blockingPieceRow = board.getPiece(Square.at(location.row, i))
                let blockingPieceCol = board.getPiece(Square.at(i, location.col))
                //vertical, non blocking, white

                if (location.row != i) {
                    moves.push(Square.at(i, location.col));
                    // } else {
                    //     let i = i < blockingPieceCol.row
                    //     moves.push(Square.at(i, location.col))
                }
                //horizontal, non blocking, white
                if (location.col != i && !blockingPieceRow) {
                    moves.push(Square.at(location.row, i));
                }
            }

            return moves

        } else {

            //if (!blockingPiece) {
            for (let i = 0; i < 8; i++) {
                let blockingPieceRow = board.getPiece(Square.at(location.row, i))
                let blockingPieceCol = board.getPiece(Square.at(i, location.col))
                //vertical, non blocking, black
                if (location.row != i && !blockingPieceCol) {
                    moves.push(Square.at(i, location.col));
                }
                //horizontal, non blocking, black
                if (location.col != i && !blockingPieceRow) {
                    moves.push(Square.at(location.row, i));
                }
            }
            return moves
        }
    }
}