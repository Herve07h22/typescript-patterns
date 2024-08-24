import { it, expect } from "bun:test";
import { fizzBuzz } from "./fizzbuzz";

it("Returns out of range for 0", () => {
  expect(() => fizzBuzz(0)).toThrowError();
});

it("Returns correct answers for numbers beteween 1 and 15", () => {
  const expectedResults = [
    "1",
    "2",
    "fizz",
    "4",
    "buzz",
    "fizz",
    "7",
    "8",
    "fizz",
    "buzz",
    "11",
    "fizz",
    "13",
    "14",
    "fizzbuzz",
  ];
  for (let i=1; i<=15; i++) {
    expect(fizzBuzz(i)).toBe(expectedResults[i-1])
  }
}); 
