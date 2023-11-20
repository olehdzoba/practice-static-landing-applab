document.addEventListener("DOMContentLoaded", () => {
  const closeDisclaimer = document.getElementById("close-disclaimer");
  const toggleCheckbox = document.getElementById("toggle-checkbox");
  const priceAnually = document.getElementById("price-anually");
  const testimoniesSlider = new Splide("#testimonies", {
    arrows: false,
    pagination: false,
    rewind: true,
    drag: false,
  });
  const nextArrow = document.getElementById("next-arrow");
  const prevArrow = document.getElementById("prev-arrow");

  let paymentMonthly = false;

  testimoniesSlider.mount();

  closeDisclaimer.onclick = () => {
    const disclaimer = document.getElementById("disclaimer");
    disclaimer.remove();
  };

  toggleCheckbox.onchange = () => {
    paymentMonthly = !paymentMonthly;

    if (paymentMonthly) {
      priceAnually.textContent = "$120";
    } else {
      priceAnually.textContent = "$99";
    }
  };

  nextArrow.onclick = () => testimoniesSlider.go(">");
  prevArrow.onclick = () => testimoniesSlider.go("<");
});
