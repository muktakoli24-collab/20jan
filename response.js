
  const buttons = document.querySelectorAll(".toggle-btn");

 buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    const moreText = btn
      .closest("li")
      .querySelector(".more");

    moreText.classList.toggle("show");

    btn.textContent = moreText.classList.contains("show")
      ? "Read Less"
      : "Read More";
  });

});


