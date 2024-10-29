import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("If `input` contains a 4 and 5 , they get subtracted both ways. It should return -1 and 1", function () {
  assert.deepEqual(humanResourceMachine([4, 5]), [1,-1]);
});

test("If `input` contains a `4,5,2,0` , `-1, 1,-2,2` should be returned", function () {
  assert.deepEqual(humanResourceMachine([4, 5, 2, 0]), [1, -1,-2,2]);
});


