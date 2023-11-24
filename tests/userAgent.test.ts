import { ModrinthAPI } from "../src/ModrinthAPI";

test("Able to use UserAgent helper", () => {
  const full = new ModrinthAPI({
    userAgent: {
      projectName: "JSRinth Unit Tests",
      githubUsername: "Erb3",
      projectVersion: "1.0",
      contactInfo: "https://github.com/Erb3/JSRinth",
    },
  });

  const integerVersion = new ModrinthAPI({
    userAgent: {
      projectName: "JSRinth Unit Tests",
      githubUsername: "Erb3",
      projectVersion: 1,
      contactInfo: "https://github.com/Erb3/JSRinth",
    },
  });

  const nameOnly = new ModrinthAPI({
    userAgent: {
      projectName: "JSRinth Unit Tests",
    },
  });

  const nameAndVersion = new ModrinthAPI({
    userAgent: {
      projectName: "JSRinth Unit Tests",
      projectVersion: "1.0",
    },
  });

  const nameAndContact = new ModrinthAPI({
    userAgent: {
      projectName: "JSRinth Unit Tests",
      contactInfo: "https://github.com/Erb3/JSRinth",
    },
  });

  const ownString = new ModrinthAPI({
    userAgent: "JSRinth Unit Tests",
  });

  expect(full.userAgent).toBe(
    "Erb3/JSRinth Unit Tests/1.0 (https://github.com/Erb3/JSRinth)"
  );
  expect(integerVersion.userAgent).toBe(
    "Erb3/JSRinth Unit Tests/1 (https://github.com/Erb3/JSRinth)"
  );
  expect(nameOnly.userAgent).toBe("JSRinth Unit Tests");
  expect(nameAndVersion.userAgent).toBe("JSRinth Unit Tests/1.0");
  expect(nameAndContact.userAgent).toBe(
    "JSRinth Unit Tests (https://github.com/Erb3/JSRinth)"
  );
  expect(ownString.userAgent).toBe("JSRinth Unit Tests");
});
