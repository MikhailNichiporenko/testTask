const fileSystem = require('fs');
const sourseFilePath = './sourse.txt';

let fileContent;
let correctReversedData;
let dataFromFile = [];

//Reading data from sourse.txt
try {
    fileContent = fileSystem
    .readFileSync(sourseFilePath, 'utf8')
    .split('\n');
} catch (err){
    if (err.code === 'ENOENT'){
        console.log(`ERROR, file not found! ${err.message}!`);
    } else {
        throw err;
    }
}

fibonachi(fileContent);
revers(dataFromFile);

//Create output file and write reversed data into this file
fileSystem.writeFile('./output.txt', correctReversedData, (err) => {
    if (err) {
        console.log(`${err}`);
    } else {
        console.log(`Data are successfully saved in the file storage. ---> output.txt`);
    }
})

//Filtering data by fibonacci numbers
function fibonachi(arr) {
    let prevIndex = 0;
    let nextIndex = 1;
    console.log(`Filtering data...`);
    for (let i = 0; i < arr.length; i++) {
        let temp = nextIndex;
        nextIndex = prevIndex + nextIndex;
        prevIndex = temp;
        if (nextIndex <= arr.length) {
            dataFromFile.push(arr[nextIndex - 1]);
        } else {
            break;
        }
    }
}

//Revers function
function revers(arr) {
    let reversedData = "";
    console.log(`Reversing data...`);
    arr.forEach(elem => {
        elem = "\n" + elem;
        for (let i = elem.length - 1; i >= 0; i--) {
            reversedData += elem[i];
        }
    });
    correctReversedData = reversedData.trim();
}