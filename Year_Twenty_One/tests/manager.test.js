import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Sums every number until the end marked by zero", function () {
  assert.deepEqual(humanResourceMachine(["2","3","3","0"]), [8]);
});


test("Sums every number including negatives until the end marked by zero", function () {
  assert.deepEqual(humanResourceMachine(["2", "3", "-3", "0"]), [2]);
});
