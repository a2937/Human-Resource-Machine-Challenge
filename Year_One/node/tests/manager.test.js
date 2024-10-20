import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("There should be three items in the outbox when given three items", function ()
{
  assert.deepEqual(humanResourceMachine(["Y", "0", "1"]), ["Y", "0", "1"]); 
})
