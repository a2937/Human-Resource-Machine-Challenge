import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Every two elements gets multiplied", function () {
  assert.deepEqual(humanResourceMachine([2,3,1,4]), [6,4]);
});

test("When multiplied by zero, zero is sent to the outbox", function () {
  assert.deepEqual(humanResourceMachine([2, 0]), [0]);
});

