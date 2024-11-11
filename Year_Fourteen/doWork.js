/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  for (let i = 0; i <= inbox.length - 1; i += 2)
  {
    let firstItem = inbox[i];
    let secondItem = inbox[i + 1]; 
    if (secondItem > firstItem)
    {
      outbox.push(secondItem);
    }
    else 
    {
      outbox.push(firstItem); 
    }
  }
  return outbox; 
}


export default humanResourceMachine;
