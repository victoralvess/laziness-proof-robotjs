/**
 * This script represents my laziness of clicking many and many times to achieve my goal (remove many many videos of a youtube playlist).
 */
const robot = require("robotjs");
let times = process.argv[2]; // arguments passed when running the script. e.g.: npm start 500

/**
 * Verifies if all clicks were clicked.
 * If so, the script execution is stopped. Otherwise it will keep running.
 */
function shouldItStop() {
  
  if(times < 0) {
    process.exit();
  }
  
  times--;
  
  return;
}

/**
 * Repeats the action of clicking in the remove button and preventing the page reload every freaking time.
 */
setTimeout(() => {

  setInterval(() => {
    robot.keyTap("escape"); // Prevents the page reload after clicking in the 'remove'' button.
  }, 1000);

  setInterval(() => {
    robot.mouseClick();
    shouldItStop();
  }, 1500);

}, 5000);
