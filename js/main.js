"use strict";
const ajaxSend = async (formatData) => {
  const fetchResp = await fetch("telegram.php", {
    method: "POST",
    body: formatData,
  });

  if (!fetchResp.ok) {
    throw new Error('Ошибка по адресу ${url}, статус ошибки ${fetchResp.ststus}');
  }
  return await fetchResp.text();
}

const form = document.querySelectorAll("form");
form.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formatData = new FormData(this);

    ajaxSend(formatData)
      .then((response) => {
        this.innerHTML = "Спасибо, <br> заявку получил";
        form.reset();
      })
      .catch((err) => console.error(err));
  });
});