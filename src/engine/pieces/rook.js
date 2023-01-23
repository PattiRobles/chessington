
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

            for (let i = 0; i < 8; i++) {

                if (i != location.row) {
                    moves.push(Square.at(i, location.col));
                }
                if (i != location.col) {
                    moves.push(Square.at(location.row, i));
                }
            }
        } else {
            for (let i = 0; i < 8; i++) {
                if (i != location.row) {
                    moves.push(Square.at(i, location.col));
                }
                if (i != location.col) {
                    moves.push(Square.at(location.row, i));
                }
            }

        }

        return moves
    }
}