/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  for (let i = 0; i < inbox.length ; i += 2)
  {
    outbox.push(inbox[i] * inbox[i + 1]); 
  }
  return outbox;
}


export default humanResourceMachine;
