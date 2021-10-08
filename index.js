// // //Array of the programme parameters

// console.log('this is process argv!');
// console.log(process.argv);
// // Always starting at index 2
// console.log(process.argv[2]);

// // //Process.argv contains info of what was type into terminal when node.js was executed.
// // // js .......)

// // //**** process argv[0]: absolute path to node.js app
// // //[1]: absolute[1]: absolute path to JS file that is running in node.

// // //The data type of process.argv values is always string.

// // console.log('Process argv values are strings!');
// // console.log(process.argv[2] + process.argv[3] + process.argv[4]);

// eslint-disable-next-line max-len
// // Use process.argv to capture input from the user. Since the first two elements of the process.argv array will be the Node.js path and the file path, we start looking for user arguments at element 2.

// // const distanceInKm = process.argv[2];
// // const distanceInMiles = Number(distanceInKm) * 0.62;
// // console.log(distanceInMiles);

// // // ICE-1
// // console.log('works!');

// Conversion Apps
// eslint-disable-next-line max-len
// We will build conversion apps, similar to what we did in Coding Basics, as a way to familiarise ourselves with Node.js and command-line apps. Build the following apps that generate the relevant output when we run the following sample commands.

// Celsius-Fahrenheit Converter
// Create an app that converts Celsius input to Fahrenheit output.

// const TemperatureinCelsius = process.argv[2];
// const TemperatureinFahrenheit= Number(TemperatureinCelsius*1.8)+32
// console.log(TemperatureinFahrenheit)

// for (let i=2; i<process.argv.length; i+=1){
//   const tempInCelsius = process.argv[i];
// const tempInFahrenheit = Math.round(Number(tempInCelsius*9/5)+32)
// console.log(tempInFahrenheit);
// }

// Bi-Directional Temperature Converter
// eslint-disable-next-line max-len
// Update our converter to take the source temperature unit and target temperature unit as input, in addition to temperature values. This should enable us to convert both ways, from Celsius to Fahrenheit and vice versa.

// const getValue = () => {
//   const source = process.argv[2];
//   const result = process.argv[3];
//   if (source === 'celsius' && result === 'fahrenheit') { return CelsiusToFahrenheit(); }
//   if (source === 'fahrenheit' && result === 'celsius') { return FahrenheitToCelsius(); }
// };

// var CelsiusToFahrenheit = () => {
//   let output = '';
//   for (let i = 4; i < process.argv.length; i += 1) {
//     const tempInCelsius = process.argv[i];
//     const tempInFahrenheit = Math.round(Number(tempInCelsius * 9 / 5) + 32);
//     output += `${tempInFahrenheit} `;
//   }
//   return output;
// };

// const FahrenheitToCelsius = () => {
//   let output = '';
//   for (let i = 4; i < process.argv.length; i += 1) {
//     const tempInFahrenheit1 = process.argv[i];
//     const tempInCelsius1 = Math.round(Number(tempInFahrenheit1 - 32) * 5 / 9);
//     output += `${tempInCelsius1} `;
//   }
//   return output;
// };

// console.log(getValue());

// import what is in addition.js (Addition fn of a+b where (a,b))

// Pre Class 2.

// ADDITION
// import { add } from './addition.js';
// console.log(add(2, 2));

// Imperial Conversion
// import {
//   kilometersToMiles,
//   celciusToFahrenheit,
//   kilogramsToPounds,
// } from './imperialConversion.js';

// // console.log(FN(input));
// console.log(kilometersToMiles(3));
// console.log(celciusToFahrenheit(3));
// console.log(kilogramsToPounds(3));

// AREA
// import { circleArea } from './area.js';

// console.log(circleArea(5.2)); // PI is being used *inside* this function
// const PI = 3.14;
// console.log(PI);
// You will get an error.
// The variable is not accessible, unless you also import PI. {circleArea,PI};

// Calc Bill
// import { calculateBill } from './tripCost.js';

// const apple = Number(1);
// const banana = Number(2);
// const cat = Number(3);
// const donkey = Number(4);
// const elephant = Number(5);
// const items = [apple, banana, cat, donkey, elephant];
// const items = [1, 2, 3, 4, 5];
// console.log(calculateBill(items));

// For default exports, the imported variable's name does not need to
// match the exported variable's name in the source module.
// For example, we could replace the following "add" with "foo"./main
// import main from './testdefault.js';

// console.log(main(2, 5));

// maths.js
// import * as maths from './maths.js';
// console.log(maths.add(2, 3));
// console.log(maths.subtract(7, 8));

// import * as css from './CSSConversions.js';

// console.log(css.rgbToHex1(0, 51, 255));
// // // #0033ff
// console.log(css.hexToRgb('#0033ff'));

// DISK READING
// Import readFile function from global fs module. fs stands for file system.
// import { readFile } from 'fs';

// Disk Reading P2
// import { readFile } from 'fs';

// const handleFileRead = (error, content) => {
//   // Split the content of our file by lines
//   const lines = content.split('\n');
// -> split creates an array , is the identifier

//   // For each line, log the line number and the content of that line
//   for (let i = 0; i < lines.length; i += 1) {
//     console.log(`Line ${i + 1}: ${lines[i]}`);
//   }
// };

// readFile('mystuff.txt', 'utf8', handleFileRead);

// dk how to do the absolute path thing.

import * as css from './CSSConversions.js';

console.log(css.componentToHex(0, 51, 255));

// // 1
// console.log('done importing from fs');

// // Define callback function to run after retrieving file contents in readFile
// // 4
// const handleFileRead = (error, content) => {
//   console.log('running inside of handleFileRead');

//   // Handle errors if any
//   if (error) {
//     console.log('read error', error);
//     return;
//   }
//   // 5
//   console.log('content', content);
// };
// // 2
// console.log('about to call readFile');

// // 2nd param 'utf8' specifies the file encoding.
// // Read more about UTF8 here: https://en.wikipedia.org/wiki/UTF-8
// readFile('mystuff.txt', 'utf8', handleFileRead);
// // 3
// console.log('done calling readFile');
