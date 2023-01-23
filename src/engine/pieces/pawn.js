import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []

        if (this.player === Player.WHITE) {
            //last row
            if (location.row === 7) return moves

            //capture black piece
            //HOW to rule out king from capture ( along the lines of "pieceToCapturRight != Piece.King" ???)
            let pieceToCaptureRight = board.getPiece(Square.at(location.row + 1, location.col + 1))
            let pieceToCaptureLeft = board.getPiece(Square.at(location.row + 1, location.col - 1))

            if (pieceToCaptureLeft && pieceToCaptureLeft.player === Player.BLACK || pieceToCaptureRight && pieceToCaptureRight.player === Player.BLACK) {
                if (location.col !== 7) moves.push(Square.at(location.row + 1, location.col + 1))
                if (location.col !== 0) moves.push(Square.at(location.row + 1, location.col - 1))
            }


            //limit movement if blocked
            let blocking1Square = board.getPiece(Square.at(location.row + 1, location.col))
            let blocking2Squares = board.getPiece(Square.at(location.row + 2, location.col))

            if (!blocking1Square) {
                if (location.row === 1 && !blocking2Squares) {
                    moves.push(Square.at(location.row + 2, location.col))
                }
                moves.push(Square.at(location.row + 1, location.col))
            }

        } else {
            //last row
            if (location.row === 0) return moves

            //capture white piece
            let pieceToCaptureRight = board.getPiece(Square.at(location.row - 1, location.col + 1))
            let pieceToCaptureLeft = board.getPiece(Square.at(location.row - 1, location.col - 1))

            if (pieceToCaptureLeft && pieceToCaptureLeft.player === Player.WHITE || pieceToCaptureRight && pieceToCaptureRight.player === Player.WHITE) {
                if (location.col !== 7) moves.push(Square.at(location.row - 1, location.col + 1))
                if (location.col !== 0) moves.push(Square.at(location.row - 1, location.col - 1))
            }

            //limit movement if blocked
            let blocking1Square = board.getPiece(Square.at(location.row - 1, location.col))
            let blocking2Squares = board.getPiece(Square.at(location.row - 2, location.col))

            if (!blocking1Square) {
                if (location.row === 6 && !blocking2Squares) {
                    moves.push(Square.at(location.row - 2, location.col))
                }
                moves.push(Square.at(location.row - 1, location.col))
            }

        }
        return moves
    }
}

