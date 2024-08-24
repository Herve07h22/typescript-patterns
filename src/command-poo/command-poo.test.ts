import { it, expect } from "bun:test";
import { Remote } from "./Remote";
import { Television } from "./Television";
import { toggle, volumeUp, volumeDown } from "./TelevisionCommand";

/*  **************************
 *  Command Pattern
 *  A remote constrols a TV.
 *  The remote maps the buttons to the TV controls
 *  ************************** */

it("Command pattern with POO", () => {
  const television = new Television("Bob's TV");

  // The 3 commands are just functions ("aka reducers")
  const remote = new Remote({ toggle, volumeUp, volumeDown });

  // Commands are not connected to the TV. But the remote is.
  remote.connectTo(television);

  expect(television.state).toBe("off");
  remote.click("redbutton");
  expect(television.state).toBe("on");

  for (let i = 0; i < 5; i++) {
    remote.click("volumeUp");
  }
  expect(television.volume).toBe(5);
  remote.click("volumeDown");
  expect(television.volume).toBe(4);
});

