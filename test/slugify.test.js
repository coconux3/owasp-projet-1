import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../index.js";

test("lower case and hyphens", () => {
  assert.equal(slugify("Hello OWASP 2026!"), "hello-owasp-2026");
});

test("accents removed", () => {
  assert.equal(slugify("Crème brûlée"), "creme-brulee");
});

test("no leading or trailing hyphen", () => {
  assert.equal(slugify("  --Plumber--  "), "plumber");
});
