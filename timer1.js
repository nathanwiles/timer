// pull in the input from the command line
let input = process.argv.slice(2);

// function to beep at the times given in the input
const timer = function(times) {
  // loop through the times given
  for (const time of times) {
    // check that the time is a number and greater than 0
    if (time > 0 && !isNaN(time)) {
      setTimeout(() => {
        process.stdout.write('\x07'); // beep
      }, time * 1000); // convert time from seconds to milliseconds
    }
  }
};

timer(input); // call the function