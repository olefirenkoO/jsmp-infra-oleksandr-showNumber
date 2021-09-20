import assert from "assert";
import { showNumber } from "../src/index";

assert.deepStrictEqual(showNumber(5), 5);
assert.deepStrictEqual(showNumber("string"), "This is not a number");
