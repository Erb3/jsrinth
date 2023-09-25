import { ModrinthAPI } from "../../../src/ModrinthAPI";
const api = new ModrinthAPI({
  userAgent: "JSRinth unit tests",
});

test("Able to get forge updates for craftify (example)", async () => {
  const result = await api.getForgeUpdates("craftify");

  expect(result.ok).toBeTruthy();
  expect(result.error).toBeUndefined();
  expect(result.homepage).toBe("https://modrinth.com/mod/craftify");
  expect(result.latest.size).toBeGreaterThanOrEqual(1);
  expect(result.recommended.size).toBeGreaterThanOrEqual(1);

  const regexTest = [...result.latest.values()].every((v) =>
    v.match(/^[0-9]{1,}\.[0-9]{1,}\.[0-9]{1,}$/)
  );

  expect(regexTest).toBeTruthy();
});
