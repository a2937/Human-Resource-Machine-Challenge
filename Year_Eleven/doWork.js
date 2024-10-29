/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  for (let i = 0; i < inbox.length; i++)
  {
    let value = inbox[i]; 
     if (i % 2 == 0)
    {
      floor[0] = value; 
    }
    else 
    {
      outbox.push(value - floor[0]);
      outbox.push(floor[0] - value);
    }
  }
  return outbox;
}


export default humanResourceMachine;
