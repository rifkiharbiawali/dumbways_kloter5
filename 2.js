const ar = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const ubahMatrix = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = ar[i][j];
      ar[i][j] = ar[j][i];
      ar[j][i] = tmp;
    }
  }
};
ubahMatrix(ar);
console.log(ar);
