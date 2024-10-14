const input = require('prompt-sync')({sigint: true});

let active: boolean = true;

while (active) {
  console.log(`
    What whould you like to do?
    1. Create a todo
    2. Delete a todo
    3. View todo list
    4. Exit the program`
  )
  const answer = input();
  switch (Number(answer)) {
    case 1:
      break
    case 2:
      break
    case 3:
      break
    case 4:
      console.log("Exiting Program...");
      active = false;
      break
    default:
      console.log("Invalid Input");
  }
}