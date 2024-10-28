import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("There should be three items in the outbox when given three letters", function ()
{
  assert.deepEqual(humanResourceMachine(["Y", "U", "S"]), ["Y", "U", "S"]); 
})

test("There should be three items in the outbox when given three numbers", function () {
  assert.deepEqual(humanResourceMachine(["0", "0", "1"]), ["0", "0", "1"]);
})
