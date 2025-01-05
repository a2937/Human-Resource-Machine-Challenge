/**
 * @param {(string)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = { newValue: 0, smallest: parseInt(inbox[0]) };

  for (let i = 0; i < inbox.length; i++) {
    floor["newValue"] = parseInt(inbox[i]);
    if (floor["newValue"] === 0) {
      outbox.push(floor["smallest"]);
    }
    else {
      if (floor["newValue"] < floor["smallest"])
      { 
        floor["smallest"] = floor["newValue"];
      }
    }
  }
  return outbox;
}


export default humanResourceMachine;

