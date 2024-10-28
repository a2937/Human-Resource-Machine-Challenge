import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("An array contain 'BUG' should be returned", function ()
{
  assert.deepEqual(humanResourceMachine(["Y", "D", "S"]), ["B", "U", "G"]); 
})

