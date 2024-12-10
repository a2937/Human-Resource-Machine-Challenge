import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("If a number is positive, it will have a countdown to zero", function () {
  assert.deepEqual(humanResourceMachine([5]), [5,4,3,2,1,0]);
});


test("If a number is negative, it will count up to zero", function () {
  assert.deepEqual(humanResourceMachine([-5]), [-5, -4, -3, -2, -1, 0]);
});
