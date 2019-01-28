#!/usr/bin/env node

const stdin = process.openStdin();
const message = process.argv[2];
const whitelist = [ // Replies that will count as a "yes"
  'y',
  'yes',
];

process.stdout.write(`${message} `);
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (chunk) => {
  console.log(`${chunk}`);
  if (whitelist.includes(chunk.toLowerCase())) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});
