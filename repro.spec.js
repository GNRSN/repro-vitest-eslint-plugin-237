import { expect, describe, it } from "vitest";

describe("vitest", () => {
  it("allows chai syntax", () => {
    const example = { foo: "bar" };
    expect(example).to.deep.eq({ foo: "bar" });
  });
});
