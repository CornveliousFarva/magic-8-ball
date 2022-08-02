// Variable of a user's name, set to an empty string since it will be changing
let userName = "";

// Ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello")

// Variable of a user's question
let userQuestion = "";

// Console log of the userQuestion variable
console.log(`${userName} has asked - ${userQuestion}`);

// Variable of a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 7);

// Console log of randomNumber
console.log(randomNumber)

// Variable of eight ball
let eightBall = ""

// Control flow that takes in randomNumber and assigns eightBall to a reply the Magic Eight Ball will return
switch(randomNumber){
    case 0:
      eightBall = 'It is certain';
      break
    case 1:
      eightBall = 'It is decidedly so';
      break
    case 2:
      eightBall = 'Reply hazy, try again';
      break
    case 3:
      eightBall = 'Cannot predict now';
      break
    case 4:
      eightBall = 'Dont count on it';
      break
    case 5:
      eightBall = 'My sources say no';
      break
    case 6:
      eightBall = 'Outlook not so good';
      break
    case 7:
      eightBall = 'All signs point to yes';
      break
  }

// Console log that prints the Magic Eight Ball's answer
console.log(`The Magic Eight Ball says ${eightBall}`)




