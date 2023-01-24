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

            //diagonal movement to capture black piece, except king

            let pieceToCaptureRight = board.getPiece(Square.at(location.row + 1, location.col + 1))
            let pieceToCaptureLeft = board.getPiece(Square.at(location.row + 1, location.col - 1))

            if (pieceToCaptureLeft && pieceToCaptureLeft.player === Player.BLACK && pieceToCaptureLeft.constructor.name != 'King'
                || pieceToCaptureRight && pieceToCaptureRight.player === Player.BLACK && pieceToCaptureRight.constructor.name != 'King') {

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
            return moves


        } else {
            //last row
            if (location.row === 0) return moves

            //capture white piece
            let pieceToCaptureRight = board.getPiece(Square.at(location.row - 1, location.col + 1))
            let pieceToCaptureLeft = board.getPiece(Square.at(location.row - 1, location.col - 1))

            if (pieceToCaptureLeft && pieceToCaptureLeft.player === Player.WHITE && pieceToCaptureLeft.constructor.name != 'King'
                || pieceToCaptureRight && pieceToCaptureRight.player === Player.WHITE && pieceToCaptureLeft.constructor.name != 'King') {

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
            return moves
        }

    }
}



//JOE'S CODE
// for (let i = location.col + 1; i <= 7; i++) {
//     if (board.getPiece(Square.at(location.row, i)) === undefined) {
//         moves.push(Square.at(location.row, i));
//     }
//     else if (board.getPiece(Square.at(location.row, i)).player !== this.player && !(board.getPiece(Square.at(location.row, i)) instanceof King)) {
//         moves.push(Square.at(location.row, i));
//         break;
//     }
//     else break;
// }

