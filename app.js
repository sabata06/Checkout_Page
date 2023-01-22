const tikla = document.querySelector(".items");

tikla.addEventListener("click", (e) => {
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 0) {
      e.target.nextElementSibling.innerText--;
      pTotal(e.target.closest(".right"));
    } else {
      alert("YOUR ITEM WILL BE REMOVED");
      e.target.closest(".item").remove();
      calc();
    }
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    pTotal(e.target.closest(".right"));
  } else if (e.target.classList.contains("remove")) {
    e.target.closest(".item").remove();
    calc();
  }
});

let pTotal = (e) => {
  let ucret = e.querySelector("b").innerText;
  let sayi = e.querySelector(".amount").innerText;
  let total = (ucret * sayi).toFixed(0);

  e.querySelector(".proTotal").innerText = total;
  calc();
};

let calc = () => {
  let toplam = 0;
  let hepsi = document.querySelectorAll(".proTotal");

  hepsi.forEach((e) => {
    toplam += +e.innerText;
  });

  let taxx = toplam * 0.18;
  let end = toplam + taxx;

  document.querySelector("#SubTotal").innerText = "$" + toplam;
  document.querySelector("#tax").innerText = "$" + taxx;
  document.querySelector("#end").innerText = "$" + end;
};
