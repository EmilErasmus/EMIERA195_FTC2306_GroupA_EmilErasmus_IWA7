const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = `R ${((leoBalance*-1) + (sarahBalance*-1)).toFixed(2)} \n`
const [integerPart, decimalPart] = owed.split('.');
const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const formattedNum = `${formattedIntegerPart}.${decimalPart}`;

const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${(leoBalance * -1).toFixed(2)}) \n`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${(sarahBalance * -1).toFixed(2)}) \n`
const total = "\n  Total amount owed: "

const result = leo + sarah + divider + total + formattedNum + divider

console.log(result)
