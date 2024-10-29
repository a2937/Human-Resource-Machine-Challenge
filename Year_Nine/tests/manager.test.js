import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("If `input` contains anything but a `0` it gets removed", function () {
  assert.deepEqual(humanResourceMachine([0, 0, 0, 0, 8]), [0, 0, 0, 0]);
});

test("If `input` does not contain a `0` an empty array is returned", function () {
  assert.deepEqual(humanResourceMachine([4, 5, 2, 1, 9]), []);
});


