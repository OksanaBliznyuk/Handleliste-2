var greet =
  "God dag! Her kan du lage en handleliste. Trykk - LEGG TIL, til å sette matværer i handlelisten. Trykk - SLETT til å slete matværer. ";
alert(greet);

let fullArray = [];
let needArray = [];
let emptyArray = [];

let fullBtn = document.getElementById("full-btn");
fullBtn.addEventListener("click", () => {
  addItem("full", fullArray);
});

let needBtn = document.getElementById("need-btn");
needBtn.addEventListener("click", () => {
  addItem("need", needArray);
});

let emptyBtn = document.getElementById("empty-btn");
emptyBtn.addEventListener("click", () => {
  addItem("empty", emptyArray);
});

//forandret:

function addItem(listName, array) {
  let inputValue = document.getElementById(`${listName}-input`).value;

  if (array == emptyArray) {
    let prisInput = document.getElementById("empty-price").value;
    if (prisInput <= 0) {
      alert("Pris må være høyere enn 0");
    } else {
      array.push({ name: inputValue, price: prisInput });
    }
  } else {
    array.push({ name: inputValue });
  }

  showItems(listName, array);
}

function showItems(listName, array) {
  let itemList = document.getElementById(`${listName}-list`);
  itemList.innerHTML = "";

  if (array == emptyArray) {
    calculatePrice();
  }

  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.innerText = array[i].name;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Slett";

    deleteBtn.addEventListener("click", () => {
      deleteItem(i, listName, array);
    });

    itemList.append(li, deleteBtn);
  }
}

//Kalkulator:
function calculatePrice() {
  let totalPrice = document.getElementById("total-price");
  let sum = 0;
  for (let i = 0; i < emptyArray.length; i++) {
    sum += parseInt(emptyArray[i].price);
  }
  totalPrice.innerText = sum;
}

function deleteItem(i, listName, array) {
  array.splice(i, 1);

  showItems(listName, array);
}
