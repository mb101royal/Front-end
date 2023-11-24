"use strict";

async function getCharacters(link) {
  return fetch(link).then((res) => res.json());
}

async function toHtml() {
  let link = `https://restcountries.com/v3.1/all`;
  let response = await getCharacters(link);
  fillHTML(response);
}

function fillHTML(info) {
  let result = "";
  const cardList = document.getElementById("List");
  info.forEach((element) => {
    result +=
    `<div class="col-md-3 my-3">
        <div class="card" style="width: 18rem">
            <img src="${element.flags.png}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${element.name.common}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Detail</a>
                </div>
            </div>
    </div>`;
  });

  cardList.innerHTML = result;
}

toHtml();