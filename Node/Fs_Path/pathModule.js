import path from 'path';

const myPath = ' C:\\Users\\Dev Chauhan\\Desktop\\MERN Stack\\node\\fs_path\\demo.txt';

console.log("Before");
console.log("path :",myPath);
console.log("extention :",path.extname(myPath));
console.log("directory :",path.dirname(myPath));
console.log("base :",path.basename(myPath));

console.log("After");

// console.log(path.join(myPath,"demo.txt"));