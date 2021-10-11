import { writeFile } from 'fs';

// write('data.json', myData);
// Where myData was defined as, const myData = { name: 'kai' };

export function write(filename, jsonContentObj) {
  // Convert the data from JS Object to string
  const jsonContentStr = JSON.stringify(jsonContentObj);

  // Write JSON string to target file
  writeFile(filename, jsonContentStr, (writeErr) => {
    if (writeErr) {
      console.error('Writing error', writeErr);
    }
  });
}
