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
            if (location.row === 7) return moves

            let blocking1Square = board.getPiece(Square.at(location.row + 1, location.col))
            let blocking2Squares = board.getPiece(Square.at(location.row + 2, location.col))

            if (!blocking1Square) {
                if (location.row === 1 && !blocking2Squares) {
                    moves.push(Square.at(location.row + 2, location.col))
                }
                moves.push(Square.at(location.row + 1, location.col))
            }


        } else {
            if (location.row === 0) return moves

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

