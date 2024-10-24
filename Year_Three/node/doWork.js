/**
 * @param {(string|number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = ['U', 'J', 'X', 'G', 'B', 'E'];
  outbox[0] = floor[4];
  outbox[1] = floor[0];
  outbox[2] = floor[3]; 
  return outbox;
}


export default humanResourceMachine;
