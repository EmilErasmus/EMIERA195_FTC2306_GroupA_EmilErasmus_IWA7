const nickname = "Timmy";
const firstName = "Timothy";
const names = nickname || firstName;
const greeting = names && `Good Morning, ${names}!`;

console.log(greeting || `Good Morning!`);