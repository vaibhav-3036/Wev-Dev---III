// import path from 'path';
// import fs from 'fs';
// import { fileURLToPath } from 'url';

// // const fs = require('fs');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const file = 'core_modules.js';
// const filePath = path.join(__dirname, file);

// // console.log(path.dirname(filePath));
// // console.log(path.basename(filePath));
// // console.log(path.extname(filePath));
// // console.log(filePath);

// // const data = fs.readFileSync("sample.txt", 'utf-8');


// // console.log("A")
// // fs.readFile("sample.txt", 'utf-8', (err, data) => {
// //     if (err) {
// //         console.error(err);
// //         return;
// //     }
// //     else {
// //         console.log(data);
// //     }
// // });
// // console.log("B")


// // async function readData() {
// //   try {
// //     const data = await fs.readFile('sample.txt', 'utf-8');
// //     console.log('Content:', data);
// //   } catch (err) {
// //     console.error('Error:', err.message);
// //   }
// // }

// // readData();

// // fs.writeFileSync("sample.txt", "Hello this is updated content for the writefile method");  //Synchorunus method

// // fs.writeFile("sample.txt", "Hello this is updated content for the writefile method again", (err) => {
// //     if (err)console.log(err);   
// //     }
// // )



// // fs.appendFileSync("sample.txt", "\nHello this is updated content for the appendfile method in inew line");  //Synchorunus method

// // fs.unlinkSync("file.txt");  //Synchorunus method

// // fs.renameSync("sample.txt", "new_sample.txt");  //Synchorunus method

// // fs.copyFileSync("new_sample.txt", "copy_sample.txt");  //Synchorunus method

// // fs.mkdirSync("new_folder");  //Synchorunus method

// // fs.rmdirSync("new_folder");  //Synchorunus method  



// //  Hashing and Encryption

// // import crypto from 'crypto';

// // const salt = crypto.randomBytes(16).toString('hex');

// // const password = "Password123";

// // const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');

// // console.log("Salt:", salt);
// // console.log("Hash:", hash);

// //  Dns 

// import dns from 'dns';

// dns.lookup('www.example.com', (err, address, family) => {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('Address:', address);
//     console.log('Family:', family);
//   }
// });

// dns.reverse('8.8.8.8', (err, hostnames) => {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('Hostnames:', hostnames);
//   }
// });


//  Process Module

import process from 'process';

// const data = process.argv;
// console.log(data);

// console.log(Number(data[2]) + Number(data[3]));

// console.log(process.platform)