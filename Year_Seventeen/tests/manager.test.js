import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("If both elements are positive, 0 is sent to the outbox", function () {
  assert.deepEqual(humanResourceMachine([1,2]), [0]);
});

test("If both elements are negative, 0 is sent to the outbox", function () {
  assert.deepEqual(humanResourceMachine([-2,-4]), [0]);
});

test("If the first number is positive and the second is negative, a 1 is sent to the outbox", function () {
  assert.deepEqual(humanResourceMachine([2, -4]), [1]);
});

test("If the first number is negative and the second is positive, a 1 is sent to the outbox", function () {
  assert.deepEqual(humanResourceMachine([-2, 4]), [1]);
});

