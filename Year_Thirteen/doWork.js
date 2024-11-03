/**
 * @param {(number)[]} inbox
 */
function humanResourceMachine(inbox) {
  let outbox = [];
  let floor = [];
  outbox = inbox.map((value, index, elements) => {
    // Length minus one is equal to the highest index 
    if (index < elements.length - 1) {
      if (value == elements[index + 1] && index % 2 == 0) {
        // We are comparing index 0 to the next element index 1 and so forth
        return value;
      }
    }
    //Then dumping every undefined value. 
  }).filter(x => x != undefined); 
  return outbox;
}


export default humanResourceMachine;
