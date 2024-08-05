import { describe, expect, test } from "bun:test";
import { ModrinthAPI } from "../src/ModrinthAPI";

describe("UserAgent", () => {
  test("All fields and string version", () => {
    expect(
      new ModrinthAPI({
        userAgent: {
          projectName: "JSRinth Unit Tests",
          githubUsername: "Erb3",
          projectVersion: "1.0",
          contactInfo: "https://github.com/Erb3/JSRinth",
        },
      }).userAgent
    ).toBe("Erb3/JSRinth Unit Tests/1.0 (https://github.com/Erb3/JSRinth)");
  });

  test("All fields and integer version", () => {
    expect(
      new ModrinthAPI({
        userAgent: {
          projectName: "JSRinth Unit Tests",
          githubUsername: "Erb3",
          projectVersion: 1,
          contactInfo: "https://github.com/Erb3/JSRinth",
        },
      }).userAgent
    ).toBe("Erb3/JSRinth Unit Tests/1 (https://github.com/Erb3/JSRinth)");
  });

  test("Name only", () => {
    expect(
      new ModrinthAPI({
        userAgent: {
          projectName: "JSRinth Unit Tests",
        },
      }).userAgent
    ).toBe("JSRinth Unit Tests");
  });

  test("Name and string version", () => {
    expect(
      new ModrinthAPI({
        userAgent: {
          projectName: "JSRinth Unit Tests",
          projectVersion: "1.0",
        },
      }).userAgent
    ).toBe("JSRinth Unit Tests/1.0");
  });

  test("Name and contact", () => {
    expect(
      new ModrinthAPI({
        userAgent: {
          projectName: "JSRinth Unit Tests",
          contactInfo: "https://github.com/Erb3/JSRinth",
        },
      }).userAgent
    ).toBe("JSRinth Unit Tests (https://github.com/Erb3/JSRinth)");
  });

  test("Developer provided string", () => {
    expect(
      new ModrinthAPI({
        userAgent: "JSRinth Unit Tests",
      }).userAgent
    ).toBe("JSRinth Unit Tests");
  });
});
