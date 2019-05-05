const chalk = require("chalk");
const jpeg = require("jpeg-js");
const fs = require("fs");

const decodedImage = jpeg.decode(fs.readFileSync("images.jpg"), true);

function print(imageData) {
    let result = "";
    for (let j = 0; j < imageData.data.length; j += 4 * imageData.width) {
        for (let i = 0; i < 4 * imageData.width ; i += 4) {
            result += chalk.bgRgb(imageData.data[j+ i],imageData.data[j+ i+ 1],imageData.data[j+ i+ 2])("  ");
        }
        result += "\n";
    }
    console.log(result);
}

print(decodedImage);