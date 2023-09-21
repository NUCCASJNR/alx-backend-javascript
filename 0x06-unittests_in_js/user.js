#!/usr/bin/node

// user.js
function getUser(userId) {
  console.log(`Fetching user information for user ID: ${userId}`);
  return { id: userId, name: 'John Doe' };
}

module.exports = getUser;

// const a = getUser(2)
// console.log(a)