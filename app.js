/*
Створіть папку
В тій папці створіть 5 папок і 5 файлів
І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
FILE: {fileName}
FOLDER: {folderName}*/

const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, 'mainFolder');

fs.mkdir(filePath, (err) => {
    if (err) throw new Error(err.message);
});

const firstFile = path.join(__dirname, 'mainFolder', 'firstText.txt');
fs.writeFile(firstFile, 'Hello!!!', (err) => {
    if (err) throw new Error(err.message);
});
const secondFile = path.join(__dirname, 'mainFolder', 'secondText.txt');
fs.writeFile(secondFile, 'Hello!!!', (err) => {
    if (err) throw new Error(err.message);
});
const thirdFile = path.join(__dirname, 'mainFolder', 'thirdText.txt');
fs.writeFile(thirdFile, 'Hello!!!', (err) => {
    if (err) throw new Error(err.message);
});
const fourthFile = path.join(__dirname, 'mainFolder', 'fourthText.txt');
fs.writeFile(fourthFile, 'Hello!!!', (err) => {
    if (err) throw new Error(err.message);
});
const fifthFile = path.join(__dirname, 'mainFolder', 'fifthText.txt');
fs.writeFile(fifthFile, 'Hello!!!', (err) => {
    if (err) throw new Error(err.message);
});

const dir1 = path.join(__dirname, 'mainFolder','dir1');

fs.mkdir(dir1, (err) => {
    if (err) throw new Error(err.message);
});

const dir2 = path.join(__dirname, 'mainFolder','dir2');

fs.mkdir(dir2, (err) => {
    if (err) throw new Error(err.message);
});

const dir3 = path.join(__dirname, 'mainFolder','dir3');

fs.mkdir(dir3, (err) => {
    if (err) throw new Error(err.message);
});

const dir4 = path.join(__dirname, 'mainFolder','dir4');

fs.mkdir(dir4, (err) => {
    if (err) throw new Error(err.message);
});

const dir5 = path.join(__dirname, 'mainFolder','dir5');

fs.mkdir(dir5, (err) => {
    if (err) throw new Error(err.message);
});


fs.readdir(filePath, (err, files) => {
    if (err)
        throw new Error(err.message);
    else {
        console.log("\Filenames with the .txt extension:");
        files.forEach(file => {
            if (path.extname(file) === ".txt") {
                console.log('this is file', file);
            } else console.log('DIRRRR!!!',file)
        })
    }
})