import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("Sends `1 1 2 3 5 8` to the outbox if `10` is provided", function () {
  assert.deepEqual(humanResourceMachine([10]), [1, 1, 2, 3, 5, 8]);
});

