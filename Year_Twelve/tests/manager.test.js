import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Every element in an array gets multiplied by 40", function () {
  assert.deepEqual(humanResourceMachine([1,2,3,4,5]), [40,80,120,160,200]);
});

test("Every element in an array multiplied by 40", function () {
  assert.deepEqual(humanResourceMachine([2, 4, 6, 8, 10]), [80, 160, 240, 320, 400]);
});


