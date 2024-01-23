const tabs = document.querySelectorAll("[data-tab-target");
const tabContent = document.querySelectorAll("[data-tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
    target.classList.add("active");
  });
});

const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
};

// document.getElementById("firstInput").addEventListener("keypress", (event) => {
//   console.log(event.key);
//   if (isNumeric(event.key)) {
//     console.log("Numeric bisa di pake");
//   }
// });

document.getElementById("firstExecute").addEventListener("click", function () {
  const inputVlue = document.getElementById("firstInput").value;
  let numConvert = parseFloat(inputVlue);
  let luasLinkaran = numConvert * numConvert;
  let pattern = "-";

  // if (inputVlue.match(/^\d+\.\d+$/)) {
  //   console.log("is Numeric");
  // }
  // if (!isNaN(inputVlue)) {
  //   console.log("is Number");
  // }
  // if (typeof inputVlue == "number") {
  // }
  // console.log(typeof numConvert);
  if (inputVlue == "") {
  } else if (inputVlue.match(pattern)) {
  } else {
    document.getElementById("rumus").innerHTML = "L = S x S ";
    document.getElementById("rumusInput").innerHTML =
      "L = " + inputVlue + " x " + inputVlue;
    document.getElementById("hasil").innerHTML = "L = " + luasLinkaran;
  }
});

function firstButtonReset() {
  document.getElementById("rumus").innerHTML = "";
  document.getElementById("rumusInput").innerHTML = "";
  document.getElementById("hasil").innerHTML = "";
}

document.getElementById("firstReset").addEventListener("click", () => {
  firstButtonReset();
});

// Keliling lingkaran
document.getElementById("secondExecute").addEventListener("click", function () {
  const inputVlue = document.getElementById("secondInput").value;
  let numConvert = parseFloat(inputVlue);
  let KelilingLinkaran = 4 * numConvert;

  if (inputVlue == "") {
  } else {
    document.getElementById("rumusKeliling").innerHTML = " K = 4 x S ";
    document.getElementById("rumusInputKeliling").innerHTML =
      "K = 4 " + " x " + inputVlue;
    document.getElementById("hasilKeliling").innerHTML =
      "K = " + KelilingLinkaran;
  }
});

function secondButtonReset() {
  document.getElementById("rumusKeliling").innerHTML = "";
  document.getElementById("rumusInputKeliling").innerHTML = "";
  document.getElementById("hasilKeliling").innerHTML = "";
}

document.getElementById("secondReset").addEventListener("click", () => {
  secondButtonReset();
});
