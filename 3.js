let tulisan = "";
let array = [
  "D",
  "U",
  "M",
  "B",
  "W",
  "A",
  "Y",
  "S",
  "I",
  "D",
  "U",
  "J",
  "I",
  "A",
  "N",
];
for (let i = 0; i < 5; i++) {
  for (let j = 5; j >= i; j--) {
    tulisan += " ";
  }
  for (let k = 0; k <= i; k++) {
    if (i == 0 || (i == 3 && k == 3)) {
      tulisan += array[0] + " ";
    } else if ((i == 1 && k == 0) || (i == 4 && k == 0)) {
      tulisan += array[1] + " ";
    } else if (i == 1 && k == 1) {
      tulisan += array[2] + " ";
    } else if (i == 2 && k == 0) {
      tulisan += array[3] + " ";
    } else if (i == 2 && k == 1) {
      tulisan += array[4] + " ";
    } else if ((i == 2 && k == 2) || (i == 4 && k == 3)) {
      tulisan += array[5] + " ";
    } else if (i == 3 && k == 0) {
      tulisan += array[6] + " ";
    } else if (i == 3 && k == 1) {
      tulisan += array[7] + " ";
    } else if ((i == 3 && k == 2) || (i == 4 && k == 2)) {
      tulisan += array[8] + " ";
    } else if (i == 4 && k == 1) {
      tulisan += array[11] + " ";
    } else if (i == 4 && k == 4) {
      tulisan += array[14] + " ";
    }
  }
  tulisan += "\n";
}
console.log(tulisan);
