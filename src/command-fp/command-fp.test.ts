import { it, expect } from "bun:test";
import { commands } from "./TelevisionCommand";
import { remote } from "./remote";
import { assertion, Television } from "./Television";
import { pipe } from "./pipe";

it("Command pattern with FP", () => {
  const click = remote(commands);

  const television = pipe(
    assertion(tv => expect(tv.state).toBe("off")),
    click("redbutton"),
    assertion(tv => expect(tv.state).toBe("on")),
    click("volumeUp"),
    assertion(tv => expect(tv.volume).toBe(1)),
    click("volumeUp"),
    assertion(tv => expect(tv.volume).toBe(2)),
    click("volumeDown")
  )(new Television("Bob's TV"));

  expect(television.volume).toBe(1);
  expect(television.state).toBe("on");
});

