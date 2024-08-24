import { it, expect } from "bun:test";
import { FakeORM } from "./weakmap";

class rectangle {
  constructor(private l: number, private L: number) {}
  fitToSquare() {
    const size = Math.min(this.l, this.L);
    this.l = size;
    this.L = size;
  }
}

it("Can detect the fields to be updated", () => {
  const orm = new FakeORM();
  const r = orm.load(new rectangle(2, 3));
  r.fitToSquare();
  const changes = orm.save(r);
  expect(changes).toEqual({
    L: {
      original: 3,
      updated: 2,
    },
  });
  // When r is garbage collected, the weakmap of the orm is updated
});
