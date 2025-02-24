#!/usr/bin/env node

// Get the command-line arguments
const args = process.argv.slice(2);

// Determine the user's name
const name = args[0] || "User";

// Print the greeting message
console.log(`Hello, ${name}!`);
