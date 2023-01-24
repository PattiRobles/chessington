import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []

        //start at i = 1, rather than 0, to exclude current square
        for (let i = 1; i <= 7; i++) {

            //travel NE
            if (location.row + i < 8 && location.col + i <= 7) {
                moves.push(Square.at(location.row + i, location.col + i));
            }


            //travel SW
            if (location.row - i >= 0 && location.col - i >= 0) {
                moves.push(Square.at(location.row - i, location.col - i));
            }

            //Travel NW
            if (location.row + i <= 7 && location.col - i >= 0) {
                moves.push(Square.at(location.row + i, location.col - i));
            }


            //Travel SE
            if (location.row - i >= 0 && location.col + i <= 7) {
                moves.push(Square.at(location.row - i, location.col + i));
            }

        }

        return moves
    }
}