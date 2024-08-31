type Player = "player1" | "player2";

const winningSubsets = [
    new Set([1, 2, 3]),
    new Set([4, 5, 6]),
    new Set([7, 8, 9]),
    new Set([1, 4, 7]),
    new Set([2, 5, 8]),
    new Set([3, 6, 9]),
    new Set([1, 5, 9]),
    new Set([3, 5, 7]),
];

export class TicTacToe {

    positions: Record<Player, Set<number>> = {
        player1: new Set(),
        player2: new Set(),
    };

    currentPlayer: Player = "player1";

    play(box: number) {
        if (this.isUnvailableBox(box))
            return "This box is already set";

        this.positions[this.currentPlayer].add(box);
        if (this.isWinningSubset()) return this.currentPlayer + " wins the game";

        this.switchToNextPlayer();
        return "Next player :" + this.currentPlayer;
    }

    private switchToNextPlayer() {
        this.currentPlayer =
            this.currentPlayer === "player1" ? "player2" : "player1";
    }

    private isUnvailableBox(box: number) {
        return this.positions.player1.has(box) || this.positions.player2.has(box);
    }

    private isWinningSubset(): boolean {
        return winningSubsets.some((subset) => subset.isSubsetOf(this.positions[this.currentPlayer])
        );
    }
}
