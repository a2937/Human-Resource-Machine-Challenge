/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  outbox = inbox.map(element => element * 3); 
  return outbox;
}


export default humanResourceMachine;
