import { it, expect } from "bun:test";
import { TicTacToe } from "./TicTacToe";

it("Next player is asked to play", () => {
  const tictactoe = new TicTacToe();
  expect(tictactoe.play(1)).toBe("Next player :player2");
});

it("A player can choose a box already set", () => {
  const tictactoe = new TicTacToe();
  tictactoe.play(1);
  expect(tictactoe.play(1)).toBe("This box is already set");
});

it("A player can choose a box already set", () => {
  const tictactoe = new TicTacToe();
  tictactoe.play(1);
  tictactoe.play(4);
  tictactoe.play(2);
  tictactoe.play(5);
  expect(tictactoe.play(3)).toBe("player1 wins the game");
});

it("Realistic scenario", () => {
    const tictactoe = new TicTacToe();
    expect(tictactoe.play(5)).toBe("Next player :player2")
    expect(tictactoe.play(4)).toBe("Next player :player1")
    expect(tictactoe.play(7)).toBe("Next player :player2")
    expect(tictactoe.play(3)).toBe("Next player :player1")
    expect(tictactoe.play(8)).toBe("Next player :player2")
    expect(tictactoe.play(2)).toBe("Next player :player1")
    expect(tictactoe.play(9)).toBe("player1 wins the game")
    
  
})