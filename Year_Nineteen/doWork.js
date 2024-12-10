/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  for (let i = 0; i < inbox.length; i++)
  {
    let temp = inbox[i];
    outbox.push(temp); 
    while (temp !== 0)
    {
      if (temp > 0)
      {
        temp--;
      }
      else 
      {
        temp++;
      }
      outbox.push(temp); 
    }
  }
  return outbox;
}


export default humanResourceMachine;
