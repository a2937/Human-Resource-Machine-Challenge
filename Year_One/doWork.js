/**
 * @param {(string|number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];

  outbox[0] = inbox[0];
  outbox[1] = inbox[1];
  outbox[2] = inbox[2];
  return outbox;
}


export default humanResourceMachine;
