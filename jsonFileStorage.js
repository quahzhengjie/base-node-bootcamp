import { writeFile } from 'fs';

const filename = 'data.json';

export function Write(filename, jsonContentObj) {
  // Convert the data from JS Object to string
  const jsonContentStr = JSON.stringify(jsonContentObj);

  // Write JSON string to target file
  writeFile(filename, jsonContentStr, (writeErr) => {
    if (writeErr) {
      console.error('Writing error', writeErr);
    }
  });
}
