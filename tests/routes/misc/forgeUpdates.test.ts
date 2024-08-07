import { expect, test } from "bun:test";
import { ModrinthAPI } from "../../../src/ModrinthAPI";

const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Able to get forge updates for craftify (example)", async () => {
  const result = await api.forgeUpdates("craftify");

  expect(result.homepage).toBe("https://modrinth.com/mod/craftify");
  expect(result.latest.size).toBeGreaterThanOrEqual(1);
  expect(result.recommended.size).toBeGreaterThanOrEqual(1);

  const regexTest = [...result.latest.values()].every((v) =>
    v.match(/^[0-9]{1,}\.[0-9]{1,}\.[0-9]{1,}$/)
  );

  expect(regexTest).toBeTruthy();
});
