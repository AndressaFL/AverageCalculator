function Calcular() {
  let pNota = document.querySelector("#primeiranota");
  let sNota = document.querySelector("#segundanota");
  let tNota = document.querySelector("#terceiranota");
  let qNota = document.querySelector("#quartanota");
  let res = document.querySelector("#res");

  let pN = Number(pNota.value);
  let sN = Number(sNota.value);
  let tN = Number(tNota.value);
  let qN = Number(qNota.value);
  let media = (pN + sN + tN + qN) / 4;
  res.innerHTML = ``;
  if (pN == "" || sN == "" || tN == "" || qN == "") {
    alert(`Enter a valid number`);
    res.innerHTML = `You didn't enter a valid number. Please, try again!`;
  } else {
    if (media >= 7) {
      res.innerHTML += `<p> \u{1F44D} Congratulations, you passed!</p> Your average was ${media}`;
    } else {
      res.innerHTML += `<p> \u{1F44E} Sorry! You didn't pass!</p> Your average was ${media}`;
    }
  }

  console.log(res);
}
