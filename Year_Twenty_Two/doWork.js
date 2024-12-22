/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = { fibPrev: 1, fibCurrent: 1, fibTemp: 0 };
  outbox.push(floor["fibPrev"]);
  for (let i = 0; i < inbox.length; i++)
  {
    outbox.push(floor["fibCurrent"]);
    while (floor["fibCurrent"] + floor["fibPrev"] <= inbox[i])
    {
      floor["fibTemp"] = floor["fibCurrent"]; 
      floor["fibCurrent"] += floor["fibPrev"]; 
      floor["fibPrev"] = floor["fibTemp"]; 
      outbox.push(floor["fibCurrent"]);
    }
    floor["fibPrev"] = 1; 
    floor["fibCurrent"] = 1; 
  }
  return outbox; 
}


export default humanResourceMachine;
