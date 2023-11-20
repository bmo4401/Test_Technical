/* // Synchronous: 1,2,3
alert(1);
alert(2);
alert(3);

// Asynchronous: 1,3,2
alert(1);
setTimeout(() => alert(2), 0);
alert(3);

// Sync callback
function greetings(callback) {
  callback();
}
greetings(() => {
  console.log('Hi');
});
moreWork(); // will run after console.log

// Async callback
const fs = require('fs');
fs.readFile('/file.md', function callback(err, data) {
  // fs.readFile is an async method provided by Node
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
 */

async function nonBlockingFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < 1000000000; i++) {
        // Simulate a time-consuming operation
      }
      resolve('Non-blocking function completed');
    }, 1000);
  });
}

function blockingFunction() {
  for (let i = 0; i < 1000000000; i++) {
    // This loop simulates a time-consuming operation
  }
  return 'Blocking function completed';
}

async function main() {
  console.log('Before non-blocking function');
  const result = await nonBlockingFunction().then((data) => {
    return data;
  });
  console.log(result);
  /*   const result = blockingFunction(); */
  console.log('After non-blocking function');
}

main();
