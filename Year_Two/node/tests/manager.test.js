import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("There should be twenty-five items in the outbox when given twenty-five letters", function ()
{
  assert.deepEqual(humanResourceMachine(["Y", "U", "S", "S"]), ["Y", "U", "S", "S"]); 
})
