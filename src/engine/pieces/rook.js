import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []

        for (let i = location.row + 1; i <= 7; i++) {
            const nextPlayer = board.getPiece(Square.at(i, location.col))

            if (nextPlayer === undefined) {
                moves.push(Square.at(i, location.col));
            }
            else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                moves.push(Square.at(i, location.col));
                break;
            }
            else if (nextPlayer.player === this.player) {
                break;
            }
        }

        for (let i = location.row - 1; i >= 0; i--) {
            const nextPlayer = board.getPiece(Square.at(i, location.col))
            if (nextPlayer === undefined) {
                moves.push(Square.at(i, location.col));
            }
            else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                moves.push(Square.at(i, location.col));
                break;
            }
            else if (nextPlayer.player === this.player) {
                break;
            }

        }

        for (let i = location.col + 1; i <= 7; i++) {
            const nextPlayer = board.getPiece(Square.at(location.row, i))
            if (nextPlayer === undefined) {
                moves.push(Square.at(location.row, i));
            }
            else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                moves.push(Square.at(location.row, i));
                break;
            }
            else if (nextPlayer.player === this.player) {
                break;
            }
        }

        for (let i = location.col - 1; i >= 0; i--) {
            const nextPlayer = board.getPiece(Square.at(location.row, i))
            if (nextPlayer === undefined) {
                moves.push(Square.at(location.row, i));
            }
            else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                moves.push(Square.at(location.row, i));
                break;
            }
            else if (nextPlayer.player === this.player) {
                break;
            }
        }
        return moves
    }
}
