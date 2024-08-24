import { match, P } from "ts-pattern";

const VALID_RANGE: [number, number] = [1, 100];

export function fizzBuzz(step: number):string {
  const validatedStep = isInRange(VALID_RANGE, step);
  return match(validatedStep)
    .with(
      P.when((n) => n % 15 === 0),
      () => "fizzbuzz"
    )
    .with(
      P.when((n) => n % 3 === 0),
      () => "fizz"
    )
    .with(
      P.when((n) => n % 5 === 0),
      () => "buzz"
    )
    .otherwise(() => step.toString());
}

function isInRange(range: [number, number], step: number) {
  if (step < range[0] || step > range[1]) throw new OutOfRangeError();
  return step;
}

class OutOfRangeError extends Error {}
