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

        let blocking1Square = board.getPiece(Square.at(location.row + 1, location.row))
        let blocking2Squares = board.getPiece(Square.at(location.row + 2, location.col))

        if (this.player === Player.WHITE) {
            //if W pawn in initial line, it can move 2 sq fwd

            if (location.row === 1) {
                moves.push(Square.at(location.row + 2, location.col))
            }

            //else, if already moved, and also for 1st move, it can ove only one square fwd
            moves.push(Square.at(location.row + 1, location.col))
        } else {
            //if B pawn in initial line, it can move 2 sq fwd
            if (location.row === 6) {
                moves.push(Square.at(location.row - 2, location.col))
            }
            moves.push(Square.at(location.row - 1, location.col))
        }
        return moves
    }
}
