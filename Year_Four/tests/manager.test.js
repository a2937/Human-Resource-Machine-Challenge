import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("If `input` contains a 4 and 5 , they get reversed", function () {
  assert.deepEqual(humanResourceMachine([4, 5]), [5, 4]);
});

test("If `input` contains 4 elements, every two get reversed", function () {
  assert.deepEqual(humanResourceMachine([1,2,3,4]), [2,1,4,3]);
});

