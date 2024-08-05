const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let a = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  for (let i = 0; i < arr.length; i++) {
    let sign = "";
    for (let j = 0; j < arr[i].length; j += 2) {
      if (arr[i].slice(j, j + 2) === "00") continue;
      if (arr[i].slice(j, j + 2) === "**") {
        sign += "**";
      }
      if (arr[i].slice(j, j + 2) === "10") {
        sign += ".";
      }
      if (arr[i].slice(j, j + 2) === "11") {
        sign += "-";
      }
    }
    a.push(sign);
  }
  let resultArr = a.map((item) =>
    item === "**********" ? (item = " ") : (item = MORSE_TABLE[item])
  );
  console.log(resultArr.join(""));
  return resultArr.join("");
}

module.exports = {
  decode,
};
