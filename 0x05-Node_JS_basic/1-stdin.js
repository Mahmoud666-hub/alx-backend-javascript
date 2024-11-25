console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const nam = process.stdin.read();
  if (nam) {
    process.stdout.write(`Your name is: ${nam}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
