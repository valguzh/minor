const node_for_click_surname = document.getElementById("for_click_surname");
function find_edit_surname() {
  const item = document.getElementsByTagName("div")[3];
  console.log(item.innerText);
  item.innerText = "GUZHVINA";
}

node_for_click_surname.addEventListener("click", find_edit_surname);

const node_for_click_name = document.getElementById("for_click_name");
function find_edit_name() {
  const item1 = document.getElementsByTagName("div")[4];
  console.log(item1.innerText);
  item1.innerText = "VALERIYA";
}

node_for_click_name.addEventListener("click", find_edit_name);

const node_for_click_year = document.getElementById("for_click_year");
function find_edit_year() {
  const item2 = document.getElementsByTagName("div")[7];
  console.log(item2.innerText);
  item2.innerText = "01.01.MMIII";
}

node_for_click_year.addEventListener("click", find_edit_year);
