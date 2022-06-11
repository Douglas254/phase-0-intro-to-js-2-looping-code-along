// Code your solutions in this file
// returns an array of thank you messages for each name provided to the function
const writeCards = (passedNames, passedMmessage) => {
  let newArrayMessages = [];
  for (let i = 0; i < passedNames.length; i++) {
    newArrayMessages.push(
      `Thank you, ${passedNames[i]}, for the wonderful ${passedMmessage} gift!`
    );
  }
  return newArrayMessages;
};

// invokes console.log once for each number, counting down from the number provided to zero
// logs each number when counting down, starting from the number provided
const countDown = (passedNumber) => {
  for (let i = passedNumber; i > -1; i--) {
    console.log(i);
  }
};
