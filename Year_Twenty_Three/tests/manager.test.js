import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Sends the smallest number including negatives until the end marked by zero", function () {
  assert.deepEqual(humanResourceMachine(["2", "3", "-3", "0"]), [-3]);
});

