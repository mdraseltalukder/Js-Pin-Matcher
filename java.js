const input = document.getElementById("input");
const generateBtn = document.getElementById("generate-btn");
const showValue = document.querySelector(".showValue");
const removeBtn = document.getElementById("removebtn");
const lastRemoveBtn = document.getElementById("last-remove-btn");
const submitBtn = document.getElementById("submit-button");
const correctPin = document.querySelector(".correct-pin");
const wrongPin = document.querySelector(".wrong-pin");
const tryLeft = document.getElementById("try-left");
const actionLeft = document.querySelector(".action-left");

console.log(actionLeft);
// generate pin input
function getInput() {
  const randomNumber = Math.floor(Math.random() * 9000 + 1000);
  input.value = randomNumber;
  input.removeAttribute("readonly", "readonly");
  generateBtn.disabled = true;
  generateBtn.style.backgroundColor = "#353c65";
  generateBtn.style.border = "8px solid #353c65";
}
// keypad input
function showKeypadInput(number) {
  if (input.value == "") {
    alert("please generate pin ");
  } else {
    showValue.value += number;
    showValue.removeAttribute("readonly", "readonly");
  }
}

// c
function allRemoverBtn() {
  showValue.value = "";
}

// <
function lastRemoverBtn() {
  showValue.value = showValue.value.slice(0, -1);
  // let currentValue = showValue.value;
  // showValue.value = currentValue.slice(0, -1);
}
function submitBtnClick() {
  if (input.value == showValue.value) {
    correctPin.style.display = "block";
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "green";
    generateBtn.style.backgroundColor = "green";
    actionLeft.innerText = "Done";
  } else {
    wrongPin.style.display = "block";
    // submitBtn.style.backgroundColor = "red";
    // generateBtn.style.backgroundColor = "red";
    let chances = tryLeft.innerText;
    if (chances >= 0) {
      tryLeft.innerText = --chances;
    }
    if (chances < 0) {
      actionLeft.innerText = "No try left! please try again after 24 hour";
      showValue.setAttribute("readonly", "readonly");
      submitBtn.disabled = true;
      input.value = "";
    }
  }
  if (showValue.value == "") {
    alert("first enter your generated pin");
    submitBtn.style.backgroundColor = "#495bc3";
    generateBtn.style.backgroundColor = "#353c65";
  }
}

// click event
generateBtn.addEventListener("click", getInput);
removeBtn.addEventListener("click", allRemoverBtn);
lastRemoveBtn.addEventListener("click", lastRemoverBtn);
submitBtn.addEventListener("click", submitBtnClick);
