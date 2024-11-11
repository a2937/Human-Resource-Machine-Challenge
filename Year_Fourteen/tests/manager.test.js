import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("The bigger of every two items will be stored", function () {
  assert.deepEqual(humanResourceMachine([1,3,2,5]), [3,5]);
});

test("The bigger of every two items will be stored regardless of order", function () {
  assert.deepEqual(humanResourceMachine([3, 1, 2, 5]), [3, 5]);
});

test("if two items are the same, only one of them are stored", function () {
  assert.deepEqual(humanResourceMachine([3, 3, 2, 5]), [3, 5]);
});

