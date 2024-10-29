import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Every element in an array gets tripled", function () {
  assert.deepEqual(humanResourceMachine([1,2,3,4,5]), [3,6,9,12,15]);
});

test("Every element in an array gets tripled", function () {
  assert.deepEqual(humanResourceMachine([2, 4, 6, 8, 10]), [6, 12, 18, 24, 30]);
});


