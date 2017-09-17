class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.gameMatrix = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
        this.turns = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gameMatrix[columnIndex][rowIndex]) {
            this.gameMatrix[columnIndex][rowIndex] = this.currentPlayer;
            if (this.currentPlayer === 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
            this.turns++;
            return true;
        }
        return false;
    }

    isFinished() {
        if (!this.winner) {
            this.getWinner();
        }
        if (this.winner || this.noMoreTurns()) {
            return true;
        }
        return false;
    }
    
    getWinner() {
        if (!this.winner) {
            for (let i = 0; i < 3; i++) {
    
                // check column win
                if (this.gameMatrix[i][0] &&
                    this.gameMatrix[i][0] === this.gameMatrix[i][1] &&
                    this.gameMatrix[i][1] === this.gameMatrix[i][2]
                ) {
                    this.winner = this.gameMatrix[i][0];
                    return this.winner;
                }
    
                //check row win
                if (this.gameMatrix[0][i] &&
                    this.gameMatrix[0][i] === this.gameMatrix[1][i] &&
                    this.gameMatrix[1][i] === this.gameMatrix[2][i]
                ) {
                    this.winner = this.gameMatrix[0][i];
                    return this.winner;
                }
            }
    
            //check main diagonal win
            if (this.gameMatrix[0][0] &&
                this.gameMatrix[0][0] === this.gameMatrix[1][1] &&
                this.gameMatrix[1][1] === this.gameMatrix[2][2]
            ) {
                this.winner = this.gameMatrix[0][0];
                return this.winner;
            }
    
            //check secondary diagonal win
            if (this.gameMatrix[0][2] &&
                this.gameMatrix[0][2] === this.gameMatrix[1][1] &&
                this.gameMatrix[1][1] === this.gameMatrix[2][0]
            ) {
                this.winner = this.gameMatrix[0][2]; 
                return this.winner;
            }        
            return null;
        }
        return this.winner;
    }

    noMoreTurns() {
        if (this.turns === 9) {
            return true;
        }
        return false;
    }

    isDraw() {
        if (!this.winner) {
            this.getWinner();
        }
        if (this.noMoreTurns() && !this.winner) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex < 3 && colIndex < 3) {
            return this.gameMatrix[colIndex][rowIndex];
        }
        return null;
    }
}

module.exports = TicTacToe;
