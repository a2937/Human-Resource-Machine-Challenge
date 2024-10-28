import { test } from "node:test"
import { strict as assert } from 'node:assert';
import  humanResourceMachine from "../doWork.js"; 

test("There should be twenty-five items in the outbox when given twenty-five letters", function ()
{
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  assert.deepEqual(humanResourceMachine(letters), letters); 
})
