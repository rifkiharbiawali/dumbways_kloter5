const cekPal = (urutan) => {
  let urutanS = urutan.split("");
  let urutanL = urutan.length;
  let urutanC = Math.ceil(urutanL / 2);
  urutan = urutan.toLowerCase();

  let cekGanjil = 0;
  if (urutanL % 2 == 1) {
    cekGanjil = 1;
  }
  let ar1 = [];
  let ar2 = [];

  for (let i = 0; i <= urutanC - 1; i++) {
    ar1.push(urutanS[i]);
  }

  for (let j = urutanC - 1; j < urutanL; j++) {
    ar2.push(urutanS[j]);
  }

  if (cekGanjil) {
  } else {
    ar2.splice(0, 1);
  }
  ar1 = ar1.join("");
  ar2 = ar2.reverse().join("");
  if (ar1 == ar2) {
    console.log(urutan + " Merupakan bilangan Palindrome");
  } else {
    console.log(urutan + " Bukan bilangan Palindrome");
  }
  return urutan;
};
cekPal("1001");
