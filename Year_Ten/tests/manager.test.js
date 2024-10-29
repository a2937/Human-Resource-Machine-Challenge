import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Every element in an array gets multiplied eight times", function () {
  assert.deepEqual(humanResourceMachine([1,2,3,4,5]), [8,16,24,32,40]);
});

test("Every element in an array gets multiplied eight times", function () {
  assert.deepEqual(humanResourceMachine([2, 4, 6, 8, 10]), [16, 32, 48, 64, 80]);
});


