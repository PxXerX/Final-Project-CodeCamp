let resumebg = document.getElementById("resumebg");
let turnRed = document.getElementById("turnRed");
let turnGray = document.getElementById("turnGray");
let turnYellow = document.getElementById("turnYellow");
let turnBlue = document.getElementById("turnBlue");

document.getElementById("turnRed").style.display = "none";
document.getElementById("turnGray").style.display = "none";
document.getElementById("turnYellow").style.display = "none";
document.getElementById("turnBlue").style.display = "none";

turnRed.addEventListener("click", function() {
  resumebg.style.backgroundColor = "#b22222";
});
turnGray.addEventListener("click", function() {
  resumebg.style.backgroundColor = "gray";
});
turnYellow.addEventListener("click", function() {
  resumebg.style.backgroundColor = "goldenrod";
});
turnBlue.addEventListener("click", function() {
  resumebg.style.backgroundColor = "steelblue";
});

let inputresame = document.getElementById("inputresame");
document.getElementById("inputresame").style.display = "none";

function iresume() {
  document.getElementById("inputresame").style.display = "block";
}

function submit() {
  let x_nickname = document.getElementById("iNickname");
  let x_name = document.getElementById("iFullname");

  let x_skill1 = document.getElementById("iSkill1");
  let x_skill2 = document.getElementById("iSkill2");

  document.getElementById("skill1").innerHTML = x_skill1.value;
  document.getElementById("skill2").innerHTML = x_skill2.value;

  if (x_name.value != "") {
    if (x_nickname.value != "") {
      document.getElementById("Fullname").innerHTML = x_name.value;
      document.getElementById("Nickname").innerHTML = x_nickname.value;
    } else {
      alert("Input your nickname");
    }
  } else {
    alert("Input your fullname");
  }
}
function changeColor() {
  document.getElementById("turnRed").style.display = "block";
  document.getElementById("turnGray").style.display = "block";
  document.getElementById("turnYellow").style.display = "block";
  document.getElementById("turnBlue").style.display = "block";
}

let count = 0;
function add() {
  count += 1;
  if (count > 2) {
    count = 2;
  }
  allow(count);
}
function del() {
  count -= 1;
  if (count < 0) {
    count = 0;
  }
  allow(count);
}
function allow(n) {
  if (n == 0) {
    document.getElementById("iSkill1").setAttribute("disabled", true);
    document.getElementById("iSkill1").value = "";
  }
  if (n == 1) {
    document.getElementById("iSkill1").removeAttribute("disabled");
    document.getElementById("iSkill2").setAttribute("disabled", true);
    document.getElementById("iSkill2").value = "";
  }
  if (n == 2) {
    document.getElementById("iSkill2").removeAttribute("disabled");
  }
}
