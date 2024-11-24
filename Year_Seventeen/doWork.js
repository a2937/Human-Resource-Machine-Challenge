/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  floor[4] = 0;
  floor[5] = 1;
  for (let i = 0; i < inbox.length; i += 2)
  {
    if (inbox[i] !== Math.abs(inbox[i]) && inbox[i + 1] !== Math.abs(inbox[i + 1]))
    {
      outbox.push(floor[4]); // Both negative 
    }
    else if (inbox[i] === Math.abs(inbox[i]) && inbox[i + 1] === Math.abs(inbox[i + 1]))
    {
      outbox.push(floor[4]); // Both positive 
    }
    else 
    {
      outbox.push(floor[5]); // 
    }
  }

  return outbox;
}


export default humanResourceMachine;
