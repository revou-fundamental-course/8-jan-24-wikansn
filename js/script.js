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

document.getElementById("firstExecute").addEventListener("click", function () {
  const inputVlue = document.getElementById("firstInput").value;
  let intConvert = parseInt(inputVlue);
  let luasLinkaran = intConvert * intConvert;

  if (inputVlue == "") {
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
  let intConvert = parseInt(inputVlue);
  let KelilingLinkaran = 4 * intConvert;

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
