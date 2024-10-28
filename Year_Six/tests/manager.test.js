import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("If `input` contains a 4 and 5 , they get summed", function () {
  assert.deepEqual(humanResourceMachine([4, 5]), [9]);
});

test("If `input` contains a `4,5,2,0` , `9,2` should be returned", function () {
  assert.deepEqual(humanResourceMachine([4, 5,2,0]), [9,2]);
});


