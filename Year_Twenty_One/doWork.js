/**
 * @param {(string)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = {newValue:0,total:0};
  
  for (let i = 0; i < inbox.length ; i++)
  {
    floor["newValue"] = parseInt(inbox[i]);
    if (floor["newValue"] === 0)
    {
      outbox.push(floor["total"]); 
    }
    else 
    {
      floor["total"] += floor["newValue"]; 
    }
  }
  return outbox;
}


export default humanResourceMachine;
