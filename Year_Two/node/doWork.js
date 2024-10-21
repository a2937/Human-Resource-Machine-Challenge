/**
 * @param {(string|number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  for (let i = 0; i < inbox.length; i++)
  {
    outbox[i] = inbox[i]; 
  }
  return outbox;
}


export default humanResourceMachine;
