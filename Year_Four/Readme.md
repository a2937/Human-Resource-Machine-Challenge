# Scrambler Handler

Grab the first two things from the `inbox` and drop them into the `outbox` in the reverse order. Repeat until the `inbox` is empty. 

It is recommended to use either a `for` or `while` loop to iterate over the `inbox` 
array and use a secondary value to hold onto the value. 

Fun Fact: Using bitwise operations, it is completely possible to avoid using an auxiliary variable
to hold onto values. 
