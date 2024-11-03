import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("One element from every pair gets outputted", function () {
  assert.deepEqual(humanResourceMachine([1,1,2,2]), [1,2]);
});

test("If there is an odd number of elements, the unmatched element gets tossed", function () {
  assert.deepEqual(humanResourceMachine([1, 1, 2, 2,3]), [1, 2]);
});

test("If there is a repeating pair, they count separately", function () {
  assert.deepEqual(humanResourceMachine([1, 1, 2, 2, 1,1]), [1, 2,1]);
});



