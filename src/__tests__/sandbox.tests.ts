import { add } from "..";

describe("Sandbox tests", () => {
  it("sandbox", () => {
    expect(add(2, 4)).toBe(6);
    expect(add(2, 4)).not.toBe(7);
  });
});
