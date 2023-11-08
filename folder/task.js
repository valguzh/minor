const s = document.getElementById("1"),
  r = document.getElementById("2"),
  k = document.getElementById("3"),
  text = document.getElementById("text"),
  btn = document.getElementById("button");

function check() {
  const s1 = +s.value,
    r1 = +r.value,
    k1 = +k.value;
  if ((s1 ** (1 / 2)) - 2 * r1 >= k1) {
    text.innerText =
      "Да, круглую стену такого радиуса можно поместить в комнате.";
  } else {
    text.innerText = "Нет, такую сцену нельзя поместить в комнате.";
  }
}

btn.addEventListener("click", check);
