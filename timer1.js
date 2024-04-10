const args = process.argv.slice(2);

const beep = (delay) => {
  setTimeout(() => {
    process.stdout.write('\x07'); 
  }, delay * 1000);
};

for (const arg of args) {
  const seconds = +arg;
  if (!isNaN(seconds) && seconds >= 0) {
    console.log(`Setting timer for ${seconds} seconds...`);
    beep(seconds);
  } else {
    console.log(`Skipping invalid input: ${arg}`);
  }
}