export default function returnHowManyArguments(...args) {
  return args.length;
}

console.log(returnHowManyArguments('one'));
console.log(returnHowManyArguments('one', 'two', 3, '4th'));
