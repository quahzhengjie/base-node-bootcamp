import { write } from './filestore.js';

// Get some data from our app
const myData = { name: 'kai' };
// Save that data to our JSON DB
write('data.json', myData);
